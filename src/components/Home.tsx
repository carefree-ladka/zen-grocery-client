import React, { useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useToast } from "../hooks";
import {
  CATEGORIES,
  addToCart,
  fetchCartItems,
  fetchProducts,
  setCategory,
  useAppDispatch,
  useAppSelector,
  type Category,
} from "../shared";
import Loading from "./Loading";
import Toast from "./Toast";

const Home: React.FC = () => {
  const { toast, showToast, hideToast } = useToast();
  const dispatch = useAppDispatch();

  const { products, selectedCategory, loading, error } = useAppSelector(
    (state) => state.products
  );
  const { items: cartItems, error: cartError } = useAppSelector(
    (state) => state.cart
  );

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCartItems());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      showToast(error, "danger");
    }
  }, [error]);

  useEffect(() => {
    if (cartError) {
      showToast(cartError, cartError.includes("limit") ? "warning" : "danger");
    }
  }, [cartError]);

  const handleAddToCart = async (productId: string) => {
    const result = await dispatch(addToCart(productId));
    if (addToCart.fulfilled.match(result)) {
      showToast("Item added to cart!", "success");
    }
  };

  const handleCategoryChange = (category: Category) => {
    dispatch(setCategory(category));
  };

  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col md={6}>
          <Form.Select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value as Category)}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {loading ? (
        <Loading message="Loading products..." />
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <strong>₹{product.price}</strong>
                    <br />
                    <small className="text-muted">{product.category}</small>
                  </Card.Text>
                  <Button
                    variant={
                      cartItems.some((item) => item.productId === product.id)
                        ? "success"
                        : "primary"
                    }
                    onClick={() => handleAddToCart(product.id)}
                    disabled={cartItems.some(
                      (item) => item.productId === product.id
                    )}
                  >
                    {cartItems.some((item) => item.productId === product.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Toast
        show={toast.show}
        message={toast.message}
        variant={toast.variant}
        onClose={hideToast}
      />
    </Container>
  );
};

export default Home;
