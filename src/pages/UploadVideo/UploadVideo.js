import "./UploadVideo.scss";
import videoThumbnail from "../../assets/Images/logo/Upload-video-preview.jpg";
import publishSVG from "../../assets/Images/Icons/publish.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL + "/videos";

function UploadVideo() {
  const [video, setVideo] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    setVideo((val) => ({ ...val, [event.target.name]: event.target.value }));
  };

  const onClickHandler = () => {
    console.log(video);
    alert("Video uploaded!");
    axios
      .post(`${baseUrl}`, video)
      .then((response) => console.log(response.data));
    // .then(getAllVideo);
  };

  return (
    <>
      <hr className="upload__divider"></hr>
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form>
          <div className="upload__videocontainer">
            <label htmlFor="video" className="upload__label">
              VIDEO THUMBNAIL
            </label>
            <img
              className="upload__video"
              src={videoThumbnail}
              alt="Video-Thumbnail"
              name="video"
            ></img>
          </div>

          <div className="upload__textcontainer">
            <label htmlFor="title" className="upload__label">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__videotitle"
              type="text"
              name="title"
              placeholder="Add a title to your video"
              onChange={handleChange}
            ></input>

            <label htmlFor="description" className="upload__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__textarea"
              name="description"
              cols="30"
              rows="5"
              placeholder="Add a description of your video"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="upload__buttons">
            <Link to="/">
              <button
                type="submit"
                className="upload__submit"
                onClick={onClickHandler}
              >
                <img
                  src={publishSVG}
                  alt="upload-icon"
                  className="upload-icon"
                ></img>
                PUBLISH
              </button>
            </Link>
            <button type="submit" className="upload__cancel">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UploadVideo;
