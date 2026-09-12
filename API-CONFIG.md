# API Configuration Guide

This document explains how the frontend handles API base URL configuration.

## Single Source of Truth: .env File

All API URLs are configured in the `.env` file. No hardcoded URLs in the code.

### Setup Instructions

1. **Copy environment template**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` with your API URL**
   ```bash
   # For local development
   VITE_API_BASE_URL=http://localhost:5000
   
   # For production (Railway)
   # VITE_API_BASE_URL=https://gani-eleke-backend-production.up.railway.app
   ```

3. **Save and restart dev server**
   ```bash
   npm run dev
   ```

## Available Configurations

### Local Development
```env
VITE_API_BASE_URL=http://localhost:5000
```

### Production - Railway
```env
VITE_API_BASE_URL=https://gani-eleke-backend-production.up.railway.app
```

### Production - Render
```env
VITE_API_BASE_URL=https://gani-eleke-backend.onrender.com
```

## API Functions

All pages have access to these global functions:

### `getApiUrl(path)`
Get full API endpoint URL
```javascript
const url = getApiUrl('/auth/login');
// Returns: http://localhost:5000/api/auth/login
```

### `getApiBaseUrl()`
Get just the API base URL
```javascript
const baseUrl = getApiBaseUrl();
// Returns: http://localhost:5000
```

## Troubleshooting

### CORS Errors
If you get a CORS error when logging in:
1. Check that your backend is running on `http://localhost:5000`
2. Verify the backend has CORS configured correctly
3. Check the browser console for logs starting with `[API Config]`
4. Run `console.log(window.API_BASE_URL)` to see the current URL

### Wrong API URL
To debug which URL is being used:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for log messages starting with `[API Config]`
4. Run `window.getApiUrl('/health')` to test the full URL

### .env Changes Not Taking Effect
If you update `.env`, you must restart the dev server:
```bash
# Stop: Ctrl+C
# Start:
npm run dev
```

## Important Notes

- ✅ Never commit `.env` file to git (it's in `.gitignore`)
- ✅ Always use `.env.example` as template
- ✅ URL is configured once in `.env`, used everywhere
- ✅ No hardcoded URLs in HTML or JavaScript files
