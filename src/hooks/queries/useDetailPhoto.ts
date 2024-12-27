import { useQuery } from '@tanstack/react-query';

import { getImageDetail } from '../../services/unsplash.ts';
import { UnsplashImage } from '../../types/photo.ts';

type Props = {
  image: UnsplashImage;
  isOpen: boolean;
};

export const useDetailPhoto = ({ isOpen, image }: Props) => {
  const { data: imageDetail } = useQuery({
    queryKey: ['imageDetail', image.id],
    queryFn: () => getImageDetail(image.id),
    enabled: isOpen,
  });

  return { imageDetail };
};
