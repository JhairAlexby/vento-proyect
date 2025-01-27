import { axiosInstance } from '../config/axios';
import API_ENDPOINTS from '../constants/endpoints';
import { LoginCredentials, RegisterData, User } from '@/types/auth';

export const authApi = {
  login: (credentials: LoginCredentials) => 
    axiosInstance.post<{ user: User }>(API_ENDPOINTS.auth.LOGIN, credentials),
    
  register: (userData: RegisterData) =>
    axiosInstance.post<{ user: User }>(API_ENDPOINTS.auth.REGISTER, userData),
    
  logout: () => 
    axiosInstance.post(API_ENDPOINTS.auth.LOGOUT),

  verifySession: () =>
    axiosInstance.get<User>(API_ENDPOINTS.auth.VERIFY)
};