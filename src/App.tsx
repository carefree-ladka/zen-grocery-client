import React from 'react';
import { Provider } from 'react-redux';
import { store } from './shared/store/store';
import { useAppSelector } from './shared/store/hooks';
import { Header, Home, Cart, ErrorBoundary } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContent: React.FC = () => {
  const currentView = useAppSelector((state) => state.ui.currentView);

  return (
    <>
      <Header />
      {currentView === 'home' ? <Home /> : <Cart />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;