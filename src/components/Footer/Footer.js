import { ReactComponent as LogoIcon } from "assets/logo.svg";
import { FooterSection, Logo } from "components/Footer/Footer.styled";

function Footer() {
  return (
    <FooterSection>
      <Logo>
        <LogoIcon />
      </Logo>
    </FooterSection>
  );
}

export default Footer;
