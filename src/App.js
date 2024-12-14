import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./pages/about";
import Home from "./pages/home";
import Footer from "./components/layout/Footer";
import Tours from "./pages/tours";
import TourPageCard from "./components/tour_page_card";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {isLoading ? (
        <center>
          <br />
          <br />
          <br />
          <h1>Loading...</h1>
        </center>
      ) : (
        <>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            {/* <Route path="category/:id" element={<CategoryPage />} /> */}
            <Route path="tours" element={<Tours />} />
            <Route path="about" element={<About />} />
            <Route path="/tours/:id" element={<TourPageCard />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
