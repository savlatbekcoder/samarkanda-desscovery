import React, { useEffect, useState } from "react";
import NotFound from "../../components/404";
import axios from "axios";

import "../index.css";

const Admin = () => {
  const [tours, setTours] = useState({});
  const [commentsVisibility, setCommentsVisibility] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLoggedIn = window.localStorage.getItem("issssseeeeeeLOOOOOOOgiiin");
  console.log(isLoggedIn);
  const [tour, setTour] = useState({
    name: "",
    image: "",
    content: `<h3>Day 1</h3>
    Your datas here for Day 1`,
    price: "",
    data_price: "",
    filter: "all",
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

  const loadTourData = async () => {
    try {
      const response = await axios.get(
        "https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours"
      );
      const data = response.data;

      const tourData = data.reduce((acc, tour) => {
        const key = tour.id;
        acc[key] = { ...tour, comments: [] }; // Initialize comments
        return acc;
      }, {});

      setTours(tourData);

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

      // Update state to remove the comment
      setTours((prevTours) => {
        const updatedTours = { ...prevTours };
        updatedTours[tourId].comments = updatedTours[tourId].comments.filter(
          (comment) => comment.id !== commentId
        );
        return updatedTours;
      });

      console.log("Comment deleted successfully!");
    } catch (error) {
      console.error("Error deleting comment:", error.message);
    }
  };

  const toggleComments = (tourId) => {
    setCommentsVisibility((prev) => ({
      ...prev,
      [tourId]: !prev[tourId], // Toggle the visibility
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTour((prevTour) => ({
      ...prevTour,
      [name]: name === "content" ? value.replace(/\n/g, "<br />") : value, // Replace newline with <br />
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

  const handleAddTour = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours",
        tour
      );

      if (response.status === 201) {
        console.log("Tour added successfully:", response.data);

        setTour({
          name: "",
          image: "",
          content: `<h3>Day 1</h3>
          Your datas here for Day 1`,
          price: "",
          data_price: "",
          filter: "all",
        });
        setIsModalOpen(false);
      }
      loadTourData();
    } catch (error) {
      console.error("Error adding tour:", error);
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
              <h2>Add New Tour</h2>
              <br />
              <form onSubmit={handleAddTour}>
                <label>Tour Name</label>
                <input
                  type="text"
                  name="name"
                  value={tour.name}
                  onChange={handleInputChange}
                  placeholder="Tour Name"
                  required
                />

                <label>Image</label>
                <input
                  type="text"
                  name="image"
                  value={tour.image}
                  onChange={handleInputChange}
                  placeholder="Image URL"
                  required
                />
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  value={tour.price}
                  onChange={handleInputChange}
                  placeholder="Price"
                  required
                />

                <label>Data and Price</label>
                <textarea
                  name="data_price"
                  value={tour.data_price}
                  onChange={handleInputChange}
                  placeholder="Data and Price"
                  required
                />
                <label>Content</label>
                <textarea
                  name="content"
                  value={tour.content.replace(/<br \/>/g, "\n")}
                  onChange={handleInputChange}
                  placeholder="Tour Content"
                  required
                />

                <label>Filter</label>
                <select
                  name="filter"
                  value={tour.filter}
                  onChange={handleInputChange}
                >
                  <option value="all">All</option>
                  <option value="ru">RU</option>
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                </select>

                <button type="submit" className="submit-btn">
                  Add Tour
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
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
              <i
                onClick={() => deleteTour(tour.id)}
                style={{ color: "red", cursor: "pointer" }}
                className="fa-solid fa-trash"
              ></i>
              <h4>{tour.name}</h4>
              <b style={{ color: "red" }}>{tour.price}</b>
              <br />
              {/* <div>
                <div
                  key={tour.id}
                  style={{
                    marginBottom: "10px",
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  <p>
                    <b>data price:</b>{" "}
                    {editId === tour.id ? (
                      <>
                        <input
                          type="text"
                          value={newDataPrice}
                          onChange={(e) => setNewDataPrice(e.target.value)}
                          style={{ padding: "5px", width: "200px" }}
                        />
                        <button
                          onClick={() => handleSave(tour.id)}
                          style={{
                            padding: "5px 10px",
                            backgroundColor: "#28a745",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                            marginLeft: "10px",
                          }}
                        >
                          Save
                        </button>
                      </>
                    ) : (
                      <>
                        <span
                          style={{
                            wordBreak: "break-word",
                            marginRight: "10px",
                          }}
                        >
                          {tour.data_price}
                        </span>
                        <button
                          onClick={() => handleEdit(tour.id, tour.data_price)}
                          style={{
                            padding: "5px 10px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </div> */}

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
                    {tour.comments.length > 0 ? (
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
