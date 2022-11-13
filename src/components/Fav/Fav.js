import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

export default function Fav ({fav}) {
    console.log(fav);
    return <div className="favExpand">
        <div>♥</div>
        <div className="favList">
        </div>
    </div>
}