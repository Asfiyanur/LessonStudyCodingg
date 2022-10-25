import styled from "styled-components";

export const Button = styled.button`
  /* background-color: hotpink; */
  background-color: ${(props) => (props.primary ? "whihte" : "purple")};

  /* color: white; */
  color: ${({ primary }) => (primary ? "purple" : "white")};

  cursor: pointer;
  width: 7rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border-color: hotpink;
  &:hover {
    transform: scale(0.97);
  }
`;

export const TomatoButton = styled(Button)`
  background-color: ${(props) => (props.primary ? "white" : "tomato")};

  color: ${({ primary }) => (primary ? "tomato" : "white")};
`;
