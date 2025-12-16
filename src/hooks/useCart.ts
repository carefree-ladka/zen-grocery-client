import {
  addToCart as addToCartAction,
  fetchCartItems,
  removeFromCart as removeFromCartAction,
  useAppDispatch,
  useAppSelector,
} from "../shared";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const {
    items: cartItems,
    loading,
    error,
  } = useAppSelector((state) => state.cart);

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
    loading,
    error,
    addToCart,
    removeFromCart,
    refreshCart,
  };
};
