import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";
import Paths from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";
import Aws from "./pages/Aws";
import Fullstack from "./pages/Fullstack";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetail />} />
        <Route path="paths" element={<Paths />}>
          <Route path="aws" element={<Aws />} />
          <Route path="fullstack" element={<Fullstack />} />
        </Route>

        <Route path="contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
