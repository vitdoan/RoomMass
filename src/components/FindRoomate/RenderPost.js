import React, { useState } from "react";
import "./RenderPost.css";
import {MdEmail} from 'react-icons/md'

export default function RenderPost({ post, user }) {
  let [fav, setFav] = useState([]);

  const handleSetFav = (obj) => {
    
  }

  function timeDifference(time) {
    let now = new Date();
    // time = new Date(time);
    let difference = now - time;
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    if (seconds < 60) {
        return "less than a minute ago";
    } else if (minutes < 60) {
        return minutes + " minutes ago";
    } else if (hours < 24) {
        return hours + " hours ago";
    } else {
        return "over a day ago";
    }
}
  return (
    <div className="row">
      <div className="col-2 card cardPost">
        <div className="card-body cardPostDetail p-3">
        <div className="cardHeader">
          <div>
          <h5> <span><img className="roboImg" src={post.username.length > 0 ?`https://robohash.org/${post.username}?set=set4`: `https://robohash.org/random?set=set4`} alt="robot"></img></span> {post.username.length > 0 ? post.username : "Anonymous"}</h5>
          <h6 className="card-title">Area: {post.area}</h6>
          </div>
          {timeDifference(post.time)}
          </div>
          <hr></hr>
          <p className="card-text">Gender: {post.gender}</p>
          <p className="card-text">Hobby: {post.hobby}</p>
          <p className="card-text">Extra Note: {post.extra_note}</p>
          <div className="contact_btn btn bg-warning">
            <a className = "gmail" href = "https://gmail.com"><MdEmail/></a>
              </div> {post.contact}
        </div>
      </div>
    </div>
  );
}
