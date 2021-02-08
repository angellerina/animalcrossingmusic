import React, { useEffect, useState, useRef } from "react";
import "./styles/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App(prop) {
  //Ref
  const audioRef = useRef(null);

  //State
  const [songs, setSongs] = useState();
  const [currentSong, setCurrentSong] = useState();
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: percentage,
      volume: e.target.volume,
    });
  };

  let image;
  let song_name;

  // async function to fetch api data as json and assign it to variables
  async function fetchUrl(url) {
    const res = await fetch(url);
    const json = await res.json();

    // set variables for songs, currentsong, and declare that loading is finished
    setSongs(Object.values(json));
    setCurrentSong(Object.values(json)[0]);
    setLoading(false);
  }

  // calling fetching function for songs on page load
  useEffect(() => {
    const apiURL = `http://acnhapi.com/v1/songs`;
    fetchUrl(apiURL);
  }, []);

  // if all the data has been properly loaded
  if (loading == false) {
    // console.log("data is loaded!");
    image = currentSong["image_uri"];
    song_name = currentSong["name"]["name-USen"];

    for (var i = 0; i < songs.length; i++) {
      songs[i].active = false;
    }

    currentSong.active = true;

    return (
      <div className="App">
        <div className="wave"></div>
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <Song image={image} name={song_name} />
        <Player
          audioRef={audioRef}
          audio={currentSong["music_uri"]}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          setCurrentSong={setCurrentSong}
          currentSong={currentSong}
          songs={songs}
        />
        <Library
          audioRef={audioRef}
          songs={songs}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          libraryStatus={libraryStatus}
        />
        <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef}
          src={currentSong["music_uri"]}
        ></audio>
      </div>
    );
  }

  return (
    // todo: implement a loading screen for when the data isn't loaded yet
    <div className="App">
      <Song image={image} name={song_name} />
    </div>
  );
}

export default App;
