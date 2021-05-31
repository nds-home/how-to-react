import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  background-color: #282c34;
  height: 56px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const StyledLogo = styled.img`
  height: 100%;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: spin infinite 20s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledNav = styled.nav``;

export const StyledList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledListItem = styled.li`
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-size: 0.65em;
  color: white;
  text-decoration: none;
`;
