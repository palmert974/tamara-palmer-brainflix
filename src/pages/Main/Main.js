import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import MainVideo from "../../components/MainVideo/MainVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import "./Main.scss";

function Main() {
  const [selectedVideo, setSelectedVideo] = useState({ comments: [] });
  const [videosData, setVideosData] = useState([]);
  const { idFromParams } = useParams();

  const baseUrl = process.env.REACT_APP_BASE_URL + "/videos";

  let defaultVideoId = null;

  if (videosData.length > 0) {
    defaultVideoId = idFromParams === undefined ? videosData[0].id : idFromParams;
  }

  // `||` evaluates to the first expression if it exists, or it uses the second
  let videoIdToDisplay = idFromParams || defaultVideoId;

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setVideosData(response.data);
    });
  }, [baseUrl]);

  useEffect(() => {
    if (!defaultVideoId) return;
    axios.get(`${baseUrl}/${defaultVideoId}`).then((response) => {
      setSelectedVideo(response.data);
    });
  }, [baseUrl, defaultVideoId]);

  const filteredVideos = videosData.filter((video) => video.id !== videoIdToDisplay);

  const videoDetails = <VideoDetails selectedVideo={selectedVideo} />;

  return (
    <div className="main">
      <MainVideo selectedVideo={selectedVideo} />
      <div className="main__details">
        {videoDetails}
        <NextVideos filteredVideos={filteredVideos} activeId={videoIdToDisplay} />
      </div>
    </div>
  );
}

export default Main;
