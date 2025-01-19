import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import ProductCard from '@/components/orders/ProductCard';
import CartSheet from '@/components/orders/CartSheet';
import type { Product, CartItem, Order } from '../../types/orders';
const mockProducts: Product[] = [
  {
    _id: '1',
    name: 'Hamburguesa Clásica',
    description: 'Carne, lechuga, tomate, queso',
    price: 8.99
  },
  {
    _id: '2',
    name: 'Hamburguesa Doble',
    description: 'Doble carne, doble queso, lechuga, tomate',
    price: 12.99
  },
  {
    _id: '3',
    name: 'Hot Dog Clásico',
    description: 'Salchicha, mostaza, ketchup',
    price: 5.99
  }
];

const OrdersPage = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  React.useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product === product._id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.product === product._id
            ? { 
                ...item, 
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * item.price
              }
            : item
        );
      }

      return [...prevItems, {
        product: product._id,
        productName: product.name,
        description: product.description,
        quantity: 1,
        price: product.price,
        subtotal: product.price
      }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product === productId
          ? { ...item, quantity, subtotal: quantity * item.price }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product !== productId));
  };

  const handleConfirmOrder = () => {
    // Preparar orden según el modelo de la BD
    const order: Order = {
      user: 'current-user-id', // TODO: Obtener del contexto de autenticación
      order_date: new Date(),
      items: cartItems.map(({ product, quantity, price }) => ({
        product,
        quantity,
        price
      }))
    };

    // TODO: Enviar a la API
    console.log('Orden a enviar:', order);
    
    // Limpiar carrito
    setCartItems([]);
    setCartOpen(false);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Nuevo Pedido</h1>
          <p className="text-gray-600">Selecciona los productos para el pedido</p>
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Carrito ({totalItems})</span>
        </Button>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Carrito como Sheet */}
      <CartSheet
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onConfirmOrder={handleConfirmOrder}
      />
    </div>
  );
};

export default OrdersPage;