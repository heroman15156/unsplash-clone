import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { ITEM_PER_LIMIT } from '../../constants/imageList.ts';
import { queryKeys } from '../../constants/queryKeys.ts';
import { searchImages } from '../../services/unsplash.ts';
import { SearchResponse } from '../../types/photo.ts';

export const useSearchPhotos = (query: string) => {
  return useSuspenseInfiniteQuery({
    queryKey: queryKeys.images.search(query),
    queryFn: async ({ pageParam = 1 }) => {
      if (!query) {
        return { total: 0, total_pages: 0, results: [] };
      }
      return await searchImages({ query, page: pageParam });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: SearchResponse, allPages: SearchResponse[]) => {
      const pageCount = allPages.length;
      const totalCount = lastPage.total;
      return totalCount > ITEM_PER_LIMIT * pageCount ? pageCount + 1 : undefined;
    },
  });
};
