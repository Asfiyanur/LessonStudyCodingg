import { Button, TomatoButton } from "./component/Button.styled";
import Container from "./component/Container.styled";
import HeaderText from "./component/Header.styled";
import StyledLink from "./component/Link.styled";

const App = () => {
  return (
    <>
      <Container bg="grey">
        <HeaderText color="hotpink"> STYLED COMPONENT</HeaderText>
        <Button primary>Click</Button>
        <Button>Clear</Button>
        <TomatoButton>Send</TomatoButton>
        <TomatoButton primary>Submit</TomatoButton>
      </Container>

      <Container bg="#eee">
        <StyledLink href="https://www.google.com.tr/?hl=tr" target="_blank">
          Google
        </StyledLink>

        <StyledLink href="https://www.google.com.tr/?hl=tr" target="_blank">
          React
        </StyledLink>
      </Container>
    </>
  );
};

export default App;
