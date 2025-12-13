import React from "react";
import { Container, Spinner } from "react-bootstrap";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "200px" }}
    >
      <div className="text-center">
        <Spinner animation="border" role="status" className="mb-3">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <div>{message}</div>
      </div>
    </Container>
  );
};

export default Loading;
