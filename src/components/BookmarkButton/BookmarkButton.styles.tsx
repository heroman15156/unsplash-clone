import styled from '@emotion/styled';

export const Button = styled.button<{ isBookmarked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  color: ${({ isBookmarked, theme }) => (isBookmarked ? 'red' : theme.colors.gray[600])};

  &:hover {
    background: white;
    transform: scale(1.05);
  }

  transition: all 0.2s ease;
`;
