import { Container, Nav, Navbar } from "react-bootstrap";
import {
  type View,
  type WithNoProps,
  setView,
  useAppDispatch,
  useAppSelector,
} from "../shared";

const Header: WithNoProps = () => {
  const currentView = useAppSelector((state) => state.ui.currentView);
  const { items: cartItems } = useAppSelector((state) => state.cart);
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
            active={currentView === "home"}
            onClick={() => handleNavClick("home")}
            style={{ cursor: "pointer" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            active={currentView === "cart"}
            onClick={() => handleNavClick("cart")}
            style={{ cursor: "pointer" }}
          >
            Cart
            {/* {cartItems.length > 0 && ( */}
              <sup style={{ fontSize: "0.7em", marginLeft: "2px" }}>
                {cartItems.length}
              </sup>
            {/* // )} */}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
