import React from "react";
import Friend from "./Friend";
import {Data} from "./Data"

export default function Friends() {
    return (
        <div>
            {Data.map((value,index)=>{
                return <Friend {...value} key={value.id}/>
            })}
        </div>
    )
}

