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
      <br />
    </section>
  );
}
