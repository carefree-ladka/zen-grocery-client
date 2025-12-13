import { useState } from 'react';

interface ToastState {
  show: boolean;
  message: string;
  variant: 'success' | 'danger' | 'warning';
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    variant: 'success',
  });

  const showToast = (message: string, variant: 'success' | 'danger' | 'warning' = 'success') => {
    setToast({ show: true, message, variant });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  return { toast, showToast, hideToast };
};