import axios from 'axios';

const API_URL = (import.meta as any).env.VITE_API_URL;

export const registerUser = async (userData: any) => {
    try {
        const response = await axios.post(`${API_URL}/users/register`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};