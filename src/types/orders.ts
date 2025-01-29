export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
  }
  
  export interface OrderItem {
    product: string;
    quantity: number;
    price: number;
  }
  
  export interface OrderInput {
    items: OrderItem[];
  }
  
  export interface Order extends OrderInput {
    _id: string;
    user: string;
    order_date: string;
  }
  
  // Para el manejo del carrito en el UI
  export interface CartItem extends OrderItem {
    productName: string;
    description: string;
    subtotal: number;
  }