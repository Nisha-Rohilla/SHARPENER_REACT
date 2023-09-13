import React from "react";

const Desc = (props)=>{
    return(
        <>
            <h1>{props.title}</h1>
            <h3>{props.localExpenditure}</h3>
        </>
    )
}

export default Desc