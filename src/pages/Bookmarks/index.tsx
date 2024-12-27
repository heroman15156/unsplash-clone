import ImageGrid from '../../components/ImageGrid';
import { useBookmarkStore } from '../../store/useBookmarkStore.ts';
import { EmptyState, PageHeader, Subtitle, Title } from './Bookmarks.styles.tsx';

const BookmarksPage = () => {
  const bookmarkedImages = useBookmarkStore(state => state.bookmarkedImages);
  const isEmpty = bookmarkedImages.length === 0;

  return (
    <>
      <PageHeader>
        <Title>북마크</Title>
        <Subtitle>
          {isEmpty ? '저장된 이미지가 없습니다' : `${bookmarkedImages.length}개의 이미지가 저장됨`}
        </Subtitle>
      </PageHeader>

      {isEmpty ? (
        <EmptyState>
          <h2>저장된 이미지가 없습니다</h2>
          <p>마음에 드는 이미지를 북마크 해보세요!</p>
        </EmptyState>
      ) : (
        <ImageGrid images={bookmarkedImages} />
      )}
    </>
  );
};

export default BookmarksPage;
