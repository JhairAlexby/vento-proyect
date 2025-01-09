import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Minus, Trash2 } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

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
  // Sample products - in a real app, this would come from an API or database
  const products: Product[] = [
    {
      id: 1,
      name: "Hamburguesa Clásica",
      price: 8.99,
      image: "/hamburger.jpg"
    },
    {
      id: 2,
      name: "Pizza Margherita",
      price: 12.99,
      image: "/pizza.jpg"
    },
    // Add more products as needed
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

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.product.price * item.quantity)
    }, 0)
  }

  return (
    <div className="p-6">
      <SidebarTrigger />
      <h1 className="text-2xl font-bold mb-6">Agregar Venta</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Products List */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Productos Disponibles</h2>
          <div className="grid grid-cols-2 gap-4">
            {products.map(product => (
              <Card 
                key={product.id} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => addToCart(product)}
              >
                <CardHeader className="p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <CardTitle className="text-sm">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="font-bold">${product.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cart */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Carrito de Venta</CardTitle>
            </CardHeader>
            <CardContent>
              {cart.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No hay productos en el carrito
                </p>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div 
                        key={item.product.id} 
                        className="flex items-center justify-between gap-4 p-2 border rounded-md"
                      >
                        <div className="flex-1">
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            ${item.product.price.toFixed(2)} c/u
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            className="w-16 text-center"
                            value={item.quantity}
                            readOnly
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, -item.quantity)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                    <Button className="w-full" size="lg">
                      Completar Venta
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}