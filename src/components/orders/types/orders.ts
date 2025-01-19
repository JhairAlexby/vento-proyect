// src/types/orders.ts
export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
}

export interface OrderItem {
    product: string; // ObjectId del producto
    quantity: number;
    price: number;
}

export interface Order {
    _id?: string;
    user: string; // ObjectId del usuario
    order_date: Date;
    items: OrderItem[];
}

// Para el carrito, necesitamos información adicional temporal
export interface CartItem extends OrderItem {
    productName: string; // Para mostrar en el UI
    description: string; // Para mostrar en el UI
    subtotal: number; // Campo calculado
}