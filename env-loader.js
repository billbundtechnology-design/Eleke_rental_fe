/**
 * Development Environment Loader
 * Loads environment variables for HTML pages in development mode
 * In production, this will be compiled away
 */

(function loadEnv() {
    // This will be replaced by Vite with actual values during build
    // For development, we set defaults
    
    if (!window.__VITE_API_BASE_URL_INJECTED__) {
        // Try to get from localStorage (user may have set it)
        const saved = localStorage.getItem('VITE_API_BASE_URL');
        if (saved) {
            window.VITE_API_BASE_URL = saved;
            window.__VITE_API_BASE_URL_INJECTED__ = true;
            console.log('[Env Loader] Loaded from localStorage:', saved);
            return;
        }
        
        // For development, default to localhost
        const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        if (isDev) {
            window.VITE_API_BASE_URL = 'http://localhost:5000';
            window.__VITE_API_BASE_URL_INJECTED__ = true;
            console.log('[Env Loader] Development mode - using localhost');
        }
    }
})();
