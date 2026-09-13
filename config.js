// Dynamic API configuration for Vite
// Reads from VITE_API_BASE_URL env variable, with fallbacks

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
    (window.location.port === '10000' ? 'http://localhost:10000' :
    window.location.hostname.includes('vercel.app') ? 'https://elekerentalbe-production.up.railway.app' :
    'http://localhost:5000');

window.API_BASE_URL = API_BASE_URL;
console.log('API Base URL configured:', API_BASE_URL);

export { API_BASE_URL };