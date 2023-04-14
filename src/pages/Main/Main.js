import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import MainVideo from "../../components/MainVideo/MainVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import NextVideo from "../../components/NextVideo/NextVideo";
import "./Main.scss";

function Main() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  const [videosData, setVideosData] = useState([]);
  const { idFromParams } = useParams();

  const apiKey = "?api_key=9dc66532-85bb-4503-97b9-99f84eeabec3";
  const baseUrl = "https://project-2-api.herokuapp.com/videos";

  let defaultPlantId = null;

  if (videosData.length > 0) {
    defaultPlantId = videosData[0].id;

    console.log(defaultPlantId);
  }

  // `||` evaluates to the first expression if it exists, or it uses the second
  let plantIdToDisplay = idFromParams || defaultPlantId;

  useEffect(() => {
    axios.get(baseUrl + apiKey).then((response) => {
      console.log(response.data);
      setVideosData(response.data);
    });
  }, []);

  // const filteredPlants = plants.filter(plant => plant.id !== plantIdToDisplay)

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
  const filteredVideos = videosData.filter(
    (video) => video.id !== defaultPlantId.id
  );
  console.log(filteredVideos);

  return (
    <div className="main">
      <MainVideo selectedVideo={selectedVideo} />
      <div className="main__details">
        <VideoDetails selectedVideo={selectedVideo} />
        <NextVideos
          filteredVideos={filteredVideos}
          onClickHandler={videoClick}
        />
      </div>
    </div>
  );
}

export default Main;
