import styled from '@emotion/styled';

export const PageHeader = styled.div`
  padding: 40px 24px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 48px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;
