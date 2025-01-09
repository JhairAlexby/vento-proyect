import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ProductGrid } from "@/components/menu/ProductGrid"


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
      <h1 className="text-2xl font-bold mb-4">Menú</h1>
      
      <ProductGrid 
        products={products}
        onEdit={handleEditProduct}
      />

      <div className="mt-6">
        <Button onClick={handleAddProduct}>
          <Plus className="h-4 w-4 mr-2" />
          Agregar Producto
        </Button>
      </div>
    </div>
  )
}