import { motion } from 'framer-motion';

import styled from '@emotion/styled';

import { ModalSize } from './Modal.types.ts';

const modalSizes = {
  small: {
    width: '400px',
    height: '500px',
  },
  medium: {
    width: '600px',
    height: '700px',
  },
  large: {
    width: '800px',
    height: '800px',
  },
};
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const Container = styled(motion.div)<{ size: ModalSize }>`
  background: white;
  border-radius: 8px;
  max-width: 90vw;
  max-height: 90vh;
  width: ${({ size }) => modalSizes[size].width};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray[500]};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const Body = styled.div`
  padding: 24px;
  overflow-y: auto;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;
