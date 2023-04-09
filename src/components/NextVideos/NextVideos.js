import NextVideo from "../NextVideo/NextVideo";
import "./NextVideos.scss";

function NextVideos({ clickHandler, filteredVideos }) {
  return (
    <nav className="next-videos">
      <p className="next-videos__heading">NEXT VIDEOS</p>
      {/* map plant array to nav item: pass in plant object and clickhandler */}
      {filteredVideos.map((video) => (
        <NextVideo key={video.id} video={video} clickHandler={clickHandler} />
      ))}
    </nav>
  );
}

export default NextVideos;
