import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #333;
  color: white;
  font-size: 14px;
`;

export const CopyRightText = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
