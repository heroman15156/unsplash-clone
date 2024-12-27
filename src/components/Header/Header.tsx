import {
  Bookmark,
  HeaderContainer,
  LogoContainer,
  LogoText,
  UnsplashLogo,
} from './Header.styles.ts';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer href="/">
        <UnsplashLogo
          width="32"
          height="32"
          viewBox="0 0 32 32"
          version="1.1"
          aria-labelledby="unsplash-홈"
          aria-hidden="false"
        >
          <desc lang="en-US">Unsplash logo</desc>
          <title id="unsplash-홈">Unsplash 홈</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
        </UnsplashLogo>
        <LogoText>Unsplash</LogoText>
      </LogoContainer>
      <Bookmark href="/bookmarks">북마크</Bookmark>
    </HeaderContainer>
  );
};

export default Header;
