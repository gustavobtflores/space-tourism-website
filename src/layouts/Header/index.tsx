import { useState } from "react";

import logoImg from "@/assets/shared/logo.svg";
import { Container, Line, Navbar, SLink, Links, LinkItem, Underline } from "./style";

const links = [
  { text: "00 HOME", href: "/" },
  { text: "01 DESTINATION", href: "/destination" },
  { text: "02 CREW", href: "/crew" },
  { text: "03 TECHNOLOGY", href: "/tech" },
];

const Header = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container>
      <img src={logoImg} />
      <Line />
      <Navbar>
        <Links>
          {links.map((link, index) => (
            <LinkItem>
              <SLink to={link.href} onClick={() => setSelectedTab(index)} key={index}>
                {link.text}
                {index === selectedTab ? <Underline layoutId="underline" transition={{ stiffness: 100 }} /> : null}
              </SLink>
            </LinkItem>
          ))}
        </Links>
      </Navbar>
    </Container>
  );
};

export default Header;
