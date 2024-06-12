import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;
export const Logo = styled.span`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavigationItem = styled.span`
  margin-left: 20px;
  text-decoration: none;
  color: white;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #aaa;
  }
`;
