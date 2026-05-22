import React, { useRef, useState } from "react";
import "./App.css";

export default function App() {

  // Image upload
  const fileInputRef = useRef();
  const [image, setImage] = useState(null);

  // Like feature
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  // Comment feature
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Like Toggle
  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  // Add Comment
  const addComment = () => {
    if (commentInput.trim() !== "") {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <div className="app">

      <div className="card">

        <h2>Profile</h2>

      
        <div
          className="image-box"
          onClick={() => fileInputRef.current.click()}
        >
          {image ? (
            <img src={image} alt="profile" />
          ) : (
            <p>Click to Upload</p>
          )}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          hidden
        />

   
        <div className="like-section">
          <span
            className={liked ? "heart liked" : "heart"}
            onClick={handleLike}
          >
            ❤️
          </span>
          <p>{likes} Likes</p>
        </div>

    
        <div className="comment-section">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button onClick={addComment}>Post</button>
        </div>

        
        <div className="comments">
          {comments.map((c, index) => (
            <p key={index}>💬 {c}</p>
          ))}
        </div>

      </div>

    </div>
  );
}