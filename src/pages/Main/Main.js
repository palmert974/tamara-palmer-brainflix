import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import MainVideo from "../../components/MainVideo/MainVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import NextVideo from "../../components/NextVideo/NextVideo";
import "./Main.scss";

function Main() {
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [videosData, setVideosData] = useState([]);
  const { idFromParams } = useParams();

  const apiKey = "?api_key=9dc66532-85bb-4503-97b9-99f84eeabec3";
  const baseUrl = "https://project-2-api.herokuapp.com/videos";

  let defaultVideoId = null;

  if (videosData.length > 0) {
    if (idFromParams === undefined) {
      defaultVideoId = videosData[0].id;
    } else {
      defaultVideoId = idFromParams;
    }

    console.log(defaultVideoId);
    console.log(idFromParams);
  }

  // `||` evaluates to the first expression if it exists, or it uses the second
  let videoIdToDisplay = idFromParams || defaultVideoId;

  useEffect(() => {
    axios.get(baseUrl + apiKey).then((response) => {
      console.log(response.data);
      setVideosData(response.data);
    });
  }, []);

  useEffect(() => {
    if (defaultVideoId === null) {
      return;
    }
    axios.get(baseUrl + "/" + defaultVideoId + apiKey).then((response) => {
      console.log(response.data);
      setSelectedVideo(response.data);
    });
  }, [defaultVideoId]);

  const filteredVideos = videosData.filter(
    (video) => video.id !== videoIdToDisplay.id
  );
  console.log(filteredVideos);

  return (
    <div className="main">
      <MainVideo selectedVideo={selectedVideo} />
      <div className="main__details">
        {/* <VideoDetails selectedVideo={selectedVideo} /> */}
        <NextVideos filteredVideos={filteredVideos} />
      </div>
    </div>
  );
}

export default Main;
