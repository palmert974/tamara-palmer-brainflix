import "./VideoDetails.scss";
import iconViews from "../../assets/Images/Icons/views.svg";
import iconLikes from "../../assets/Images/Icons/likes.svg";
import profilePicture from "../../assets/Images/Mohan-muruge.jpg";
import placeHolderPicture from "../../assets/Images/MercrurySquare.png";
import iconComment from "../../assets/Images/Icons/add_comment.svg";

function formatDate(ts) {
  try {
    return new Date(ts).toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch (e) {
    return "";
  }
}

function VideoDetails({ selectedVideo }) {
  if (!selectedVideo) {
    return <></>;
  }

  const { title, channel, likes, description, comments = [], views, timestamp } = selectedVideo;

  return (
    <section className="video-details">
      <div className="video-details__title">
        <h1 className="video-details__video-title">{title}</h1>

        <div className="video-details__channel">
          <h3 className="video-details__channel-author">By {channel}</h3>
          <span className="video-details__channel-date" aria-label={`Uploaded ${formatDate(timestamp)}`}>
            {formatDate(timestamp)}
          </span>
        </div>

        <div className="video-details__icons" aria-label="Video stats">
          <img src={iconViews} alt="Views" />
          <span>{views}</span>
          <img src={iconLikes} alt="Likes" />
          <span>{likes}</span>
        </div>
      </div>

      <hr className="video-details__divider"></hr>

      <div className="video-details__summary">
        <p>{description}</p>
      </div>

      <div className="video-details__conversation">
        <h2 className="video-details__title-conversation">
          {comments.length} Comments
        </h2>

        <div className="video-details__joinconversation">
          <form
            className="video-details__joinconversation-form"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Add a comment"
          >
            <div className="video-details__joinconversation-row">
              <div className="video-details__joinconversation-picture">
                <img
                  className="video-details__joinconversation-profilepicture"
                  src={profilePicture}
                  alt="Your profile"
                />
              </div>
              <div className="video-details__joinconversation-details">
                <div className="video-details__joinconversation-details-title">
                  <label
                    htmlFor="comment"
                    className="video-details__joinconversation-heading"
                  >
                    JOIN THE CONVERSATION
                  </label>
                </div>
                <textarea
                  id="comment"
                  name="comment"
                  cols="30"
                  rows="5"
                  placeholder="Add a new comment"
                  aria-label="Add a new comment"
                ></textarea>
                <div className="video-details__joinconversation-submit-button">
                  <button
                    type="submit"
                    className="video-details__joinconversation-submit"
                    aria-label="Submit comment"
                  >
                    <img src={iconComment} alt="Add comment" />
                    COMMENT
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="video-details__comments">
          {comments.map((comment, i) => {
            return (
              <div className="video-details__comments-card" key={i}>
                <div className="video-details__comments-profilepicture">
                  <img src={placeHolderPicture} alt="Profile" />
                </div>
                <div className="video-details__comments-details">
                  <div className="video-details__comments-nameanddate">
                    <p className="video-details__comments-nameanddate-name">
                      {comment.name}
                    </p>
                    <p className="video-details__comments-nameanddate-date">
                      {formatDate(comment.timestamp)}
                    </p>
                  </div>
                  <p className="video-details__comments-comment">
                    {comment.comment}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VideoDetails;
