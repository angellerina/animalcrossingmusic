import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            key={song.id}
            id={song.id}
            name={song.name["name-USen"]}
            image={song["image_uri"]}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
