import React from "react";

import {
  StyledHeader,
  StyledLogo,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledLink,
} from "./styles";

import logo from "assets/logo.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
      <StyledNav>
        <StyledList>
          <StyledListItem>
            <StyledLink to="/">Home</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/about">About</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/users">Users</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};
