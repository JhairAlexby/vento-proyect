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
        {/* Lista de Productos */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Productos Disponibles</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    className="w-full h-32 sm:h-24 object-cover rounded-md mb-2"
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

                {/* Carrito */}
                <section className="h-[calc(100vh-8rem)]">
                  <Card className="h-full flex flex-col">
                    <CardHeader className="flex-none">
                      <CardTitle>Carrito de Venta</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      {cart.length === 0 ? (
                        <p className="text-muted-foreground text-center py-8">
                          No hay productos en el carrito
                        </p>
                      ) : (
                        <div className="flex flex-col h-full">
                          <div className="flex-1 overflow-y-auto space-y-4">
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
                                    className="p-2"
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
                                    className="p-2"
                                    onClick={() => updateQuantity(item.product.id, 1)}
                                  >
                                    <Plus className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="destructive"
                                    size="icon"
                                    className="p-2"
                                    onClick={() => updateQuantity(item.product.id, -item.quantity)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
        
                          <div className="mt-4 pt-4 border-t space-y-4 flex-none">
                            <div className="flex justify-between text-lg font-bold">
                              <span>Total:</span>
                              <span>${calculateTotal().toFixed(2)}</span>
                            </div>
                            <Button className="w-full" size="lg">
                              Completar Venta
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </section>
      </div>
    </div>
  )
}
