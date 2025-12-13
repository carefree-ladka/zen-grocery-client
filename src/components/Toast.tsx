import { Toast as BootstrapToast, ToastContainer } from "react-bootstrap";

interface ToastProps {
  show: boolean;
  message: string;
  variant: "success" | "danger" | "warning";
  onClose: () => void;
}

const Toast = ({ show, message, variant, onClose }: ToastProps) => {
  return (
    <ToastContainer
      position="top-end"
      className="p-3"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 1060,
      }}
    >
      <BootstrapToast
        show={show}
        onClose={onClose}
        delay={3000}
        autohide
        bg={variant}
      >
        <BootstrapToast.Body className="text-white">
          {message}
        </BootstrapToast.Body>
      </BootstrapToast>
    </ToastContainer>
  );
};

export default Toast;
