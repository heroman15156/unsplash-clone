import { ITEM_PER_LIMIT } from '../constants/imageList.ts';
import {
  SearchImagesParams,
  SearchResponse,
  UnsplashImage,
  UnsplashImageDetail,
} from '../types/photo.ts';
import { unsplashApi } from './api.ts';

export const searchImages = async ({
  query,
  page = 1,
}: SearchImagesParams): Promise<SearchResponse> => {
  const response = await unsplashApi.get('/search/photos', {
    params: {
      query,
      page,
      per_page: ITEM_PER_LIMIT,
    },
  });
  return response.data;
};

export const getPhotos = async ({ page = 1 }): Promise<UnsplashImage[]> => {
  const response = await unsplashApi.get('/photos', {
    params: { page, per_page: ITEM_PER_LIMIT },
  });

  return response.data;
};

export const getImageDetail = async (imageId: string): Promise<UnsplashImageDetail> => {
  const response = await unsplashApi.get(`/photos/${imageId}`);
  const { id, created_at, width, height, downloads, tags, user } = response.data;
  return {
    id,
    created_at,
    width,
    height,
    downloads,
    tags,
    user: { name: user.name },
  };
};
