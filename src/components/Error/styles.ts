import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  padding: 32px;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  margin-bottom: 24px;
  text-align: center;
`;

export const RetryButton = styled.button`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: none;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[700]};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
