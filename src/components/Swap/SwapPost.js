import React from "react";

export default function SwapPost({post}) {
    return <div className="card cardPost">
        <div className="card-body cardPostDetail p-3">
            <h5 className="card-title">Swap From: {post.area}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Posted by: {post.username}</h6>
            <p className="card-text">Gender: {post.gender}</p>
            <p className="card-text">Hobbies: {post.hobby}</p>
            <p className="card-text">Reason: {post.reason}</p>
            <p className="card-text">Looking for: {post.extra_note}</p>
            {/* <button type="button" className="btn btn-danger likeButton">Danger</button> */}
        </div>
    </div>
}