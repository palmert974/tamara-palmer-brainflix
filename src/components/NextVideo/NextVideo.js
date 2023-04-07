function NextVideo({ clickHandler, video }) {
  return (
    <button className="nav__button" onClick={() => clickHandler(video.id)}>
      {video.title}
    </button>
  );
}

export default NextVideo;
