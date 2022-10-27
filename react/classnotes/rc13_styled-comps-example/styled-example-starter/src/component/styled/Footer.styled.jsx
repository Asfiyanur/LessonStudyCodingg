import styled from "styled-components";

const FooterDiv = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
`;

export default FooterDiv;

export const FooterContent = styled.div`
  max-width: 900px;
  margin: 1rem auto;
`;

export const FooterLogo = styled.img`
  width: 320px;
  margin: 1rem 0;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    width: 90%;
    display: block;
    margin: 0 auto;
  } ;
`;

export const Footerflex = styled.div`
  /*  */
`;
