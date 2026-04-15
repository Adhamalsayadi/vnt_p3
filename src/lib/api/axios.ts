import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // If backend uses cookies
});

// Request interceptor to attach token
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      // If we ever store token in localStorage, we can retrieve it here. 
      // But we are moving to cookies, which are sent automatically if withCredentials is true.
      // However, if the backend uses Bearer tokens and we sync it, attach it here:
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('auth_token='))
        ?.split('=')[1];

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle global errors (e.g., 401 Unauthorized)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // If the server returns 401 Unauthorized
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined') {
        // Here we could import and call our removeAuthCookie action
        // or just clear the auth store and let them get redirected.
        // For Client side Next.js, sometimes we dispatch an event or use router
        // Since we are not in a component, we can reload the page or redirect purely to /login
        
        // This clears HTTP cookie loosely on client side, but server action is better.
        document.cookie = "auth_role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
