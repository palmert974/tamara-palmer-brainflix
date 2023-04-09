import playButton from "../../assets/Images/Icons/play.svg";
import fullScreenButton from "../../assets/Images/Icons/fullscreen.svg";
import volumeButton from "../../assets/Images/Icons/volume_off.svg";
import "./MainVideo.scss";

function MainVideo({ selectedVideo }) {
  const { video, image } = selectedVideo;
  return (
    <div className="main-video">
      <video className="main-video__video" src={video} poster={image} />
      <div className="main-video__controls">
        <button
          className="main-video__playpause"
          type="button"
          data-state="play"
        >
          <img src={playButton} alt="Play-Button" />
        </button>
        <div className="main-video__progress">
          <progress
            className="main-video__progressbar"
            value="0"
            min="0"
            max="100"
          ></progress>
          <div className="main-video__progresstime">0:00 / 0:41</div>
        </div>
        <div className="main-video__screen-volume">
          <button className="main-video__fullscreen">
            <img src={fullScreenButton} alt="Play-Button" />
          </button>
          <button className="main-video__volume">
            <img src={volumeButton} alt="Play-Button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainVideo;
