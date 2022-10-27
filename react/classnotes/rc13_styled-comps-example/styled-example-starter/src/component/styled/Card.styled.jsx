import styled from "styled-components";

const Main = styled.main`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ id }) => (id % 2 ? "row" : "row-reverse")};
  background-color: #fff;
  padding: 4rem;
  margin: 1rem auto;
  gap: 3rem;
  max-width: 90%;
`;

export const CardTitle = styled.h2`
  font-weight: bolder;
  margin: 1.2rem 0;
`;

export const CardImage = styled.img`
  width: 40%;
  object-fit: cover;
  margin: 20px;
  border-radius: 10px;
`;

export const Description = styled.p`
  max-width: 500px;
  min-width: 250px;
  font-size: 1.5rem;
`;

export default Main;
