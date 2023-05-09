import { ReactComponent as LogoIcon } from "cardParts/logo.svg";

import {
  HeaderSection,
  Link,
  LogoWrapper,
  Nav,
} from "components/AppBar/AppBar.styled";

function Header() {
  return (
    <HeaderSection>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/tweets-page">Tweets</Link>
      </Nav>
    </HeaderSection>
  );
}

export default Header;
