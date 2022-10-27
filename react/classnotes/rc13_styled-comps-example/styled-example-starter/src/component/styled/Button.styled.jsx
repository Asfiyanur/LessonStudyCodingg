import styled from "styled-components";

const Button = styled.button`
  background: ${({ bg }) => bg || "white"};
  color: ${({ color }) => color || "white"};
  border: 1px solid #a62440;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

export default Button;
