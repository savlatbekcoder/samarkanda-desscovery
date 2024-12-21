import React, { useEffect, useState } from "react";
import NotFound from "../../components/404";
import axios from "axios";

import "../index.css";

const Admin = () => {
  const [tours, setTours] = useState({});
  const [commentsVisibility, setCommentsVisibility] = useState({});
  const [editId, setEditId] = useState(null); // Track the object being edited
  const [newDataPrice, setNewDataPrice] = useState(""); // Track new value

  const isLoggedIn = window.localStorage.getItem("issssseeeeeeLOOOOOOOgiiin");
  console.log(isLoggedIn);

  useEffect(() => {
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

        // After loading tours, fetch comments for each
        await fetchComments(data.map((tour) => tour.id));
      } catch (error) {
        console.error("Error loading tours:", error.message);
      }
    };

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

  const handleEdit = (id, currentDataPrice) => {
    setEditId(id); // Set the ID of the object being edited
    setNewDataPrice(currentDataPrice); // Pre-fill input with current data_price value
  };

  const handleSave = async (id) => {
    try {
      const updatedTour = { ...tours[id], data_price: newDataPrice };

      // Make sure the endpoint is correct
      await axios.put(
        `https://6763d1cb17ec5852caea1577.mockapi.io/api/v1/tours/${id}`,
        updatedTour
      );

      // Update local state
      setTours((prevTours) => ({
        ...prevTours,
        [id]: updatedTour,
      }));

      setEditId(null); // Exit edit mode
      alert("Data price updated successfully!");
    } catch (error) {
      console.error("Error updating data price:", error.message);
      alert("Failed to update data price.");
    }
  };

  const toggleComments = (tourId) => {
    setCommentsVisibility((prev) => ({
      ...prev,
      [tourId]: !prev[tourId], // Toggle the visibility
    }));
  };

  return isLoggedIn ? (
    <>
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <h1>Welcome to dashboard</h1>
          <br />
        </center>
        <div className="hbdbhb187gyud">
          {Object.values(tours).map((tour) => (
            <div style={{ width: "300px" }} key={tour.id}>
              <img
                width={"100%"}
                height={"200px"}
                style={{ objectFit: "cover" }}
                src={tour.image}
                alt=""
              />
              <h4>{tour.name}</h4>
              <b style={{ color: "red" }}>{tour.price}</b>
              <br />
              <div>
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
              </div>

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
