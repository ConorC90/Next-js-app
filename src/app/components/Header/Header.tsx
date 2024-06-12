import React from "react";
import Link from "next/link";
import {
  HeaderContainer,
  Logo,
  Navigation,
  NavigationItem,
} from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link href="/">MyApp</Link>
      </Logo>
      <Navigation>
        <NavigationItem>
          <Link href="/about">About</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/cost">Cost</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/signUp">Sign Up</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/about">About</Link>
        </NavigationItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
