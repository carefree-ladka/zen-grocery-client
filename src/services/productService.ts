import { apiClient, type Product } from '../shared';
export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    try {
      const response = await apiClient.get<Product[]>('/api/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to fetch products');
    }
  }

  static async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const response = await apiClient.get<Product[]>('/api/products', {
        params: { category }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw new Error('Failed to fetch products by category');
    }
  }
}
