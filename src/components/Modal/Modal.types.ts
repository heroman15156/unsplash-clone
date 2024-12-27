import React from 'react';

export type ModalSize = 'small' | 'medium' | 'large';

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
}

export interface ModalHeaderProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export interface ModalBodyProps {
  children: React.ReactNode;
}
