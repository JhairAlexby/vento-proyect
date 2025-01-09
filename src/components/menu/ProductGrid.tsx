import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

interface ProductGridProps {
  products: Product[]
  onEdit: (id: number) => void
}

export function ProductGrid({ products, onEdit }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              {product.name}
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => onEdit(product.id)}
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
  )
}