import React, { useEffect, useState } from "react";
import tour3 from "../../assests/bg/tour3.jpg";
import tour1 from "../../assests/bg/tour1.jpg";
import tour2 from "../../assests/bg/tour2.jpg";
import tour4 from "../../assests/bg/tour4.jpg";
import tour5 from "../../assests/bg/tour5.jpg";
import tour6 from "../../assests/bg/tour6.jpg";

import TourCard from "../../components/tour_card";
import Hero from "../../components/hero";
import axio from "axios";

export default function Tours() {
  const [tours, setTours] = useState([]);

  const [filter, setFilter] = useState("en"); // State to store the selected filter value

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTours = tours.filter((tour) => {
    return filter === "all" || tour.filter === filter;
  });

  return (
    <section>
      <Hero image={tour3} />

      <div className="container">
        <br />
        <center>
          <h1 className="section-title">Tours</h1>
        </center>
        <select
          name="filter"
          id="tourFilter"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="en">English</option>
          <option value="it">Italian</option>
          <option value="fr">French</option>
          <option value="ru">Russian</option>
        </select>
        <div className="tours-page-row">
          {Array.isArray(filteredTours) && filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <TourCard
                key={tour.id} // Add a key to each element for React's reconciliation process
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
