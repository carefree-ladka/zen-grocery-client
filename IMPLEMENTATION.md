# Zen Grocery - Implementation Guide

## Frontend Architecture

### Technology Stack
- **React 18+** with TypeScript for type safety
- **Redux Toolkit** for state management with strict typing
- **Axios** for HTTP client with interceptors
- **React-Bootstrap** for responsive UI components
- **Vite** for fast development and building

### Project Structure
```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation with Redux
│   ├── Home.tsx         # Product listing with filters
│   ├── Cart.tsx         # Cart management
│   ├── Toast.tsx        # Notifications
│   ├── Loading.tsx      # Loading states
│   └── ErrorBoundary.tsx # Error handling
├── hooks/               # Custom hooks
│   ├── useToast.ts      # Toast notifications
│   ├── useCart.ts       # Cart operations (Redux)
│   └── useProducts.ts   # Product operations (Redux)
├── services/            # API services
│   ├── productService.ts # Product API calls
│   └── cartService.ts   # Cart API calls
├── shared/
│   ├── store/           # Redux store
│   │   ├── store.ts     # Store configuration
│   │   ├── hooks.ts     # Typed Redux hooks
│   │   ├── productSlice.ts # Product state
│   │   ├── cartSlice.ts # Cart state
│   │   └── uiSlice.ts   # UI state
│   ├── types/           # TypeScript interfaces
│   ├── constants/       # App constants
│   └── utils/           # Utilities
└── App.tsx              # Main app component
```

### Key Features Implemented

#### State Management (Redux Toolkit)
- **Product Slice**: Manages products, categories, loading states
- **Cart Slice**: Handles cart items, async operations, cart limits
- **UI Slice**: Controls current view (Home/Cart)
- **Typed Hooks**: useAppDispatch, useAppSelector for type safety

#### API Integration (Axios)
- Centralized Axios configuration with interceptors
- Error handling and request/response logging
- Timeout configuration (10 seconds)
- RESTful API calls to backend microservices

#### Components
- **Header**: Navigation with active state management
- **Home**: Product grid with category filtering, add to cart
- **Cart**: Cart items display with remove functionality
- **Toast**: Bootstrap toast notifications for user feedback
- **Loading**: Spinner component for async operations
- **ErrorBoundary**: React error boundary for graceful error handling

#### TypeScript Interfaces
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

interface CartItem {
  productId: string;
  quantity: number;
}
```

#### Business Logic
- **Cart Limit**: Maximum 10 items with toast notification
- **Category Filtering**: All, Fruits, Vegetables, Dairy, Snacks
- **Button States**: "Add to Cart" → "Added to Cart" with disabled state
- **Error Handling**: Toast notifications for API failures
- **Loading States**: Spinners during API calls

### API Endpoints Expected
- `GET /api/products` - Fetch all products
- `GET /api/cart` - Fetch cart items
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart/:id` - Remove item from cart

### Running the Application
```bash
npm install
npm run dev
```

### Backend Integration
The frontend expects a backend running on `http://localhost:5000` with:
- **API Gateway** (Port 5000) - Single entry point
- **Product Service** (Port 5001) - Product management
- **Cart Service** (Port 5002) - Cart operations
- **MongoDB** - Data persistence

### Key Redux Toolkit Features Used
- `createSlice` for reducer logic
- `createAsyncThunk` for async operations
- `configureStore` with middleware
- Typed hooks for TypeScript integration
- Serializable state management

### Responsive Design
- Bootstrap grid system for responsive layout
- Mobile-friendly navigation
- Responsive product cards
- Toast notifications positioned for mobile

This implementation provides a scalable, maintainable, and type-safe React application with modern state management and API integration patterns.