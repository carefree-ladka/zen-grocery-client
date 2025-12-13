export { store } from './store';
export type { RootState, AppDispatch } from './store';
export { useAppDispatch, useAppSelector } from './hooks';
export { fetchProducts, setCategory } from './productSlice';
export { addToCart, removeFromCart, fetchCartItems } from './cartSlice';
export { setView } from './uiSlice';