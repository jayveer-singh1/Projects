import React from "react";

function Friend(props){
    let {name, age, image}=props
    return(
        <div style={{border:'2px solid black', width:'300px', margin:'20px', padding:'30px'}}>
            <p style={{backgroundColor:'blue', color:'white'}}>Name - {name}</p>
            <p>Age - {age}</p>
            <img src={image} />
        </div>
    )
}

export default Friend