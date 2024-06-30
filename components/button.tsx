import React from "react";

interface buttonObj {
    text:string
}


export const Button= (props: buttonObj)=>{

    const text= props.text;

    return(
        <button className="p-3 bg-purple-600 text-white font-bold text-2xl rounded-2xl">
            {text}
        </button>



    )
}