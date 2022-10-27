import React from "react";
import styled from "styled-components";
import FooterDiv, {
  FooterContent,
  Footerflex,
  FooterLogo,
} from "./styled/Footer.styled";

const Footer = () => {
  return (
    <FooterDiv>
      <FooterContent>
        <div>
          <FooterLogo src="./images/logo_white.png" />
        </div>
        <Footerflex>
          <ul>
            <li>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</li>
            <li>+1 (571) 360 66 77</li>
            <li>contact@clarusway.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </Footerflex>
      </FooterContent>
    </FooterDiv>
  );
};

export default Footer;
