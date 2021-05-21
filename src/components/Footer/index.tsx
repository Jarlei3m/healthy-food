import { FooterContainer, FooterContent } from "./styles";
import Link from 'next/link';

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
          <p>
            © Copyrights 2019 Stack. All Rights Reserved.
          </p>

          <div> 
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
            <Link href="/terms-and-conditions">
              <a>Terms and Conditions</a>
            </Link>
          </div>
      </FooterContent>
    </FooterContainer>
  )
}