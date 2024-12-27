import { ComponentType, ReactNode } from 'react';
import { FallbackProps } from 'react-error-boundary';

export interface ErrorFallbackProps extends FallbackProps {
  message?: string;
}

export interface QueryBoundaryProps {
  children: ReactNode;
  Fallback?: ComponentType<ErrorFallbackProps>;
  message?: string;
}
