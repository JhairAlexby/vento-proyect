export const API_ENDPOINTS = {
    auth: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout',
    },
    products: {
      BASE: '/products',
      BY_ID: (id: string) => `/products/${id}`,
    },
    orders: {
      BASE: '/orders',
      BY_ID: (id: string) => `/orders/${id}`,
    },
    sales: {
      BASE: '/sales',
      BY_DATE: (date: string) => `/sales/date/${date}`,
    },
  };
  
  export default API_ENDPOINTS;