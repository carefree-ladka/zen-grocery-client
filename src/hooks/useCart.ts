import { addToCart as addToCartAction, fetchCartItems, removeFromCart as removeFromCartAction } from '../shared/store/cartSlice';
import { useAppDispatch, useAppSelector } from '../shared/store/hooks';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const { items: cartItems, addedToCartIds, loading, error } = useAppSelector((state) => state.cart);

  const addToCart = (productId: string) => {
    return dispatch(addToCartAction(productId));
  };

  const removeFromCart = (productId: string) => {
    return dispatch(removeFromCartAction(productId));
  };

  const refreshCart = () => {
    dispatch(fetchCartItems());
  };

  return {
    cartItems,
    addedToCartIds,
    loading,
    error,
    addToCart,
    removeFromCart,
    refreshCart,
  };
};
