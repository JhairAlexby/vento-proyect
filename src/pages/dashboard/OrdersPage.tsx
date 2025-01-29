import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import ProductCard from '@/components/orders/ProductCard';
import CartSheet from '@/components/orders/CartSheet';
import { Product, CartItem } from '@/types/orders';
import { productApi } from '@/services/api/productApi';
import { orderApi } from '@/services/api/orderApi';

const OrdersPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await productApi.getAll();
      setProducts(response.data.products);
    } catch (err) {
      setError('Error al cargar los productos');
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleConfirmOrder = async () => {
    if (cartItems.length === 0) return;

    try {
      setIsSubmitting(true);
      setError(null);

      const orderData = {
        items: cartItems.map(item => ({
          product: item.product,
          quantity: item.quantity,
          price: item.price
        }))
      };

      await orderApi.create(orderData);
      
      setCartItems([]);
      setCartOpen(false);
      
      alert('Pedido creado exitosamente');
      
    } catch (err) {
      setError('Error al crear el pedido');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vento-primary"></div>
      </div>
    );
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="space-y-6">
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

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-md p-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <CartSheet
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onConfirmOrder={handleConfirmOrder}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default OrdersPage;