import React from "react";
import "./Dashboard.css";

export default function Dashboard({changeRoute}) {
	return (
        <div>
        <nav class="navbar navbar-light bg-light justify-content-between dashboard">
            <a class="navbar-brand ">RoomMass</a>
            <div>   
            <button class="btn btn-outline-warning my-2 my-sm-0" onClick={()=>changeRoute(3)}>Home</button>
            <button class="btn btn-outline-warning my-2 my-sm-0" onClick={()=>changeRoute(1)}>Signout</button>
            </div>
        </nav>
        </div>
	);
}
