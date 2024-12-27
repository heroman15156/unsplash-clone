import Header from '../components/Header/Header.tsx';
import { LayoutWrapper, MainContent } from './DefaultLayout.styles.ts';
import { DefaultLayoutProps } from './DefaultLayout.types.ts';

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      {/* Footer 컴포넌트가 추가되면 여기에 위치 */}
    </LayoutWrapper>
  );
};

export default DefaultLayout;
