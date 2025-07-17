import React, { useContext } from "react";
import "../../Photographers/css/component/PostSection.css";
import { MyContext } from "../context/MyContext";
import { FaPlay } from "react-icons/fa";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const PostSection = () => {
  const { post } = useContext(MyContext);

  return (
    <section className="post-section">
        <h2>Instagram Feed</h2>
      <div className="insta-section">
        {post.instagram.map((item, index) => (
          <div className="insta-card" key={index}>
            <div className="insta-pic">
                <img src={item.pic} alt={item.title} />
            </div>
            <div className="insta-footer">
              <span><FaHeart /> 124</span>
              <span><FaComment /> 12</span>
              <span><FaShare /> Share</span>
            </div>
          </div>
        ))}
      </div>


      {/* <h2>Video Highlights</h2> */}
      <div className="video-section">
        {post.video.map((item, index) => (
          <div className="video-card" key={index}>
            <div className="video-wrapper">
              <video src={item.video} controls></video>
              <div className="play-icon"><FaPlay /></div>
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default PostSection;
