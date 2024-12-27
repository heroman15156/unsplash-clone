import styled from '@emotion/styled';

export const ImageContainer = styled.div<{ aspectRatio: number }>`
  position: relative;
  margin-bottom: 24px;
  width: 100%;
  max-height: 70vh;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
`;

export const MetaInfo = styled.div`
  display: grid;
  gap: 16px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const Tag = styled.span`
  padding: 4px 12px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;
