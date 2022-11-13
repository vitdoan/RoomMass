import React from "react";
import "./Dashboard.css";

export default function Dashboard({isSignedIn, changeRoute}) {
	return (
        <div>
        <nav class="navbar navbar-light bg-light justify-content-between dashboard">
            <a class="navbar-brand ">RoomMass</a>
            <div> 
            <button class="btn btn-outline-warning my-2 my-sm-0" onClick={()=>changeRoute(3)}>Home</button>
            {isSignedIn?<button class="btn btn-outline-warning my-2 my-sm-0" onClick={()=>changeRoute(1)}>Signout</button>:
            <button class="btn btn-outline-warning my-2 my-sm-0" onClick={()=>changeRoute(1)}>SignIn</button>}
            </div>
        </nav>
        </div>
	);
}
