import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";
import ProductDialog from '@/components/dashboard/ProductDialog';
import { MenuItem, MenuItemInput } from '@/types/menu';
import { productApi } from '@/services/api/productApi';

const MenuPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [menu, setMenu] = React.useState<MenuItem[]>([]);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [editingProduct, setEditingProduct] = React.useState<MenuItem | undefined>();
  const [isSaving, setIsSaving] = React.useState(false);

  React.useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await productApi.getAll();
      setMenu(response.data.products);
    } catch (err) {
      setError('Error al cargar los productos');
      console.error('Error loading products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveProduct = async (data: MenuItemInput) => {
    try {
      setIsSaving(true);
      setError(null);
  
      if (editingProduct) {
        await productApi.update(editingProduct._id, data);
      } else {
        await productApi.create({
          name: data.name.trim(),
          description: data.description.trim(),
          price: Number(data.price)
        });
      }
  
      await loadProducts(); 
      setDialogOpen(false);
      setEditingProduct(undefined);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 
        (editingProduct 
          ? 'Error al actualizar el producto' 
          : 'Error al crear el producto');
      setError(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        setIsLoading(true);
        await productApi.delete(id);
        await loadProducts();
      } catch (err) {
        setError('Error al eliminar el producto');
        console.error('Error deleting product:', err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleEdit = (product: MenuItem) => {
    setEditingProduct(product);
    setDialogOpen(true);
  };

  if (isLoading && menu.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vento-primary"></div>
      </div>
    );
  }

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

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-md p-4 flex justify-between items-center">
          <span>{error}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setError(null)}
          >
            Cerrar
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((item) => (
          <Card key={item._id} className="hover:shadow-lg transition-shadow">
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
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleEdit(item)}
              >
                <Edit className="h-4 w-4 mr-2" />
                Editar
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-red-600 hover:bg-red-50"
                onClick={() => handleDelete(item._id)}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Eliminar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <ProductDialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setEditingProduct(undefined);
        }}
        initialData={editingProduct}
        onSave={handleSaveProduct}
        isLoading={isSaving}
      />
    </div>
  );
};

export default MenuPage;