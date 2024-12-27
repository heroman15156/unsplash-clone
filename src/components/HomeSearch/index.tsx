import { Search } from 'lucide-react';

import { useSearchStore } from '../../store/useSearchStore.tsx';
import {
  BackgroundWrapper,
  Container,
  Content,
  SearchContainer,
  SearchIconWrapper,
  SearchInput,
} from './HomeSearch.styles.ts';

const HomeSearch = () => {
  const { searchInput, setSearchInput } = useSearchStore();

  return (
    <Container>
      <BackgroundWrapper />
      <Content>
        <SearchContainer>
          <SearchIconWrapper>
            <Search size={24} />
          </SearchIconWrapper>
          <SearchInput
            type="text"
            placeholder="이미지 검색"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
        </SearchContainer>
      </Content>
    </Container>
  );
};

export default HomeSearch;
