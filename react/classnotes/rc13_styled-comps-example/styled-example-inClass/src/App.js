import { ThemeProvider } from "styled-components";
import Header from "./components/Header";

const style = {
  colors: { header: "#fff", body: "fff", footer: "#8A1C4A" },
  margin: {},
  responsive: {},
};

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
