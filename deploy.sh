#!/bin/bash

# Script de déploiement SSG pour RAPID© Framework
# Usage: ./deploy.sh [production|staging]

set -e

ENVIRONMENT=${1:-production}
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo "🚀 Déploiement SSG - Environnement: $ENVIRONMENT"
echo "⏰ Timestamp: $TIMESTAMP"

# Couleurs pour les logs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction de log
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérifier les prérequis
log "Vérification des prérequis..."

if ! command -v node &> /dev/null; then
    error "Node.js n'est pas installé"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    error "npm n'est pas installé"
    exit 1
fi

# Nettoyer les builds précédents
log "Nettoyage des builds précédents..."
rm -rf dist/
rm -rf .vite/

# Installer les dépendances
log "Installation des dépendances..."
npm ci

# Linter
log "Vérification du code..."
npm run lint

# Build SSG
log "Génération du build SSG..."
npm run build:ssg

# Vérifier que les fichiers ont été générés
log "Vérification des fichiers générés..."

required_files=(
    "dist/index.html"
    "dist/fr/index.html"
    "dist/pt/index.html"
    "dist/es/index.html"
    "dist/de/index.html"
    "dist/it/index.html"
    "dist/sitemap.xml"
    "dist/robots.txt"
)

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        error "Fichier manquant: $file"
        exit 1
    fi
done

log "✅ Tous les fichiers requis ont été générés"

# Créer un backup de la version précédente (si applicable)
if [ -d "/var/www/html" ]; then
    log "Création d'un backup de la version précédente..."
    sudo cp -r /var/www/html /var/www/html.backup.$TIMESTAMP
fi

# Déployer les fichiers
log "Déploiement des fichiers..."

if [ "$ENVIRONMENT" = "production" ]; then
    # Production - copier vers /var/www/html
    sudo cp -r dist/* /var/www/html/
    sudo chown -R www-data:www-data /var/www/html/
    sudo chmod -R 755 /var/www/html/
    
    log "✅ Déploiement en production terminé"
    log "🌐 Site accessible sur: https://rapid.appsvelocity.com"
    
elif [ "$ENVIRONMENT" = "staging" ]; then
    # Staging - copier vers un dossier de staging
    STAGING_DIR="/var/www/staging.$TIMESTAMP"
    sudo mkdir -p $STAGING_DIR
    sudo cp -r dist/* $STAGING_DIR/
    sudo chown -R www-data:www-data $STAGING_DIR/
    sudo chmod -R 755 $STAGING_DIR/
    
    log "✅ Déploiement en staging terminé"
    log "🌐 Site accessible sur: http://staging.rapid.appsvelocity.com"
    
else
    error "Environnement invalide. Utilisez 'production' ou 'staging'"
    exit 1
fi

# Vérifier la configuration nginx
log "Vérification de la configuration nginx..."
if sudo nginx -t; then
    log "✅ Configuration nginx valide"
    sudo systemctl reload nginx
    log "✅ Nginx rechargé"
else
    warn "⚠️  Configuration nginx invalide"
fi

# Tests de santé
log "Tests de santé..."

# Vérifier que les pages principales sont accessibles
urls=(
    "http://localhost/"
    "http://localhost/fr/"
    "http://localhost/pt/"
    "http://localhost/es/"
    "http://localhost/de/"
    "http://localhost/it/"
)

for url in "${urls[@]}"; do
    if curl -s -o /dev/null -w "%{http_code}" "$url" | grep -q "200"; then
        log "✅ $url - OK"
    else
        warn "⚠️  $url - Erreur"
    fi
done

# Nettoyer les anciens backups (garder seulement les 5 plus récents)
log "Nettoyage des anciens backups..."
if [ -d "/var/www" ]; then
    cd /var/www
    ls -t html.backup.* | tail -n +6 | xargs -r sudo rm -rf
fi

# Statistiques finales
log "📊 Statistiques du déploiement:"
echo "   - Fichiers générés: $(find dist -type f | wc -l)"
echo "   - Taille totale: $(du -sh dist | cut -f1)"
echo "   - Langues supportées: 6 (en, fr, pt, es, de, it)"
echo "   - Timestamp: $TIMESTAMP"

log "🎉 Déploiement SSG terminé avec succès !"
log "📈 Le site est maintenant optimisé pour le SEO multi-langues"

# Notification (optionnel)
if command -v notify-send &> /dev/null; then
    notify-send "Déploiement SSG" "Le site RAPID© Framework a été déployé avec succès !"
fi
