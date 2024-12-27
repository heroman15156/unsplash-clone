import { motion } from 'framer-motion';

import styled from '@emotion/styled';

export const Card = styled(motion.div)`
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;

  transition: opacity 0.2s ease;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  display: flex;
  justify-content: flex-end;
`;
