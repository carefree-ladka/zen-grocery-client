# Zen Grocery - Online Shopping SPA

A modern, responsive Single Page Application for online shopping built with React, TypeScript, and Redux Toolkit.

Microservice for this app : https://github.com/carefree-ladka/zen-grocery-api/tree/main

## 🚀 Features

- **Modern Tech Stack**: React 18+ with TypeScript, Redux Toolkit, Axios
- **Responsive Design**: Bootstrap & React-Bootstrap components
- **State Management**: Redux Toolkit with typed hooks
- **Category Filtering**: Women, Men, Kids categories
- **Cart Management**: Add/remove items with 10-item limit
- **Real-time Notifications**: Toast messages for user feedback
- **Lazy Loading**: Optimized image loading for better performance
- **Error Handling**: Comprehensive error boundaries and API error handling

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios with interceptors
- **UI Framework**: React-Bootstrap
- **Styling**: Custom CSS with CSS variables
- **Build Tool**: Vite with HMR

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd zen-grocery

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Home.tsx        # Product listing
│   ├── Cart.tsx        # Shopping cart
│   ├── Toast.tsx       # Notifications
│   └── Loading.tsx     # Loading spinner
├── hooks/              # Custom React hooks
├── services/           # API service classes
├── shared/
│   ├── store/         # Redux store & slices
│   ├── types/         # TypeScript interfaces
│   ├── constants/     # App constants
│   └── utils/         # Utility functions
└── App.tsx            # Main application
```

## 🔧 Configuration

### Backend Integration
The app expects backend services running on:
- **API Gateway**: `http://localhost:5000`
- **Product Service**: `http://localhost:5001`
- **Cart Service**: `http://localhost:5002`

### Proxy Setup
Vite proxy configuration routes `/api/*` requests to the backend gateway.

## 📱 Components

### Core Components
- **Header**: Navigation with active state management
- **Home**: Product grid with category filtering and cart actions
- **Cart**: Shopping cart with item management
- **Toast**: Bootstrap notifications for user feedback

### Custom Hooks
- **useToast**: Toast notification management
- **useProducts**: Product operations with Redux
- **useCart**: Cart operations with Redux

## 🎨 Styling

- CSS variables for consistent theming
- Responsive design with Bootstrap grid
- Smooth transitions and hover effects
- Lazy loading for images to prevent flickering

## 🔄 State Management

Redux Toolkit slices:
- **Product Slice**: Products, categories, loading states
- **Cart Slice**: Cart items, async operations, limits
- **UI Slice**: View management (Home/Cart)

## 🚦 API Endpoints

- `GET /api/products` - Fetch all products
- `GET /api/cart` - Fetch cart items  
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart/:id` - Remove item from cart

## 🧪 Development

```bash
# Start development server
npm run dev

# Type checking
npm run build

# Linting
npm run lint
```

## 📋 Features Implemented

✅ SPA with conditional rendering (no React Router)  
✅ TypeScript interfaces for type safety  
✅ Redux Toolkit state management  
✅ Axios HTTP client with error handling  
✅ Category-based product filtering  
✅ Cart limit enforcement (10 items)  
✅ Toast notifications for all actions  
✅ Responsive Bootstrap UI  
✅ Loading states and error boundaries  
✅ Lazy loading for performance optimization  

## 🔮 Future Enhancements

- User authentication
- Product search functionality
- Wishlist feature
- Order history
- Payment integration
- PWA capabilities

## 📄 License

MIT License
