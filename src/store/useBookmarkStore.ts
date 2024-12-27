import { create } from 'zustand';

import { UnsplashImage } from '../services/unsplash.ts';

interface BookmarkStore {
  bookmarkedImages: UnsplashImage[];
  isImageBookmarked: (imageId: string) => boolean;
  toggleBookmark: (image: UnsplashImage) => void;
}

export const useBookmarkStore = create<BookmarkStore>((set, get) => ({
  bookmarkedImages: (() => {
    const stored = localStorage.getItem('bookmarks');
    return stored ? JSON.parse(stored) : [];
  })(),

  isImageBookmarked: (imageId: string) => {
    return get().bookmarkedImages.some(img => img.id === imageId);
  },

  toggleBookmark: (image: UnsplashImage) => {
    const { bookmarkedImages } = get();
    const isCurrentlyBookmarked = bookmarkedImages.some(img => img.id === image.id);

    const newBookmarks = isCurrentlyBookmarked
      ? bookmarkedImages.filter(img => img.id !== image.id)
      : [...bookmarkedImages, image];

    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    set({ bookmarkedImages: newBookmarks });
  },
}));
