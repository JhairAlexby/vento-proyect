import { axiosInstance } from '../config/axios';
import API_ENDPOINTS from '../constants/endpoints';
import { ProductResponse, MenuItemInput, MenuItem } from '@/types/menu';

export const productApi = {
  getAll: () => 
    axiosInstance.get<ProductResponse>(API_ENDPOINTS.products.BASE),
  
  create: (productData: MenuItemInput) =>
    axiosInstance.post<MenuItem>(API_ENDPOINTS.products.BASE, productData),
  
  update: (id: string, productData: MenuItemInput) => {
    const updateData = {
      name: productData.name.trim(),
      description: productData.description.trim(),
      price: Number(productData.price)
    };
    
    return axiosInstance.patch<MenuItem>(
      API_ENDPOINTS.products.BY_ID(id), 
      updateData
    );
  },
  
  delete: (id: string) =>
    axiosInstance.delete(API_ENDPOINTS.products.BY_ID(id))
};