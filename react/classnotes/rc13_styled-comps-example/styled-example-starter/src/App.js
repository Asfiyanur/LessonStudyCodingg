import { ThemeProvider } from "styled-components";
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { GlobalStyles } from "./component/styled/Global.styled";

const style = {
  colors: { header: "#fff", body: "#fff", footer: "#8A1C4A" },
  margins: {},
  responsive: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <Header />
      <Card />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
