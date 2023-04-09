import "./NextVideo.scss";

function NextVideo({ clickHandler, video }) {
  return (
    <section className="NextVideo">
      <div onClick={() => clickHandler(video.id)}>
        <img
          src={video.image}
          alt="Video-Thumbnail"
          className="NextVideo__thumbnail"
        />
        <div className="NextVideo__details">
          <p className="NextVideo__details-title">{video.title}</p>
          <p className="NextVideo__details-channel">{video.channel}</p>
        </div>
      </div>
    </section>
  );
}

export default NextVideo;
