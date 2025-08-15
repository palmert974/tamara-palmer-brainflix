import "./MainVideo.scss";
import fallbackPoster from "../../assets/Images/MercrurySquare.png";

function MainVideo({ selectedVideo }) {
  if (!selectedVideo) return null;
  const { video, image } = selectedVideo;
  const posterSrc = image || fallbackPoster;
  return (
    <div className="main-video">
      <video
        className="main-video__video"
        src={video}
        poster={posterSrc}
        controls
        preload="metadata"
        playsInline
        aria-label="Main video player"
      />
    </div>
  );
}

export default MainVideo;
