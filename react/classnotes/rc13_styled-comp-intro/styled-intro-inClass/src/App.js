import { Button, TomatoButton } from "./component/Button.styled";
import Container from "./component/Container.styled";

const App = () => {
  return (
    <Container>
      <h1>Styled Components</h1>
      <Button primary>Click</Button>
      <Button>Clear</Button>
      <TomatoButton>Send</TomatoButton>
      <TomatoButton primary>Submit</TomatoButton>
    </Container>
  );
};

export default App;
