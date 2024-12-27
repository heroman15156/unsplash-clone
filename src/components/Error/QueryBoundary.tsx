import { ErrorBoundary } from 'react-error-boundary';

import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { ErrorFallbackProps, QueryBoundaryProps } from '../../types/error.ts';
import { DefaultErrorFallback } from './Fallbacks';

export const QueryBoundary = ({
  children,
  Fallback = DefaultErrorFallback,
  message,
}: QueryBoundaryProps) => {
  const FallbackComponent = (props: ErrorFallbackProps) => {
    return <Fallback {...props} message={message} />;
  };

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={FallbackComponent}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
