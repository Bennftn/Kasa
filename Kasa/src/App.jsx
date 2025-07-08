import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error404 from "./pages/Error404";

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;