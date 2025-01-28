export interface MenuItem {
  _id: string;
  name: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface MenuItemInput {
  name: string;
  price: number;
  description: string;
}

export interface ProductResponse {
  total: number;
  products: MenuItem[];
  offset: number | null;
  limit: number | null;
}