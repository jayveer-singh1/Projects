import React from "react"
import Friend from './Friend'
import {data} from './Data'

function Friends (){
    return(
        <div>
            <Friend name={data[0].name} age={data[0].age} image={data[0].image}/>
            <Friend name={data[1].name} age={data[1].age} image={data[1].image}/>
            <Friend name={data[2].name} age={data[2].age} image={data[2].image}/>
            <Friend name={data[3].name} age={data[3].age} image={data[3].image}/>
            <Friend name={data[4].name} age={data[4].age} image={data[4].image}/>
        </div>
    )
}
export default Friends