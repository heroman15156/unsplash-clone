import { Heart } from 'lucide-react';

import { useBookmarkStore } from '../../store/useBookmarkStore.ts';
import { UnsplashImage } from '../../types/photo.ts';
import { Button } from './BookmarkButton.styles';

interface BookmarkButtonProps {
  image: UnsplashImage;
  className?: string;
}

const BookmarkButton = ({ image }: BookmarkButtonProps) => {
  const { isImageBookmarked, toggleBookmark } = useBookmarkStore();

  return (
    <Button
      isBookmarked={isImageBookmarked(image.id)}
      onClick={e => {
        e.stopPropagation();
        toggleBookmark(image);
      }}
      aria-label={isImageBookmarked(image.id) ? '북마크 해제' : '북마크 추가'}
    >
      <Heart size={18} fill={isImageBookmarked(image.id) ? 'currentColor' : 'none'} />
    </Button>
  );
};

export default BookmarkButton;
