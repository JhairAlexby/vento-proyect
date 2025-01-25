import { axiosInstance } from '../config/axios';
import API_ENDPOINTS from '../constants/endpoints';
import { LoginCredentials, RegisterData, User } from '@/types/auth';

export const authApi = {
  login: (credentials: LoginCredentials) => 
    axiosInstance.post<User>(API_ENDPOINTS.auth.LOGIN, credentials),
    
  register: (userData: RegisterData) =>
    axiosInstance.post<User>(API_ENDPOINTS.auth.REGISTER, userData),
    
  logout: () => 
    axiosInstance.post(API_ENDPOINTS.auth.LOGOUT)
};