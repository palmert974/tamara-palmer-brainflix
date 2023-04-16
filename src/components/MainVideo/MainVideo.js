import "./MainVideo.scss";

function MainVideo({ selectedVideo }) {
  const { video, image } = selectedVideo;
  return (
    <div className="main-video">
      <video
        className="main-video__video"
        src={video}
        poster={image}
        controls
      />
    </div>
  );
}

export default MainVideo;
