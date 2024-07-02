import React from "react";

interface buttonObj {
    text:string
}


export const Button= (props: buttonObj)=>{

    const text= props.text;

    return(
        <button className="p-3 border-purple-400 border text-purple-400 bg-black hover:bg-purple-500 hover:text-black font-bold  text-2xl rounded-2xl">
            {text}
        </button>



    )
}