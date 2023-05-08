import { ReactComponent as LogoIcon } from "assets/logo.svg";
import {
  HeaderSection,
  Link,
  LogoWrapper,
  Nav,
} from "components/Header/Header.styled";

function Header() {
  return (
    <HeaderSection>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </Nav>
    </HeaderSection>
  );
}

export default Header;
