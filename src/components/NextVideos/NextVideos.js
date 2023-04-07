import NextVideo from "../NextVideo/NextVideo";
function NextVideos({ clickHandler, filteredVideos }) {
  return (
    <nav className="nav">
      {/* map plant array to nav item: pass in plant object and clickhandler */}
      {filteredVideos.map((video) => (
        <NextVideo key={video.id} video={video} clickHandler={clickHandler} />
      ))}
    </nav>
  );
}

export default NextVideos;
