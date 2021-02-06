import React from "react";

const Song = (prop) => {
  return (
    <div className="song-container">
      <img src={prop.image} alt="cover" />
      <h2>{prop.name}</h2>
      <h3>K.K Slider</h3>
    </div>
  );
};

export default Song;
