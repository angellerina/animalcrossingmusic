import React from "react";

const LibrarySong = ({ image, name, song, setCurrentSong }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
  };
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={image} alt="cover" />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>K.K Slider</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
