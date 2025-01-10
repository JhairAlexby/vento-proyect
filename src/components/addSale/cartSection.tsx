import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Minus, Trash2 } from "lucide-react"

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

interface CartSectionProps {
  cart: CartItem[]
  updateQuantity: (productId: number, delta: number) => void
}

export const CartSection = ({ cart, updateQuantity }: CartSectionProps) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.product.price * item.quantity)
    }, 0)
  }

  return (
    <section className="h-full max-h-[calc(100vh-8rem)] sticky top-6">
      <Card className="h-full flex flex-col">
        <CardHeader className="flex-none">
          <CardTitle>Carrito de Venta</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 overflow-hidden">
          {cart.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No hay productos en el carrito
            </p>
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto min-h-0">
                <div className="space-y-4 pr-2">
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
              </div>

              <div className="mt-4 pt-4 border-t space-y-4">
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
  )
}