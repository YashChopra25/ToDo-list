import React from "react";

const Todolist= (props)=>{
     return ( 
        <>
            <div className="liststyle">
            <li >{props.itemval1}</li>
            <i className="fa-solid fa-trash fa-fade" 
                onClick={()=>{
                props.onSelect(props.id)
                console.log(props.onSelect(props.id))
                }
            }>

        </i>
            </div>
       </>
       );
}
export  default Todolist;