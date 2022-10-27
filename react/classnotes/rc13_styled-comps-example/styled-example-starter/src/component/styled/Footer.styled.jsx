import styled from "styled-components";

const FooterDiv = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
`;

export default FooterDiv;

export const FooterContent = styled.div`
  max-width: 900px;
  margin: 1rem auto 0;
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
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.header};
  ul {
    list-style-type: none;
  }
  li {
    margin-bottom: 1rem;
    padding: 0 0.4rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
    ul {
      padding: 1.8rem 0;
    }
  } ;
`;

export const SocialIcons = styled(Footerflex)`
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.header};
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin: 0.7rem;
    padding: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: row;
    justify-content: center;
  }
`;
