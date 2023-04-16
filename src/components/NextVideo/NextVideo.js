import "./NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo({ onClickHandler, video }) {
  return (
    <div>
      <Link className="next-video" to={`/${video.id}`}>
        <img
          src={video.image}
          alt="Video-Thumbnail"
          className="next-video__thumbnail"
        />
        <div className="next-video__details">
          <p className="next-video__details-title">{video.title}</p>
          <p className="next-video__details-channel">{video.channel}</p>
        </div>
      </Link>
    </div>
  );
}

export default NextVideo;
