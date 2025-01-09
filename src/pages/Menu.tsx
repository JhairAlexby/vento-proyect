import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Plus, Edit } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

export const Menu = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Hamburguesa Clásica",
      price: 8.99,
      description: "Carne de res, lechuga, tomate, queso y salsa especial",
      image: "/hamburger.jpg"
    },
    {
      id: 2,
      name: "Pizza Margherita",
      price: 12.99,
      description: "Salsa de tomate, mozzarella y albahaca fresca",
      image: "/pizza.jpg"
    }
  ])

  const handleEditProduct = (id: number) => {
    console.log("Editando producto:", id)
  }

  const handleAddProduct = () => {
    console.log("Agregando nuevo producto")
  }

  return (
    <div className="p-6">
      <SidebarTrigger />

      <h1 className="text-2xl font-bold mb-4">Menú</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {product.name}
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleEditProduct(product.id)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-muted-foreground text-sm mb-2">
                {product.description}
              </p>
              <p className="font-bold text-lg">
                ${product.price.toFixed(2)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <Button onClick={handleAddProduct}>
          <Plus className="h-4 w-4 mr-2" />
          Agregar Producto
        </Button>
      </div>
    </div>
  )
}