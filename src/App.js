import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./pages/about";
import Home from "./pages/home";
import Footer from "./components/layout/Footer";
import Tours from "./pages/tours";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="category/:id" element={<CategoryPage />} /> */}
        <Route path="tours" element={<Tours />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
