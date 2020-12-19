import * as React from "react";
import Navigation from "./styled/Navigation";
import NavItem from "./styled/NavItem";
import NavList from "./styled/NavList";
import RoomChange from "./styled/RoomChange";
import RoomWrapper from "./styled/RoomWrapper";
import StyledLink from "./styled/StyledLink";
import User from "./styled/User";
import UserWrapper from "./styled/UserWrapper";

const Header = () => {
  return (
    <header>
      <Navigation>
        <UserWrapper>
          <h2>Hello,</h2> <User href="/"> Mateusz</User>
        </UserWrapper>
        <RoomWrapper>
          <h3>Pokój xyz</h3>
          <RoomChange>Zmień pokój</RoomChange>
        </RoomWrapper>
        <NavList>
          <NavItem>
            <StyledLink href="/">Moje Konto</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="/">Rejestracja</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="/">Wyloguj Się</StyledLink>
          </NavItem>
        </NavList>
      </Navigation>
    </header>
  );
};
export default Header;
