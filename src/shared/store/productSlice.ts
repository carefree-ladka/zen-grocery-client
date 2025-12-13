import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { type Product, type Category } from '../types';
import { ProductService } from '../../services';

interface ProductState {
  products: Product[];
  selectedCategory: Category;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  selectedCategory: 'All',
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      return await ProductService.getAllProducts();
    } catch (error) {
      return rejectWithValue('Failed to fetch products');
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category>) => {
      state.selectedCategory = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setCategory, clearError } = productSlice.actions;
export default productSlice.reducer;
