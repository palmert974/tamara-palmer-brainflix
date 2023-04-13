import React from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import MainVideo from "./components/MainVideo/MainVideo";
import NextVideo from "./components/NextVideo/NextVideo";
import NextVideos from "./components/NextVideos/NextVideos";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="upload" element={<UploadVideo />} />
      </Routes>
    </div>
  );
}

export default App;
