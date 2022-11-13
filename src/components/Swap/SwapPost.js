import React from "react";

export default function SwapPost({post}) {
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
    return <div className="card cardPost">
        <div className="card-body cardPostDetail p-3">
            <div className="cardHeader">
                <div><h5 className="card-title">Swap From: {post.area}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Posted by: <span><img className="roboImg" src={`https://robohash.org/${post.username}?set=set4`} alt="robot"></img></span> {post.username}</h6></div>
            <div>{timeDifference(post.time)}</div>
            </div>
            
            <hr></hr>
            <p className="card-text">Gender: {post.gender}</p>
            <p className="card-text">Hobbies: {post.hobby}</p>
            <p className="card-text">Reason: {post.reason}</p>
            <p className="card-text">Looking for: {post.extra_note}</p>
            {/* <button type="button" className="btn btn-danger likeButton">Danger</button> */}
        </div>
    </div>
}