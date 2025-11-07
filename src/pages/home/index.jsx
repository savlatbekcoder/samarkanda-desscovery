import React, { useEffect, useState } from "react";
import Hero from "../../components/hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image from "../../assests/bg/home-bg.jpg";
import taj from "../../assests/bg/taj.jpg";
import kr from "../../assests/bg/kr.jpg";
import tur from "../../assests/bg/tur.jpg";
import kaz from "../../assests/bg/kaz.jpg";
import road from "../../assests/bg/road.jpg";
import tour1 from "../../assests/bg/tour1.jpg";
import tour2 from "../../assests/bg/tour2.jpg";
import tour3 from "../../assests/bg/tour3.jpg";
import tour4 from "../../assests/bg/tour4.jpg";
import tour5 from "../../assests/bg/tour5.jpg";
import tour6 from "../../assests/bg/tour6.jpg";
import TourCard from "../../components/tour_card";
import { Link } from "react-router-dom";
import axios from "axios";

const FreeConsultation = () => {
    const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    // Normally, you would send the form here using fetch/axios
    // For now, just show success message
    setSuccess(true);
    // Optional: clear the form fields
    e.target.reset();
  }
  return (
    <section style={consultStyles.section}>
      <h2 style={consultStyles.heading}>Get a Free Consultation</h2>
      <form onSubmit={handleSubmit} style={consultStyles.form}>
        <input type="text" name="name" placeholder="Name" required style={consultStyles.input} />
        <input type="tel" name="phoneNumber" placeholder="Phone Number" required style={consultStyles.input} />
        <input type="email" name="email" placeholder="Email" required style={consultStyles.input} />
        <button type="submit" style={consultStyles.button}>Send Message</button>
      </form>
    </section>
  );
};

// -------------------- Make Payment Form --------------------
const MakePayment = () => {
  return (
    <section style={paymentStyles.section}>
      <h2 style={paymentStyles.heading}>Make a Payment</h2>
      <form style={paymentStyles.form}>
        <input type="text" name="name" placeholder="Name" required style={paymentStyles.input} />
        <input type="text" name="surname" placeholder="Surname" required style={paymentStyles.input} />
        <input type="number" name="amount" placeholder="Amount" required style={paymentStyles.input} />
        <input type="tel" name="phoneNumber" placeholder="Phone Number" required style={paymentStyles.input} />
        <button type="submit" style={paymentStyles.button}>Pay Now</button>
      </form>
    </section>
  );
};

// -------------------- Styles --------------------

// Dark background for Free Consultation
const consultStyles = {
  section: { backgroundColor: "#0b0b0b", color: "#fff", textAlign: "center", padding: "60px 20px" },
  heading: { fontSize: "2rem", marginBottom: "25px" },
  form: { maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" },
  input: { padding: "12px", fontSize: "16px", borderRadius: "5px", border: "1px solid #333", outline: "none", color: "#fff", backgroundColor: "#1a1a1a" },
  button: { padding: "12px", backgroundColor: "#007bff", color: "#fff", fontSize: "16px", border: "none", borderRadius: "5px", cursor: "pointer" },
};

// White background for Make Payment
const paymentStyles = {
  section: { backgroundColor: "#fff", color: "#333", textAlign: "center", padding: "60px 20px" },
  heading: { fontSize: "2rem", marginBottom: "25px" },
  form: { maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" },
  input: { padding: "12px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc", outline: "none", color: "#333" },
  button: { padding: "12px", backgroundColor: "#28a745", color: "#fff", fontSize: "16px", border: "none", borderRadius: "5px", cursor: "pointer" },
};


export default function Home() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const loadTourData = async () => {
      try {
        const response = await axios.get(
          "https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours"
        );
        const data = response.data;

        console.log(data);

        setTours(data);
      } catch (error) {
        console.error("Error loading tours:", error.message);
      }
    };

    loadTourData();
    console.log(tours);
  }, []);

  const slides = [
    { id: 1, content: "Uzbekistan", image },
    { id: 2, content: "Tajikistan", image: taj },
    { id: 3, content: "Kyrgyzstan", image: kr },
    { id: 4, content: "Turkmenistan", image: tur },
    { id: 5, content: "Kazakhstan", image: kaz },
    {
      id: 6,
      content: "The Great Silk Road",
      image: road,
    },
  ];

  return (
    <section className="home">
      <Hero image={image} />
      <div className="distinations">
        <center>
          <h1 className="section-title">Destinations</h1>
        </center>
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              850: {
                slidesPerView: 1, // 1 slide for devices 640px wide or smaller
              },
              768: {
                slidesPerView: 2, // 2 slides for devices 768px wide or larger
              },
              1024: {
                slidesPerView: 3, // 3 slides for devices 1024px wide or larger
              },
            }}
            style={{ padding: "20px" }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Link
                  to={`/destinations/` + slide.content.toLowerCase()}
                  className="desti-card"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <h1>{slide.content}</h1>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="tours">
        <center>
          <h1 className="section-title">Tours</h1>
        </center>
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              540: {
                slidesPerView: 1, // 1 slide for devices 640px wide or smaller
              },
              768: {
                slidesPerView: 2, // 2 slides for devices 768px wide or larger
              },
              1024: {
                slidesPerView: 3, // 3 slides for devices 1024px wide or larger
              },
            }}
            style={{ padding: "20px" }}
          >
            {tours.map((tour) => (
              <SwiperSlide key={tour.id}>
                <TourCard
                  price={tour.price}
                  image={tour.image}
                  name={tour.name}
                  id={tour.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <br />
      <FreeConsultation />
      <br />
      <MakePayment />
      <br />
    </section>
  );
}
