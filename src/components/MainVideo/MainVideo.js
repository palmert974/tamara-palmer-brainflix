function MainVideo({ selectedVideo }) {
  const { video, image } = selectedVideo;
  return (
    <div>
      <video src={video} poster={image} />
    </div>
  );
}

export default MainVideo;
