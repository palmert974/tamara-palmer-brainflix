import "./NextVideo.scss";

function NextVideo({ onClickHandler, video }) {
  return (
    <div className="next-video" onClick={() => onClickHandler(video.id)}>
      <img
        src={video.image}
        alt="Video-Thumbnail"
        className="next-video__thumbnail"
      />
      <div className="next-video__details">
        <p className="next-video__details-title">{video.title}</p>
        <p className="next-video__details-channel">{video.channel}</p>
      </div>
    </div>
  );
}

export default NextVideo;
