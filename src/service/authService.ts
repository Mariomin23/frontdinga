import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = (import.meta as any).env.VITE_API_URL;

// --- CONFIGURACIÓN DE AXIOS (Interceptor) ---
// Esto añade el token automáticamente a todas tus futuras peticiones
axios.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
});

// --- FUNCIONES ---

export const loginUser = async (credentials: any) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, credentials);
        
        // Extraemos el token según la estructura de tu consola: { status: 200, token: '...' }
        const { token } = response.data;

        if (token) {
            // Guardamos la cookie de forma persistente
            Cookies.set('token', token, { 
                expires: 1,      // 1 día de duración
                secure: false,   // Importante: false para localhost (HTTP)
                sameSite: 'strict' 
            });
            console.log("✅ [AuthService] Token guardado en cookies.");
        }

        return response.data;
    } catch (error: any) {
        console.error("❌ [AuthService] Error en la petición de login");
        throw error.response?.data || error.message;
    }
};

export const logout = () => {
    Cookies.remove('token');
    window.location.href = '/login';
};

// Exportamos también el registro por si lo necesitas
export const registerUser = async (userData: any) => {
    try {
        const response = await axios.post(`${API_URL}/users/register`, userData);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};