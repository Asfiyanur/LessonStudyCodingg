import { ThemeProvider } from "styled-components";
import Header from "./component/Header";

const style = {
  colors: { header: "#fff", body: "#fff", footer: "#8A1C4A" },
  margins: {},
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
