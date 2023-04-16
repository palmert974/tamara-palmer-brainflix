import NextVideo from "../NextVideo/NextVideo";
import "./NextVideos.scss";

function NextVideos({ filteredVideos }) {
  return (
    <nav className="next-videos">
      <p className="next-videos__heading">NEXT VIDEOS</p>
      {filteredVideos.map((video) => (
        <NextVideo key={video.id} video={video} />
      ))}
    </nav>
  );
}

export default NextVideos;
