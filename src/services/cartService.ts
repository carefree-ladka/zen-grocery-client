import { apiClient, type CartItem } from '../shared';

export class CartService {
  static async getCartItems(): Promise<CartItem[]> {
    try {
      const response = await apiClient.get<CartItem[]>('/api/cart');
      return response.data;
    } catch (error) {
      console.error('Error fetching cart items:', error);
      throw new Error('Failed to fetch cart items');
    }
  }

  static async addItemToCart(productId: string, quantity: number = 1): Promise<void> {
    try {
      await apiClient.post('/api/cart', { productId, quantity });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      throw new Error('Failed to add item to cart');
    }
  }

  static async removeItemFromCart(productId: string): Promise<void> {
    try {
      await apiClient.delete(`/api/cart/${productId}`);
    } catch (error) {
      console.error('Error removing item from cart:', error);
      throw new Error('Failed to remove item from cart');
    }
  }

  static async updateCartItemQuantity(productId: string, quantity: number): Promise<void> {
    try {
      await apiClient.put(`/api/cart/${productId}`, { quantity });
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
      throw new Error('Failed to update cart item quantity');
    }
  }
}
