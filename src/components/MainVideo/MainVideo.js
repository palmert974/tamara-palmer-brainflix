import playButton from "../../assets/Images/Icons/play.svg";
import fullScreenButton from "../../assets/Images/Icons/fullscreen.svg";
import volumeButton from "../../assets/Images/Icons/volume_off.svg";
import "./MainVideo.scss";

function MainVideo({ selectedVideo }) {
  const { video, image } = selectedVideo;
  return (
    <div className="main-video">
      <video
        className="main-video__video"
        src={video}
        poster={image}
        controls
      />
     
    </div>
  );
}

export default MainVideo;
