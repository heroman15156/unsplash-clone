import { useInView } from 'react-intersection-observer';

import { UnsplashImage } from '../../types/photo.ts';
import { ImageErrorFallback } from '../Error/Fallbacks.tsx';
import { QueryBoundary } from '../Error/QueryBoundary.tsx';
import ImageCard from '../ImageCard';
import { Grid } from './ImageGrid.styles.ts';

interface ImageGridProps {
  images: UnsplashImage[];
  hasNextPage?: boolean;
  onLoadMore?: () => void;
  isLoading?: boolean;
}
const ImageGrid = ({ images, onLoadMore, hasNextPage }: ImageGridProps) => {
  const isLoadMoreItems = onLoadMore && hasNextPage;

  const { ref } = useInView({
    threshold: 0.5,

    onChange: inView => {
      if (inView && isLoadMoreItems) {
        onLoadMore();
      }
    },
  });

  return (
    <QueryBoundary Fallback={ImageErrorFallback}>
      <Grid>
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
        {onLoadMore && <div ref={ref} />}
      </Grid>
    </QueryBoundary>
  );
};

export default ImageGrid;
