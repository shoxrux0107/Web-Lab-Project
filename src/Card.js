import React from "react";

const Card = () => (
  <div className="card" style={{ width: "18rem" }}>
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
      className="card-img-top"
      alt="Card image"
    />
    <div className="card-body">
      <h5 className="card-title">FC Barcelona</h5>
      <p className="card-text">
        Barcelona are one of the world's most decorated clubs. Domestically,
        Barcelona has won a record 78 trophies.
      </p>
    </div>
  </div>
);

export default Card;
