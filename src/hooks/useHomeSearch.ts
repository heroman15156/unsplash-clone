import { useSearchStore } from '../store/useSearchStore.tsx';
import { usePhotos } from './queries/usePhotos.ts';
import { useSearchPhotos } from './queries/useSearchPhotos.ts';
import useDebounce from './useDebounce.ts';

export const useHomeSearch = () => {
  const { searchInput, setSearchInput } = useSearchStore();
  const debouncedQuery = useDebounce(searchInput, 500);

  const getPhotosQuery = usePhotos();
  const searchPhotosQuery = useSearchPhotos(debouncedQuery);

  const currentQuery = debouncedQuery ? searchPhotosQuery : getPhotosQuery;
  const searchPhotos = searchPhotosQuery.data?.pages.flatMap(page => page.results) ?? [];
  const getPhotos = getPhotosQuery.data?.pages.flatMap(page => page) ?? [];
  const images = debouncedQuery ? searchPhotos : getPhotos;

  return {
    searchInput,
    images,
    isLoading: currentQuery.isLoading,
    hasNextPage: currentQuery.hasNextPage,
    fetchNextPage: currentQuery.fetchNextPage,
    handleSearch: setSearchInput,
  };
};
