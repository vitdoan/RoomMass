import React from "react";
import "./Dashboard.css";
import {SiHomeadvisor} from 'react-icons/si'

export default function Dashboard({isSignedIn, changeRoute}) {
	return (
        <div>
        <nav class="navbar navbar-light bg-light justify-content-between dashboard">
            <a class="navbar-brand ">RoomMass</a>
            <div> 
            <button class="btn btn-outline-warning my-2 my-sm-0" onClick={()=>changeRoute(3)}><SiHomeadvisor/></button>
            <button class="btn btn-outline-warning my-2 my-sm-0" onClick={()=>changeRoute(5)}>Swap Room</button>
            <button class="btn btn-outline-warning my-2 my-sm-0" onClick={()=>changeRoute(4)}>Find Roommate</button>
            {isSignedIn?<button class="btn btn-outline-warning my-2 my-sm-0" onClick={()=>changeRoute(1)}>Signout</button>:
            <button class="btn btn-outline-warning my-2 my-sm-0" onClick={()=>changeRoute(1)}>Sign In</button>}
            </div>
        </nav>
        </div>
	);
}
