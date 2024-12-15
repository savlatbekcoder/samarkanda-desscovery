import React from "react";
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

export default function Home() {
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

  const tours = [
    {
      id: "t1",
      price: "545$",
      content: "Tour to Uzbekistan from Moscow",
      tour_length: "6 days/5 nights",
      image: tour1,
    },
    {
      id: "t2",
      price: "555$",
      content: "Three pearls of the east",
      tour_length: "7 days/6 nights",
      image: tour2,
    },
    {
      id: "t3",
      price: "695$",
      content: "Treasures of Eastern Culture",
      tour_length: "9 days/8 nights",
      image: tour3,
    },
    {
      id: "t4",
      price: "640$",
      content: "Oasis of the medieval east",
      tour_length: "8 days/7 nights",
      image: tour4,
    },
    {
      id: "t5",
      price: "770$",
      content: "Dear ancient caravan",
      tour_length: "11 days/10 nights",
      image: tour5,
    },
    {
      id: "t6",
      price: "875$",
      content: "Welcome to Uzbekistan",
      tour_length: "13 days/12 nights",
      image: tour6,
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
                <div
                  className="desti-card"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <h1>{slide.content}</h1>
                </div>
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
                  name={tour.content}
                  id={tour.id}
                  tour_length={tour.tour_length}
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
