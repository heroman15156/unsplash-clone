import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.size.header.height};
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const LogoText = styled.span`
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.3px;
`;

export const UnsplashLogo = styled.svg`
  flex-shrink: 0;
  fill: currentColor;
`;

export const Bookmark = styled.a`
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.colors.gray[500]};
  transition: color 0.1s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
