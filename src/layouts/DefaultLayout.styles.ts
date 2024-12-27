import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const MainContent = styled.div`
  flex: 1;
  width: 100%;
  // min-height: calc(100vh - ${({ theme }) => theme.size.header.height});
  margin: 0 auto;
`;
