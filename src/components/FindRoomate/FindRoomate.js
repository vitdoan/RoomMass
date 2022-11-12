import React, { useEffect, useMemo, useState } from "react";
import RenderPost from "./RenderPost";

export default function FindRoomate() {
    let user_object1 = {
        "username": "a",
        "gender": "male", //male or female
        school_year: "Freshman", //Freshman/Sorphomore/junior/senior
        working_time: "Late owl", //Late owl/Early bird
        courses: ["CS311", "CS377"],
        hobby: [], //not know yet
        extra_note: "Some text"
     }
      
    let user_object2 = {
        "username": "b",
        "gender" : "male", //male or female
        school_year: "Freshman", //Freshman/Sorphomore/junior/senior
        working_time: "Late owl", //Late owl/Early bird
        courses: ["CS311", "CS377"],
        hobby: [], //not know yet
        extra_note: "Some text"
     }
      
    let user_object3 = {
        "username" : "c",
        "gender" : "female", //male or female
        school_year: "Freshman", //Freshman/Sorphomore/junior/senior
        working_time: "Late owl", //Late owl/Early bird
        courses: ["CS311", "CS377"],
        hobby: [], //not know yet
        extra_note: "Some text"
    }
    
    let user_list = [user_object1, user_object2, user_object3];
    let [posts, setPosts] = useState(user_list);

    return <div>
        {posts.map(post => <RenderPost post={post}/>)}
    </div>;
}