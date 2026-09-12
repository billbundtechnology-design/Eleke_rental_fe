/**
 * API Configuration - Centralized via .env file
 * All API URLs are configured in .env file
 * No hardcoded URLs in the code
 */

(function initializeAPIConfig() {
    // Check for environment variable set by Vite or build process
    let apiUrl = window.__API_BASE_URL__ || window.VITE_API_BASE_URL;
    
    // Fallback to localStorage if previously set
    if (!apiUrl) {
        apiUrl = localStorage.getItem('VITE_API_BASE_URL');
        if (apiUrl) {
            console.log('[API Config] Using saved configuration from localStorage');
        }
    }
    
    // Final fallback for development
    if (!apiUrl) {
        apiUrl = 'http://localhost:5000';
        console.log('[API Config] Using default development URL');
    }
    
    // Set the API base URL
    window.API_BASE_URL = apiUrl;
    console.log('[API Config] API_BASE_URL =', apiUrl);
})();

/**
 * Get full API endpoint URL
 * @param {string} path - API path (e.g., '/auth/login' or 'auth/login')
 * @returns {string} Full API URL
 */
window.getApiUrl = function(path) {
    if (!window.API_BASE_URL) {
        console.error('[API URL] API_BASE_URL is not configured. Check your .env file!');
        return path;
    }
    
    // Remove trailing slash from base if present
    const cleanBase = window.API_BASE_URL.endsWith('/') ? window.API_BASE_URL.slice(0, -1) : window.API_BASE_URL;
    // Add leading slash to path if not present
    const cleanPath = path.startsWith('/') ? path : '/' + path;
    // Ensure /api/ is in the path
    const fullPath = cleanPath.startsWith('/api/') ? cleanPath : '/api' + cleanPath;
    
    return `${cleanBase}${fullPath}`;
};

/**
 * Get just the API base URL
 * @returns {string} API base URL
 */
window.getApiBaseUrl = function() {
    return window.API_BASE_URL || null;
};

console.log('[API Config] Initialization complete');
