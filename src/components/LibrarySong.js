import React from "react";

const LibrarySong = ({
  image,
  name,
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
}) => {
  //onClick function
  const songSelectHandler = () => {
    setCurrentSong(song);

    //check if song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
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
