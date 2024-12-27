import { formatDistanceToNow } from 'date-fns';
import { Download, User } from 'lucide-react';

import { useDetailPhoto } from '../../hooks/queries/useDetailPhoto.ts';
import { UnsplashImage } from '../../types/photo.ts';
import BookmarkButton from '../BookmarkButton';
import Modal from '../Modal';
import { UserInfo } from '../Modal/Modal.styles.ts';
import {
  ImageContainer,
  InfoItem,
  MetaInfo,
  StyledImage,
  Tag,
  TagContainer,
} from './ImageDetail.styles.ts';

type Props = {
  image: UnsplashImage;
  isOpen: boolean;
  onClose: () => void;
};

const ImageDetailModal = ({ image, isOpen, onClose }: Props) => {
  const aspectRatio = image.width / image.height;
  const { imageDetail } = useDetailPhoto({ image, isOpen });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="medium">
      <Modal.Header>
        <UserInfo>
          <User size={20} />
          <span>{image.user.name}</span>
          <BookmarkButton image={image} />
        </UserInfo>
      </Modal.Header>
      <Modal.Body>
        <ImageContainer aspectRatio={aspectRatio}>
          <StyledImage src={image.urls.regular} alt={image.alt_description} />
        </ImageContainer>
        <MetaInfo>
          <InfoItem>
            <span>
              크기: {image.width} x {image.height}
            </span>
          </InfoItem>
          <InfoItem>
            <span>업로드: {formatDistanceToNow(new Date(image.created_at))} 전</span>
          </InfoItem>
          <InfoItem>
            <Download size={20} />
            <span>{imageDetail?.downloads ?? 0}</span>
          </InfoItem>
          {imageDetail?.tags && (
            <TagContainer>
              {imageDetail.tags.map(tag => (
                <Tag key={tag.title}>{tag.title}</Tag>
              ))}
            </TagContainer>
          )}
        </MetaInfo>
      </Modal.Body>
    </Modal>
  );
};

export default ImageDetailModal;
