import styled from '@emotion/styled';

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 550px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const BackgroundWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjAlRUIlQjAlQjAlRUElQjIlQkR8ZW58MHx8MHx8fDA%3D');
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 46px;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 54px;
  border-radius: 4px;
  border: none;
  font-size: ${({ theme }) => theme.typography.size.md};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.gray[500]};
  display: flex;
  align-items: center;
`;
