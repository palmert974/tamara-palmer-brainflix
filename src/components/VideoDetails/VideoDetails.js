import "./VideoDetails.scss";

// accept selectedPlant
function VideoDetails({ selectedVideo }) {
  // Destructure properties from selected plant
  const { title, age, description, avatar, comments } = selectedVideo;
  return (
    <main className="video-details">
      <h1>{title}</h1>
      <img src={avatar} alt="" className="video-details__photo" />
      <p>{age}</p>
      <p>{description}</p>
      <ul>
        {
          // Use ternary to optionally add plant emoji
          comments.map((watering) => (
            <li>
              {watering.date} {watering.withPlantFood ? "🌱" : ""}
            </li>
          ))

          // Or use short circuiting to optionally add plant emoji
          // waterings.map(watering => <li>{watering.date} {watering.withPlantFood && '🌱'}</li>)
        }
      </ul>
    </main>
  );
}

export default VideoDetails;
