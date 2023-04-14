import "./UploadVideo.scss";
import videoThumbnail from "../../assets/Images/logo/Upload-video-preview.jpg";

function UploadVideo() {
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
            <label htmlFor="videoTitle" className="upload__label">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__videotitle"
              type="text"
              name="videoTitle"
              placeholder="Add a title to your video"
            ></input>

            <label htmlFor="comment" className="upload__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__textarea"
              name="comment"
              cols="30"
              rows="5"
              placeholder="Add a description of your video"
            ></textarea>
          </div>

          <div className="upload__buttons">
            <button type="submit" className="upload__submit">
              PUBLISH
            </button>
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
