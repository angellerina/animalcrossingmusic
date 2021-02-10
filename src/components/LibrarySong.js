import React from "react";

const LibrarySong = ({
  image,
  name,
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  //onClick function
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) audioRef.current.play();
  };
  //check if the song is playing
  if (isPlaying) audioRef.current.play();

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
