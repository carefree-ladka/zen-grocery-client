import { useEffect, useMemo } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useToast } from "../hooks";
import {
  type CartItemWithProduct,
  fetchCartItems,
  removeFromCart,
  useAppDispatch,
  useAppSelector,
  type WithNoChildren,
} from "../shared";
import Toast from "./Toast";

const Cart: WithNoChildren = () => {
  const { toast, showToast, hideToast } = useToast();
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.products);
  const { items: cartItems, error } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      showToast(error, "danger");
    }
  }, [error]);

  const cartItemsWithProducts = useMemo(() => {
    if (products.length === 0) return [];
    return cartItems
      .map((cartItem) => {
        const product = products.find((p) => p.id === cartItem.productId);
        return product ? { ...cartItem, product } : null;
      })
      .filter((item): item is CartItemWithProduct => item !== null);
  }, [products, cartItems]);

  const handleRemoveFromCart = async (productId: string) => {
    const result = await dispatch(removeFromCart(productId));
    if (removeFromCart.fulfilled.match(result)) {
      showToast("Item removed from cart!", "success");
    }
  };

  if (cartItemsWithProducts.length === 0) {
    return (
      <Container className="mt-4">
        <Alert variant="info" className="text-center">
          <h4>No items in your cart!</h4>
        </Alert>
        <Toast
          show={toast.show}
          message={toast.message}
          variant={toast.variant}
          onClose={hideToast}
        />
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Your Cart</h2>
      <Row>
        {cartItemsWithProducts.map((item) => (
          <Col key={item.productId} md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={item.product.imageUrl}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{item.product.name}</Card.Title>
                <Card.Text>
                  <strong>₹{item.product.price}</strong>
                  <br />
                  <small className="text-muted">{item.product.category}</small>
                  <br />
                  <small>Quantity: {item.quantity}</small>
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromCart(item.productId)}
                >
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Toast
        show={toast.show}
        message={toast.message}
        variant={toast.variant}
        onClose={hideToast}
      />
    </Container>
  );
};

export default Cart;
