import { useState } from 'react'
import { SidebarTrigger } from "@/components/ui/sidebar"
import { CartSection } from '@/components/addSale/CartSection'
import { ProductList } from '@/components/addSale/productList'


interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface CartItem {
  product: Product
  quantity: number
}

export const AddSale = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Hamburguesa Clásica",
      price: 8.99,
      image: "/hamburger.jpg"
    },
    {
      id: 2,
      name: "Hamburguesa con Queso",
      price: 9.99,
      image: "/cheeseburger.jpg"
    },
    {
      id: 3,
      name: "Hamburguesa Doble",
      price: 12.99,
      image: "/doubleburger.jpg"
    },
    {
      id: 4,
      name: "Hamburguesa Especial",
      price: 13.99,
      image: "/specialburger.jpg"
    },
    {
      id: 5,
      name: "Hot Dog Clásico",
      price: 6.99,
      image: "/hotdog.jpg"
    },
    {
      id: 6,
      name: "Hot Dog Especial",
      price: 8.99,
      image: "/specialhotdog.jpg"
    },
    {
      id: 7,
      name: "Hot Dog con Queso",
      price: 7.99,
      image: "/cheesehotdog.jpg"
    },
    {
      id: 8,
      name: "Papas Fritas",
      price: 4.99,
      image: "/fries.jpg"
    },
    {
      id: 9,
      name: "Papas con Queso",
      price: 5.99,
      image: "/cheesefries.jpg"
    },
    {
      id: 10,
      name: "Papas Cargadas",
      price: 7.99,
      image: "/loadedfries.jpg"
    },
  ]

  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.product.id === product.id)
      if (existingItem) {
        return currentCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...currentCart, { product, quantity: 1 }]
    })
  }

  const updateQuantity = (productId: number, delta: number) => {
    setCart(currentCart => {
      return currentCart.map(item => {
        if (item.product.id === productId) {
          const newQuantity = Math.max(0, item.quantity + delta)
          return { ...item, quantity: newQuantity }
        }
        return item
      }).filter(item => item.quantity > 0)
    })
  }

  return (
    <div className="p-6">
      <SidebarTrigger />
      <h1 className="text-2xl font-bold mb-6">Agregar Venta</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductList 
          products={products}
          onProductSelect={addToCart}
        />
        
        <CartSection 
          cart={cart}
          updateQuantity={updateQuantity}
        />
      </div>
    </div>
  )
}