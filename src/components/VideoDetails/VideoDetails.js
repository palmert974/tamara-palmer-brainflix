import "./VideoDetails.scss";
import iconViews from "../../assets/Images/Icons/views.svg";
import iconLikes from "../../assets/Images/Icons/likes.svg";
import profilePicture from "../../assets/Images/Mohan-muruge.jpg";
import placeHolderPicture from "../../assets/Images/MercrurySquare.png";
import iconComment from "../../assets/Images/Icons/add_comment.svg";
// accept selectedPlant
function VideoDetails({ selectedVideo }) {
  const { title, channel, likes, description, comments, views, duration } =
    selectedVideo;

  const date = new Date(selectedVideo.timestamp);

  return (
    <section className="videoDetails">
      <div className="videoDetails__title">
        <h1 className="videoDetails__videoTitle">{title}</h1>

        <div className="videoDetails__channel">
          <h3 className="videoDetails__channel-author">By {channel}</h3>
          <span className="videoDetails__channel-date">
            {date.toLocaleDateString()}
          </span>
        </div>

        <div className="videoDetails__icons">
          <img src={iconViews} alt="Views-Icon" />
          <span>{views}</span>
          <img src={iconLikes} alt="Likes-Icon" />
          <span>{likes}</span>
        </div>
      </div>

      <hr className="videoDetails__divider"></hr>

      <div className="videoDetails__summary">
        <p>{description}</p>
      </div>

      <div className="videoDetails__conversation">
        <h2 className="videoDetails__title-conversation">
          {comments.length} Comments
        </h2>

        <div className="videoDetails__joinConversation">
          <form
            action=""
            method=""
            className="videoDetails__joinConversation-form"
          >
            <div className="videoDetails__joinConversation-row">
              <div className="videoDetails__joinConversation-picture">
                <img
                  className="videoDetails__joinConversation-profilePicture"
                  src={profilePicture}
                  alt="Profile-Picture"
                />
              </div>
              <div className="videoDetails__joinConversation-details">
                <div className="videoDetails__joinConversation-details-title">
                  <label
                    htmlFor="comment"
                    className="videoDetails__joinConversation-heading"
                  >
                    JOIN THE CONVERSATION
                  </label>
                </div>
                <textarea
                  name="comment"
                  cols="30"
                  rows="5"
                  placeholder="Add a new comment"
                ></textarea>
                <div className="videoDetails__joinConversation-submit-button">
                  <button
                    type="submit"
                    className="videoDetails__joinConversation-submit"
                  >
                    <img src={iconComment} alt="Play-Button" />
                    COMMENT
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="videoDetails__comments">
          {comments.map((comment, i) => {
            return (
              <div className="videoDetails__comments-card" key={i}>
                <div className="videoDetails__comments-profilePicture">
                  <img src={placeHolderPicture} alt="Profile-Picture" />
                </div>
                <div className="videoDetails__comments-details">
                  <div className="videoDetails__comments-nameAndDate">
                    <p className="videoDetails__comments-nameAndDate-name">
                      {comment.name}
                    </p>
                    <p className="videoDetails__comments-nameAndDate-date">
                      {new Date(comment.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="videoDetails__comments-comment">
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
