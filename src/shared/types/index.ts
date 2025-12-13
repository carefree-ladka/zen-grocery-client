export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartItemWithProduct extends CartItem {
  product: Product;
}

export type Category = 'All' | 'women' | 'men' | 'kids';

export type View = 'home' | 'cart';

export * from './react';