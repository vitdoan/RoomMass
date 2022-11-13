import React, { useEffect, useMemo, useState } from "react";
import RenderPost from "./RenderPost";

export default function FindRoomate() {
    let user_object1 = {
        "username": "a",
        "gender": "Male", //male or female
        school_year: "Freshman", //Freshman/Sorphomore/junior/senior
        working_time: "Late owl", //Late owl/Early bird
        courses: ["CS311", "CS377"],
        hobby: [], //not know yet
        extra_note: "Some text",
        area: "Central"
    }

    let user_object2 = {
        "username": "b",
        "gender" : "Male", //male or female
        school_year: "Freshman", //Freshman/Sorphomore/junior/senior
        working_time: "Late owl", //Late owl/Early bird
        courses: ["CS311", "CS377"],
        hobby: [], //not know yet
        extra_note: "Some text",
        area: "Southwest"
     }
      
    let user_object3 = {
        "username" : "c",
        "gender" : "Female", //male or female
        school_year: "Freshman", //Freshman/Sorphomore/junior/senior
        working_time: "Late owl", //Late owl/Early bird
        courses: ["CS311", "CS377"],
        hobby: [], //not know yet
        extra_note: "Some text",
        area: "Sylvan"
    }

    let user_object4 = {
        "username" : "c",
        "gender" : "Male", //male or female
        school_year: "Freshman", //Freshman/Sorphomore/junior/senior
        working_time: "Late owl", //Late owl/Early bird
        courses: ["CS311", "CS377"],
        hobby: [], //not know yet
        extra_note: "Some text",
        area: "Sylvan"
    }
    
    let user_list = [user_object1, user_object2, user_object3, user_object4];
    let [posts, setPosts] = useState(user_list);
    let [filter, setFilter] = useState('');
    let [isFilter, setIsFilter] = useState(false);

    const filter_func = (attribute, cond) => {
        setFilter(posts.filter(user => user[attribute] === cond));
    }
    
    const handleFilterGender= (event) => {
        const value = event.target.value;
        if(value !== 'Gender'){
            setIsFilter(true);
            filter_func('gender',value);
        }
        else{
            setIsFilter(false);
        }
    }

    const handleFilterArea= (event) => {
        const value = event.target.value;
        if(value !== 'Area'){
            filter_func('area',value);
            setIsFilter(true);
        }
        else{
            setIsFilter(false);
        }
    }


    return <div className="FindRoomate">
        <div className="optionsBar">
            <div className="optionFilter">
                <select className="selectFilter form-select form-select-sm" name="gender" id="gender" onChange={handleFilterGender}>
                    <option value="Gender">Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
                <select className="selectFilter form-select form-select-sm" name="area" id="area" onChange={handleFilterArea}>
                    <option value="Area">Area</option>
                    <option value="North">North</option>
                    <option value="Northeast">Northeast</option>
                    <option value="Southwest">Southwest</option>
                    <option value="Central">Central</option>
                    <option value="CHC">CHC</option>
                    <option value="OHill">OHill</option>
                    <option value="Sylvan">Sylvan</option>
                </select>
            </div>
            <div className="addButton">
                <button type="button" className="btn btn-secondary">Add</button>
            </div>
        </div>
        <div>
            {isFilter? filter.reverse().map(post => <RenderPost post={post}/>)
            : posts.reverse().map(post => <RenderPost post={post}/>)}
        </div>
    </div>;
}