import NextVideo from "../NextVideo/NextVideo";
import "./NextVideos.scss";

function NextVideos({ filteredVideos, activeId }) {
  return (
    <nav className="next-videos" aria-label="Next videos">
      <p className="next-videos__heading">NEXT VIDEOS</p>
      {filteredVideos.map((video) => (
        <NextVideo key={video.id} video={video} active={video.id === activeId} />
      ))}
    </nav>
  );
}

export default NextVideos;
