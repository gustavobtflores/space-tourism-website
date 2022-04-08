import { useEffect, useState } from "react";

import logoImg from "@/assets/shared/logo.svg";
import { Container, Line, Navbar, SLink, Links, LinkItem, LinkNumber, HeaderLogo } from "./style";
import Underline from "@/components/Underline";
import { Outlet, useLocation } from "react-router-dom";

const links = [
  { text: "HOME", number: "00", href: "/" },
  { text: "DESTINATION", number: "01", href: "/destination" },
  { text: "CREW", number: "02", href: "/crew" },
  { text: "TECHNOLOGY", number: "03", href: "/tech" },
];

const styles = {
  span: { marginRight: "10px", fontWeight: "700" },
};

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  const getCurrentRoute = () => {
    const currentRoute = links.findIndex((link) => link.href === path);
    return currentRoute;
  };

  const [selectedTab, setSelectedTab] = useState(getCurrentRoute());

  useEffect(() => {
    setSelectedTab(getCurrentRoute());
  }, [location]);

  return (
    <>
      <Container>
        <HeaderLogo src={logoImg} />
        <Line />
        <Navbar>
          <Links>
            {links.map((link, index) => (
              <LinkItem key={index}>
                <SLink to={link.href} onClick={() => setSelectedTab(index)} key={index}>
                  <LinkNumber style={styles.span}>{link.number}</LinkNumber>
                  {link.text}
                  {index === selectedTab ? <Underline key={index} layoutId="astros" transition={{ stiffness: 100 }} /> : null}
                </SLink>
              </LinkItem>
            ))}
          </Links>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
