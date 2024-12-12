export default function TourCard({ price, image, tour_length, name }) {
  return (
    <>
      <div className="tour-card">
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
