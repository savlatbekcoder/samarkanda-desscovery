import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../hero";
import tour1 from "../../assests/bg/tour1.jpg";
import tour2 from "../../assests/bg/tour2.jpg";
import tour3 from "../../assests/bg/tour3.jpg";
import tour4 from "../../assests/bg/tour4.jpg";
import tour5 from "../../assests/bg/tour5.jpg";
import tour6 from "../../assests/bg/tour6.jpg";
import axios from "axios";

const API_URL = `https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/comments/`;

const TourPageCard = () => {
  const { id } = useParams();

  const [comments, setComments] = useState([]); // Store all comments
  const [tours, setTours] = useState({}); // Store all comments
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });
  const [hover, setHover] = useState(0); // For star hover effects
  const [error, setError] = useState(""); // For error messages

  // const tourArray = Object.keys(tourData).map((key, index) => ({
  //   id: `tour-${index + 1}`, // Unique ID
  //   createdAt: new Date().toISOString(),
  //   ...tourData[key], // Spread the individual tour data
  // }));

  useEffect(() => {
    // document.documentElement.scrollTop = 0;
    const loadTourData = async () => {
      try {
        const response = await axios.get(
          "https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours"
        ); // Replace with your API URL
        const data = response.data;

        var tourData = data.reduce((acc, tour) => {
          const key = tour.id; // Assuming `id` is `t1`, `t2`, etc.
          acc[key] = tour;
          return acc;
        }, {});
        setTours(tourData);
      } catch (error) {
        console.error("Error loading tours:", error.message);
        return {};
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(API_URL);
        setComments(response.data); // Update state with the fetched comments
      } catch (err) {
        console.error("Error fetching comments:", err);
        setError("Failed to load comments. Please try again later.");
      }
    };

    fetchComments();
    loadTourData();
    // async function postDataToMockAPI() {
    //   try {
    //     const apiUrl =
    //       "https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours"; // Replace with your mock API URL

    //     for (const tour of tourArray) {
    //       const response = await axios.post(apiUrl, tour);
    //       console.log(`Tour ${tour.name} added: `, response.data);
    //     }
    //   } catch (error) {
    //     console.error("Error posting data to mock API:", error);
    //   }
    // }

    // // Execute function
    // postDataToMockAPI();
  }, []);

  console.log(tours);

  const deleteTour = async (tourKey) => {
    try {
      await axios.delete(
        `https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours/${tourKey}`
      );
      console.log(`Deleted tour: ${tourKey}`);
    } catch (error) {
      console.error(`Error deleting tour ${tourKey}:`, error.message);
    }
  };

  const updateTour = async (tourKey, updatedData) => {
    try {
      const response = await axios.put(
        `https://mockapi.io/endpoint/tours/${tourKey}`,
        updatedData
      );
      console.log(`Updated tour: ${tourKey}`, response.data);
    } catch (error) {
      console.error(`Error updating tour ${tourKey}:`, error.message);
    }
  };

  const addTour = async (newTourData) => {
    try {
      const response = await axios.post(
        "https://mockapi.io/endpoint/tours",
        newTourData
      );
      console.log("Added new tour:", response.data);
    } catch (error) {
      console.error("Error adding new tour:", error.message);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle rating updates
  const handleRating = (starValue) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: starValue,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.name ||
      !formData.email ||
      !formData.comment ||
      formData.rating === 0
    ) {
      alert("Please fill out all fields and provide a rating!");
      return;
    }

    // Create a new comment object
    const newComment = {
      ...formData,
      createdAt: new Date().toISOString(), // Add createdAt timestamp
    };

    try {
      // Post the new comment to the server
      const response = await axios.post(API_URL, newComment);
      setComments((prevComments) => [...prevComments, response.data]); // Add the new comment to the list

      // Reset the form
      setFormData({
        name: "",
        email: "",
        rating: 0,
        comment: "",
      });
      setHover(0); // Reset star hover
    } catch (err) {
      console.error("Error posting comment:", err);
      setError("Failed to post the comment. Please try again.");
    }
  };

  const tour = tours[id];

  if (!tour) {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <h1>Loading...</h1>
        <br />
        <br />
        <br />
      </>
    );
  } else {
    return (
      <section className="tour_page_card">
        <Hero image={tour.image} text={tour.name} />
        <br />
        <div className="container">
          <div className="tour_page_card_row">
            <div className="side">
              <h1 style={{ fontSize: "32px" }}>{tour.name}</h1>
              <br />
              <div dangerouslySetInnerHTML={{ __html: tour.content }}></div>
              <div className="comments">
                <div className="posted-comments">
                  <h2>Comments</h2>
                  {comments.length === 0 && (
                    <p>No comments yet. Be the first to comment!</p>
                  )}
                  <ul>
                    {comments.map((item) => (
                      <li key={item.id}>
                        <strong>{item.name}</strong>
                        <div className="rating">
                          {"★".repeat(item.rating) +
                            "☆".repeat(5 - item.rating)}
                        </div>
                        <p>{item.comment}</p>
                        <small>
                          Posted on: {new Date(item.createdAt).toLocaleString()}
                        </small>
                      </li>
                    ))}
                  </ul>
                </div>
                <br />
                {error && <p className="error">{error}</p>}

                <form className="add-comment" onSubmit={handleSubmit}>
                  <h1>Leave a comment</h1>
                  <br />
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="star-rating">
                    <label>Rate Us:</label>
                    <div>
                      {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                          <span
                            key={starValue}
                            className={`star ${
                              starValue <= (hover || formData.rating)
                                ? "active"
                                : ""
                            }`}
                            onClick={() => handleRating(starValue)}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(0)}
                          >
                            &#9733;
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
            <div className="side">
              <div className="side_header">
                <h1>{tour.price}</h1> <p>Per person</p>
              </div>
              <form action="https://formspree.io/f/mqakorno" method="POST">
                <label>Full name:</label>
                <input type="text" name="full_name" placeholder="John Doe" />
                <label>E-mail address:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="sample@yourcompany.com"
                />
                <label>Phone number:</label>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="+123 23 43 21"
                />
                <label>Departure date:</label>
                <input type="date" name="departure_date" />
                <label>Number of person:</label>
                <input
                  type="number"
                  name="number_of_person"
                  placeholder="1 person"
                />

                <button type="submit">Order this tour</button>
              </form>
            </div>
          </div>
        </div>
        <> </>
      </section>
    );
  }
};

export default TourPageCard;
