import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./pages/about";
import Home from "./pages/home";
import Footer from "./components/layout/Footer";
import Tours from "./pages/tours";
import TourPageCard from "./components/tour_page_card";
import { useEffect, useState } from "react";
import NotFound from "./components/404";
import Destinations from "./components/destinations";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            background: "#000",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width="200"
            height="200"
            style={{
              shapeRendering: "auto",
              display: "block",
              background: "transparent",
            }}
          >
            <g>
              <circle
                strokeLinecap="round"
                fill="none"
                strokeDasharray="50.26548245743669 50.26548245743669"
                stroke="#ffffff"
                strokeWidth="8"
                r="32"
                cy="50"
                cx="50"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="tours" element={<Tours />} />
            <Route path="about" element={<About />} />
            <Route path="/tours/:id" element={<TourPageCard />} />
            <Route path="/destinations/:id" element={<Destinations />} /> 
             <Route path="*" element={<NotFound />} /> 
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
