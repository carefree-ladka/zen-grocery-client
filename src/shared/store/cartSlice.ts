import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CartService } from '../../services';
import type { CartItem } from '../types';

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

/* -------------------- Thunks -------------------- */

export const fetchCartItems = createAsyncThunk<
  CartItem[],
  void,
  { rejectValue: string }
>('cart/fetchCartItems', async (_, { rejectWithValue }) => {
  try {
    return await CartService.getCartItems();
  } catch {
    return rejectWithValue('Failed to fetch cart items');
  }
});

export const addToCart = createAsyncThunk<
  string,
  string,
  { state: { cart: CartState }; rejectValue: string }
>('cart/addToCart', async (productId, { getState, rejectWithValue }) => {
  try {
    const { items } = getState().cart;

    if (items.length >= 10) {
      return rejectWithValue('Cart limit of 10 items exceeded!');
    }

    await CartService.addItemToCart(productId);
    return productId;
  } catch {
    return rejectWithValue('Failed to add item to cart');
  }
});

export const removeFromCart = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('cart/removeFromCart', async (productId, { rejectWithValue }) => {
  try {
    await CartService.removeItemFromCart(productId);
    return productId;
  } catch {
    return rejectWithValue('Failed to remove item from cart');
  }
});

/* -------------------- Slice -------------------- */

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      /* ---------- Fetch ---------- */
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Something went wrong';
      })

      /* ---------- Add (Optimistic) ---------- */
      .addCase(addToCart.pending, (state, action) => {
        state.loading = true;
        state.error = null;

        const exists = state.items.some(
          (item) => item.productId === action.meta.arg
        );

        if (!exists) {
          state.items.push({
            productId: action.meta.arg,
            quantity: 1,
          });
        }
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to add item';

        // rollback optimistic update
        state.items.pop();
      })

      /* ---------- Remove ---------- */
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.productId !== action.payload
        );
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to remove item';
      });
  },
});

export const { clearError } = cartSlice.actions;
export default cartSlice.reducer;
