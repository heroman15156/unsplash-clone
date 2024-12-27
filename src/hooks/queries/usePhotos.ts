import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { queryKeys } from '../../constants/queryKeys.ts';
import { getPhotos } from '../../services/unsplash.ts';

export const usePhotos = () => {
  return useSuspenseInfiniteQuery({
    queryKey: queryKeys.images.list,
    queryFn: async ({ pageParam = 1 }) => {
      return await getPhotos({ page: pageParam });
    },
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => {
      return allPages.length + 1;
    },
  });
};
