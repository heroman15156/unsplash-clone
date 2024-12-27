import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Body, CloseButton, Container, Header, Overlay } from './Modal.styles';
import { ModalBodyProps, ModalHeaderProps, ModalProps } from './Modal.types';
import { ModalContext, useModalContext } from './ModalContext.ts';

const ModalHeader = ({ children, onClose }: ModalHeaderProps) => {
  const { onClose: contextOnClose } = useModalContext();
  const handleClose = onClose || contextOnClose;

  return (
    <Header>
      {children}
      {handleClose && (
        <CloseButton onClick={handleClose} aria-label="닫기">
          X
        </CloseButton>
      )}
    </Header>
  );
};

const ModalBody = ({ children }: ModalBodyProps) => {
  return <Body>{children}</Body>;
};

const Modal = ({ children, isOpen, onClose, size = 'medium' }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <Container
          size={size}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          {children}
        </Container>
      </Overlay>
    </ModalContext.Provider>
  );

  return createPortal(modalContent, document.body);
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
