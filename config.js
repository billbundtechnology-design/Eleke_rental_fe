/**
 * Frontend Configuration
 * All API configuration is handled in api-config.js and env-loader.js
 * This file is loaded by main.jsx for React components
 */

// For React/module contexts, re-export the globals
if (typeof import !== 'undefined') {
    try {
        export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
        export const getApiUrl = window.getApiUrl || ((path) => `${API_BASE_URL}/api${path.startsWith('/') ? '' : '/'}${path}`);
        export const getApiBaseUrl = window.getApiBaseUrl || (() => API_BASE_URL);
    } catch (e) {
        // Fallback if module syntax fails
        console.log('[Config] Module export failed, using window globals');
    }
}

console.log('[Config] Frontend configuration loaded');;