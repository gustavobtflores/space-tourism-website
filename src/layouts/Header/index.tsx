import HeaderContainer from "@/theme/styled/HeaderContainer";
import Logo from "@/theme/styled/Logo";
import logoImg from "@/assets/shared/logo.svg";
import HeaderLine from "@/theme/styled/HeaderLine";
import HeaderNavbar from "@theme/styled/HeaderNavbar";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logoImg} />
      <HeaderLine />
      <HeaderNavbar />
    </HeaderContainer>
  );
};

export default Header;
