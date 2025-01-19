import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductDialog from '../../components/dashboard/ProductDialog';
import { MenuItem, MenuItemInput } from '@/types/menu';

const initialMenu: MenuItem[] = [
  {
    id: '1',
    name: 'Hamburguesa Clásica',
    price: 8.99,
    category: 'hamburguesas',
    description: 'Carne, lechuga, tomate, queso'
  },
  {
    id: '2',
    name: 'Hamburguesa Doble',
    price: 12.99,
    category: 'hamburguesas',
    description: 'Doble carne, doble queso, lechuga, tomate'
  },
  {
    id: '3',
    name: 'Hot Dog Clásico',
    price: 5.99,
    category: 'hotdogs',
    description: 'Salchicha, mostaza, ketchup'
  },
  {
    id: '4',
    name: 'Hot Dog con Queso',
    price: 7.99,
    category: 'hotdogs',
    description: 'Salchicha, queso, mostaza, ketchup'
  },
  {
    id: '5',
    name: 'Hamburguesa de Pollo',
    price: 9.99,
    category: 'hamburguesas',
    description: 'Pechuga de pollo, lechuga, tomate, queso'
  },
  {
    id: '6',
    name: 'Hot Dog con Tocino',
    price: 8.99,
    category: 'hotdogs',
    description: 'Salchicha, tocino, queso, mostaza, ketchup'
    
  }
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<'todos' | 'hamburguesas' | 'hotdogs'>('todos');
  const [menu, setMenu] = React.useState<MenuItem[]>(initialMenu);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [editingProduct, setEditingProduct] = React.useState<MenuItem | undefined>();

  const filteredMenu = menu.filter(item => 
    selectedCategory === 'todos' ? true : item.category === selectedCategory
  );

  const handleSaveProduct = (data: MenuItemInput) => {
    if (editingProduct) {
      // Actualizar producto existente
      setMenu(menu.map(item => 
        item.id === editingProduct.id ? { ...data, id: editingProduct.id } : item
      ));
    } else {
      // Agregar nuevo producto
      setMenu([...menu, { ...data, id: Date.now().toString() }]);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      setMenu(menu.filter(item => item.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Menú</h1>
          <p className="text-gray-600">Gestiona tus productos</p>
        </div>
        <Button 
          className="bg-gradient-to-r from-vento-primary to-vento-secondary text-white"
          onClick={() => {
            setEditingProduct(undefined);
            setDialogOpen(true);
          }}
        >
          <Plus className="h-5 w-5 mr-2" />
          Agregar Producto
        </Button>
      </div>

      {/* Categorías */}
      <div className="flex gap-2">
        {['todos', 'hamburguesas', 'hotdogs'].map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category as any)}
            className={cn(
              selectedCategory === category && "bg-gradient-to-r from-vento-primary to-vento-secondary text-white"
            )}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenu.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{item.name}</span>
                <span className="text-vento-primary font-bold">
                  ${item.price.toFixed(2)}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{item.description}</p>
              <div className="mt-2">
                <span className="inline-block px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                  {item.category}
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setEditingProduct(item);
                  setDialogOpen(true);
                }}
              >
                <Edit className="h-4 w-4 mr-2" />
                Editar
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-red-600 hover:bg-red-50"
                onClick={() => handleDelete(item.id)}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Eliminar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Dialog para crear/editar productos */}
      <ProductDialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setEditingProduct(undefined);
        }}
        initialData={editingProduct}
        onSave={handleSaveProduct}
      />
    </div>
  );
};

export default MenuPage;