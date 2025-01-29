import { axiosInstance } from '../config/axios';
import API_ENDPOINTS from '../constants/endpoints';
import { Order, OrderInput } from '@/types/orders';

export const orderApi = {
  create: (orderData: OrderInput) => 
    axiosInstance.post<Order>(API_ENDPOINTS.orders.BASE, orderData)
};