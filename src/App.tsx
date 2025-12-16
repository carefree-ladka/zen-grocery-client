import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import { Cart, ErrorBoundary, Header, Home } from "./components";
import { UI_CURRENT_VIEW, useAppSelector } from "./shared";
import { store } from "./shared/store/store";

const AppContent: React.FC = () => {
  const currentView = useAppSelector((state) => state.ui.currentView);

  return (
    <>
      <Header />
      {currentView === UI_CURRENT_VIEW.home ? <Home /> : <Cart />}
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
