import { FooterContainer, CopyRightText } from "./Footer.style";
import Link from "next/link";
const StyledFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <CopyRightText>
        &copy; {currentYear} MyApp. All rights reserved.
      </CopyRightText>
      <Link href="/about">About Us</Link> |
      <Link href="/terms">Terms & Conditions</Link> |
      <Link href="/privacy">Privacy Policy</Link>
    </FooterContainer>
  );
};

export default StyledFooter;
