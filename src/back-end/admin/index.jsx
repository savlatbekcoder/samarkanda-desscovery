import React, { useEffect, useState } from "react";
import NotFound from "../../components/404";
import axios from "axios";

import "../index.css";

const Admin = () => {
  const [tours, setTours] = useState([]);
  const [commentsVisibility, setCommentsVisibility] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const isLoggedIn = window.localStorage.getItem("issssseeeeeeLOOOOOOOgiiin");
  const [tour, setTour] = useState({
    name: "",
    image: "",
    content: "<h3>Day 1</h3>Your datas here for Day 1",
    price: "",
    data_price: "",
    filter: "en",
  });

  const fetchComments = async (tourIds) => {
    try {
      const commentsPromises = tourIds.map(async (id) => {
        try {
          const response = await axios.get(
            `https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours/${id}/comments`
          );
          return { id, comments: response.data, error: null };
        } catch (error) {
          console.error(
            `Error fetching comments for tour ${id}:`,
            error.message
          );
          return { id, comments: [], error: error.message }; // Return empty comments on error
        }
      });

      const commentsData = await Promise.allSettled(commentsPromises);

      setTours((prevTours) => {
        const updatedTours = { ...prevTours };
        commentsData.forEach((result) => {
          if (result.status === "fulfilled") {
            const { id, comments } = result.value;
            if (updatedTours[id]) {
              updatedTours[id].comments = comments;
            }
          } else {
            console.error(
              `Failed to process comments for some tours:`,
              result.reason
            );
          }
        });
        return updatedTours;
      });
    } catch (err) {
      console.error("Error in fetchComments:", err.message);
    }
  };
  useEffect(() => {
    if (!selectedTour) {
      setSelectedTour({ filter: "en" }); // Default to "en" if selectedTour is null
    }
  }, [selectedTour]);

  const loadTourData = async () => {
    try {
      const response = await axios.get(
        "https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours"
      );
      const data = response.data;

      // Set tours directly as an array
      setTours(data);

      await fetchComments(data.map((tour) => tour.id));
    } catch (error) {
      console.error("Error loading tours:", error.message);
    }
  };
  useEffect(() => {
    loadTourData();
  }, []);

  const handleDeleteComment = async (tourId, commentId) => {
    try {
      await axios.delete(
        `https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours/${tourId}/comments/${commentId}`
      );

      setTours((prevTours) => {
        const updatedTours = { ...prevTours };
        updatedTours[tourId].comments = updatedTours[tourId].comments.filter(
          (comment) => comment.id !== commentId
        );
        return updatedTours;
      });
    } catch (error) {
      console.error("Error deleting comment:", error.message);
    }
  };

  const toggleComments = (tourId) => {
    setCommentsVisibility((prev) => ({
      ...prev,
      [tourId]: !prev[tourId],
    }));
  };

  const deleteTour = async (tourKey) => {
    const sure = window.confirm("Are you sure to delete " + tourKey);
    if (sure) {
      try {
        await axios.delete(
          `https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours/${tourKey}`
        );
        loadTourData();
        alert("tour deleted");
      } catch (error) {
        console.error(`Error deleting tour ${tourKey}:`, error.message);
      }
    } else {
      alert("Okay, tour did'nt deleted");
    }
  };

  const handleEditClick = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSelectedTour((prevTour) => ({
      ...prevTour,
      [name]: name === "content" ? value.replace(/\n/g, "<br />") : value, // Replace newline with <br />
    }));
  };

  const handleCancel = () => {
    setTour({
      name: "",
      image: "",
      content: "<h3>Day 1</h3>Your datas here for Day 1",
      price: "",
      data_price: "",
      filter: "en",
    });

    setSelectedTour(null);

    setIsModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (selectedTour.id) {
        const response = await axios.put(
          `https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours/${selectedTour.id}`,
          selectedTour
        );
        setTours((prevTours) => ({
          ...prevTours,
          [selectedTour.id]: response.data,
        }));
        setTour({
          name: "",
          image: "",
          content: "<h3>Day 1</h3>Your datas here for Day 1",
          price: "",
          data_price: "",
          filter: "en",
        });

        setSelectedTour(null);
        loadTourData();
        setIsModalOpen(false);
      } else {
        const response = await axios.post(
          "https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours",
          selectedTour
        );
        setTours((prevTours) => ({
          ...prevTours,
          [response.data.id]: response.data,
        }));
      }
      setTour({
        name: "",
        image: "",
        content: "<h3>Day 1</h3>Your datas here for Day 1",
        price: "",
        data_price: "",
        filter: "en",
      });

      setSelectedTour(null);
      loadTourData();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error submitting tour:", error);
    }
  };

  return isLoggedIn ? (
    <>
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />

        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <h2>{"Save Tour"}</h2>
              <br />
              <form onSubmit={handleSubmit}>
                <label>Tour Name</label>
                <input
                  type="text"
                  name="name"
                  value={selectedTour ? selectedTour.name : ""}
                  onChange={handleInputChange}
                  placeholder="Tour Name"
                  required
                />

                <label>Image</label>
                <input
                  type="text"
                  name="image"
                  value={selectedTour ? selectedTour.image : ""}
                  onChange={handleInputChange}
                  placeholder="Image URL"
                  required
                />
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  value={selectedTour ? selectedTour.price : ""}
                  onChange={handleInputChange}
                  placeholder="Price"
                  required
                />

                <label>Data and Price</label>
                <textarea
                  name="data_price"
                  value={selectedTour ? selectedTour.data_price : ""}
                  onChange={handleInputChange}
                  placeholder="Data and Price"
                  required
                />
                <label>Content</label>
                <textarea
                  name="content"
                  value={
                    selectedTour
                      ? selectedTour.content?.replace(/<br \/>/g, "\n")
                      : ""
                  }
                  onChange={handleInputChange}
                  placeholder="Tour Content"
                  required
                />

                <label>Filter</label>
                <select
                  name="filter"
                  value={selectedTour?.filter || "en"} // Default to "en" if selectedTour or filter is null
                  onChange={handleInputChange}
                >
                  <option value="en">EN</option>
                  <option value="it">IT</option>
                  <option value="fr">FR</option>
                  <option value="ru">RU</option>
                </select>

                <button type="submit" className="submit-btn">
                  {"Save Tour"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleCancel();
                    setIsModalOpen(false);
                  }}
                  className="close-btn"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
        <center>
          <h1>Welcome to dashboard</h1>
          <br />
        </center>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h1>Tours</h1>
          <button onClick={() => setIsModalOpen(true)} className="add-tour-btn">
            <b>+</b> Add Tour
          </button>
        </div>
        <div className="hbdbhb187gyud">
          {Object.values(tours).map((tour) => (
            <div style={{ width: "100%" }} key={tour.id}>
              <img
                width={"100%"}
                height={"200px"}
                style={{ objectFit: "cover" }}
                src={tour.image}
                alt=""
              />
              <div>
                <i
                  onClick={() => handleEditClick(tour)}
                  class="fa-solid fa-pen-to-square"
                  style={{
                    color: "#28a745",
                    cursor: "pointer",
                    fontSize: "19px",
                    marginRight: "10px",
                  }}
                ></i>
                <i
                  onClick={() => deleteTour(tour.id)}
                  style={{ color: "red", cursor: "pointer", fontSize: "19px" }}
                  className="fa-solid fa-trash"
                ></i>
              </div>
              <h4>{tour.name}</h4>
              <b style={{ color: "red" }}>{tour.price}</b>
              <br />

              <button
                className="toggle_button_admin"
                onClick={() => toggleComments(tour.id)}
                style={{ marginBottom: "10px", cursor: "pointer" }}
              >
                {commentsVisibility[tour.id]
                  ? "Hide Comments"
                  : "Show Comments"}
              </button>
              {commentsVisibility[tour.id] && (
                <div className="commentwedfdf">
                  <h4>Comments:</h4>
                  <ul>
                    {tour.comments?.length > 0 ? (
                      tour.comments.map((comment) => (
                        <li itemType="1" key={comment.id}>
                          <strong
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            {comment.name}
                            <i
                              onClick={() =>
                                handleDeleteComment(tour.id, comment.id)
                              }
                              style={{ color: "red", cursor: "pointer" }}
                              className="fa-solid fa-trash"
                            ></i>
                          </strong>
                          <div className="rating">
                            {"★".repeat(comment.rating) +
                              "☆".repeat(5 - comment.rating)}
                          </div>
                          <p>{comment.comment}</p>

                          <small>
                            Posted on:{" "}
                            {new Date(comment.createdAt).toLocaleString()}
                          </small>
                        </li>
                      ))
                    ) : (
                      <p>No comments yet.</p>
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  ) : (
    <NotFound />
  );
};

export default Admin;
