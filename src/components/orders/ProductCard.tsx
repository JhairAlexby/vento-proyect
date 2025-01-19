import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import type { Product } from '../../components/orders/types/orders';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
    return (
        <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
                <div className="text-lg font-semibold">{product.name}</div>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <div className="mt-2 text-lg font-bold text-vento-primary">
                    ${product.price.toFixed(2)}
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:bg-vento-primary hover:text-white"
                    onClick={() => onAddToCart(product)}
                >
                    <Plus className="h-5 w-5 mr-2" />
                    Agregar
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;