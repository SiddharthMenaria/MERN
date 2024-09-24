// import React from "react";
import {useEffect} from 'react' 
 
export default function Touchme(props) {
    function Render(){
        useEffect(()=>{
          console.log("this will run only ine time")
      
        },[]);
      } 
      useEffect(()=>{
          console.log("hihihi");
      })
    return (
        <>
        <button>increase</button>
        </>
    );
}
 