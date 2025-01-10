import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductListProps {
  products: Product[]
  onProductSelect: (product: Product) => void
}

export const ProductList = ({ products, onProductSelect }: ProductListProps) => {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Productos Disponibles</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <Card 
            key={product.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onProductSelect(product)}
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
  )
}