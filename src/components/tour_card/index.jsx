import { useNavigate } from "react-router-dom";
export default function TourCard({ price, image, tour_length, name, id }) {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate(`/tours/${id}`)} className="tour-card">
        <div
          className="tour-header"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h3 className="card-price">{price}</h3>
        </div>
        <div className="tour-body">
          <h3>{name}</h3>
          <div className="tour-row">
            <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p>{tour_length} Nights</p>
          </div>
        </div>
      </div>
    </>
  );
}
