import { Button, Card } from "react-bootstrap";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  isInCart: boolean;
  onAddToCart: (productId: string) => void;
}

const ProductCard = ({ product, isInCart, onAddToCart }: ProductCardProps) => {
  return (
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
          variant={isInCart ? "success" : "primary"}
          onClick={() => onAddToCart(product.id)}
          disabled={isInCart}
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
