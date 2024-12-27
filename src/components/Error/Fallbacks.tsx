import { ErrorFallbackProps } from '../../types/error.ts';
import { Container, Message, RetryButton } from './styles';

export const DefaultErrorFallback = ({
  message = '오류가 발생했습니다',
  resetErrorBoundary,
}: ErrorFallbackProps) => (
  <Container>
    <Message>{message}</Message>
    <RetryButton onClick={resetErrorBoundary}>다시 시도</RetryButton>
  </Container>
);

export const ImageErrorFallback = (props: ErrorFallbackProps) => (
  <DefaultErrorFallback {...props} message="이미지를 불러오는데 실패했습니다" />
);

export const SearchErrorFallback = (props: ErrorFallbackProps) => (
  <DefaultErrorFallback {...props} message="검색 결과를 불러오는데 실패했습니다" />
);
