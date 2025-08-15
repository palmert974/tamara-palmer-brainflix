import "./NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo({ video, active }) {
  const className = `next-video${active ? " next-video--active" : ""}`;
  return (
    <div>
      <Link className={className} to={`/${video.id}`} aria-current={active ? "true" : undefined}>
        <img
          src={video.image}
          alt={`Thumbnail for ${video.title}`}
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
