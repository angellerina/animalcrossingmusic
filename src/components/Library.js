import React from "react";
import LibrarySong from "./LibrarySong";

const Song = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            name={song.name["name-USen"]}
            image={song["image_uri"]}
          />
        ))}
      </div>
    </div>
  );
};

export default Song;
