import { useAppSelector, useAppDispatch } from '../shared/store/hooks';
import { fetchProducts as fetchProductsAction, setCategory as setCategoryAction } from '../shared/store/productSlice';
import type { Category } from '../shared/types';

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const { products, selectedCategory, loading, error } = useAppSelector((state) => state.products);

  const fetchProducts = () => {
    dispatch(fetchProductsAction());
  };

  const setCategory = (category: Category) => {
    dispatch(setCategoryAction(category));
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return {
    products,
    filteredProducts,
    selectedCategory,
    loading,
    error,
    fetchProducts,
    setCategory,
  };
};