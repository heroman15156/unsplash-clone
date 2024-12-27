import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';

import queryClient from '../config/queryClient.ts';

type Props = {
  children: ReactNode;
};
export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children} </BrowserRouter>
    </QueryClientProvider>
  );
}
