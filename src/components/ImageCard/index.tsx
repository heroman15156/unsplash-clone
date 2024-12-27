import { memo, useState } from 'react';

import { UnsplashImage } from '../../types/photo.ts';
import BookmarkButton from '../BookmarkButton';
import ImageDetailModal from '../ImageDetailModal';
import { Card, ImageWrapper, Overlay, StyledImage } from './ImageCard.styles.ts';

type Props = {
  image: UnsplashImage;
};

const ImageCard = memo(({ image }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => setIsModalOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
      >
        <ImageWrapper>
          <StyledImage src={image.urls.regular} alt={image.alt_description} loading="lazy" />
          <Overlay className="overlay">
            <BookmarkButton image={image} />
          </Overlay>
        </ImageWrapper>
      </Card>

      <ImageDetailModal image={image} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
});

export default ImageCard;
