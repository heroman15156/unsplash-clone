export type UnsplashImage = {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  width: number;
  height: number;
  created_at: string;
  user: {
    name: string;
    username: string;
  };
};

export type SearchResponse = {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
};

type ImageTag = {
  title: string;
};

export type UnsplashImageDetail = {
  id: string;
  created_at: string;
  width: number;
  height: number;
  downloads: number;
  tags: ImageTag[];
  user: {
    name: string;
  };
};

export type SearchImagesParams = {
  query: string;
  page?: number;
};
