import AppBarComp from "../components/AppBarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme, ThemeProvider } from "@mui/material";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: { main: "#F17A97", light: "#F3BCC8", dark: "#F2526E" },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBarComp />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
    </ThemeProvider>
  );
};

export default Home;
