import React, { useEffect, useMemo, useState } from "react";

export default function RenderPost({post}) {
    return <div>
        <div>
            <p>{post.username}</p>
            <p>{post.gender}</p>
        </div>
        <div>
        <p>{post.school_year}</p>
            <p>{post.working_time}</p>
            <p>{post.hobby}</p>
            <p>{post.area}</p>
        </div>
    </div>
}