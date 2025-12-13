import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../shared/store/hooks';
import { setView } from '../shared/store/uiSlice';
import type { View, WithNoProps } from '../shared/types';

const Header: WithNoProps = () => {
  const currentView = useAppSelector((state) => state.ui.currentView);
  const dispatch = useAppDispatch();

  const handleNavClick = (view: View) => {
    dispatch(setView(view));
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <span>Zen Grocery</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link 
            active={currentView === 'home'}
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer' }}
          >
            Home
          </Nav.Link>
          <Nav.Link 
            active={currentView === 'cart'}
            onClick={() => handleNavClick('cart')}
            style={{ cursor: 'pointer' }}
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;