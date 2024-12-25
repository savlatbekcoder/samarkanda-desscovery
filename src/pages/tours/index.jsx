import React, { useEffect, useState } from "react";
import tour1 from "../../assests/bg/tour1.jpg";
import tour2 from "../../assests/bg/tour2.jpg";
import tour3 from "../../assests/bg/tour3.jpg";
import tour4 from "../../assests/bg/tour4.jpg";
import tour5 from "../../assests/bg/tour5.jpg";
import tour6 from "../../assests/bg/tour6.jpg";
import TourCard from "../../components/tour_card";
import Hero from "../../components/hero";
import axios from "axios";

export default function Tours() {
  const [tours, setTours] = useState([]);

  // const tours = [
  //   {
  //     id: "1",
  //     price: "545$",
  //     content: "Tour to Uzbekistan from Moscow",
  //     tour_length: "6 days/5 nights",
  //     image: tour1,
  //   },
  //   {
  //     id: "2",
  //     price: "555$",
  //     content: "Three pearls of the east",
  //     tour_length: "7 days/6 nights",
  //     image: tour2,
  //   },
  //   {
  //     id: "3",
  //     price: "605$",
  //     content: "Treasures of Eastern Culture",
  //     tour_length: "9 days/8 nights",
  //     image: tour3,
  //   },
  //   {
  //     id: "4",
  //     price: "640$",
  //     content: "Oasis of the medieval east",
  //     tour_length: "8 days/7 nights",
  //     image: tour4,
  //   },
  //   {
  //     id: "5",
  //     price: "770$",
  //     content: "Dear ancient caravan",
  //     tour_length: "11 days/10 nights",
  //     image: tour5,
  //   },
  //   {
  //     id: "6",
  //     price: "875$",
  //     content: "Welcome to Uzbekistan",
  //     tour_length: "13 days/12 nights",
  //     image: tour6,
  //   },
  // ];
  useEffect(() => {
    const loadTourData = async () => {
      try {
        const response = await axios.get(
          "https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours"
        );
        const data = response.data;

        // const tourData = data.reduce((acc, tour) => {
        //   const key = tour.id;
        //   acc[key] = { ...tour, comments: [] }; // Initialize comments
        //   return acc;
        // }, {});

        console.log(data);

        setTours(data);
      } catch (error) {
        console.error("Error loading tours:", error.message);
      }
    };

    loadTourData();
    console.log(tours);
  }, []);
  return (
    <section>
      <Hero image={tour3} />

      <div className="container">
        <br />
        <center>
          <h1 className="section-title">Tours</h1>
        </center>
        <div className="filters">
          <input type="text" placeholder="Search..." />
          <select name="filter">
            <option value="all">All</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
        <div className="tours-page-row">
          {Array.isArray(tours) && tours.length > 0 ? (
            tours.map((tour) => (
              <TourCard
                id={tour.id}
                price={tour.price}
                image={tour.image}
                name={tour.name}
                tour_length={tour.tour_length}
              />
            ))
          ) : (
            <p>No tours available</p>
          )}
        </div>
      </div>
    </section>
  );
}
