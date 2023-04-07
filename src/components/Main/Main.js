import React, { useState } from "react";
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import VideoDetails from "../VideoDetails/VideoDetails";
import MainVideo from "../MainVideo/MainVideo";
import NextVideos from "../NextVideos/NextVideos";

// import "../styles/app.css";

function Main() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  // create plantClick function - takes plant id
  // Function to call when a nav button is clicked
  const videoClick = (videoId) => {
    //  finds the plantDetailsData object with that id
    //  and sets selectedPlant to that object
    const foundVideo = videoDetails.find((video) => video.id === videoId);
    setSelectedVideo(foundVideo);
  };

  // create filteredPlants by filtering the current selected plant out of the array
  // filteredPlants is passed to Nav
  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <div className="Core">
      <MainVideo selectedVideo={selectedVideo} />
      <VideoDetails selectedVideo={selectedVideo} />
      <NextVideos filteredVideos={filteredVideos} clickHandler={videoClick} />
    </div>
  );
}

export default Main;
