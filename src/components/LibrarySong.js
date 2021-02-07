import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  image,
  name,
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  //onClick function
  const songSelectHandler = () => {
    setCurrentSong(song);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={image} alt="cover" />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>K.K Slider</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
