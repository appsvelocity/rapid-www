import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Vite-SSG entry point
export { App }

// Client-side hydration
if (typeof window !== 'undefined') {
  createRoot(document.getElementById("root")!).render(<App />);
}