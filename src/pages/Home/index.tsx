import { Suspense } from 'react';

import HomeSearch from '../../components/HomeSearch';
import ImageGrid from '../../components/ImageGrid';
import { Loading } from '../../components/Loading';
import { useHomeSearch } from '../../hooks/useHomeSearch.ts';

const ImageList = () => {
  const { images, hasNextPage, fetchNextPage } = useHomeSearch();

  return <ImageGrid images={images} onLoadMore={fetchNextPage} hasNextPage={hasNextPage} />;
};

const HomePage = () => {
  return (
    <>
      <HomeSearch />
      <Suspense fallback={<Loading />}>
        <ImageList />
      </Suspense>
    </>
  );
};

export default HomePage;
