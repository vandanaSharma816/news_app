import { useState } from "react";

export function NavBar({setType}){

         const [temp,setTemp]=useState("");


       return (
           <div className="flex  justify-between items-center h-12 w-auto bg-red-400    ">

                  <p className=" font-bold text-2xl  ml-4 " >News-App</p>
                   
                 <div className="flex gap-20">

                        <div className=" flex gap-2 " >

                            <input onChange={(e)=>{
                                  setTemp(e.target.value)
                            }} className=" border  rounded-md p-0.5  " type="text" placeholder="...Search"/>
                            <button  onClick={()=>{
                                   setType(temp);
                            }} className=" border rounded-md w-28 bg-blue-300 shadow-md " >Search</button>

                        </div>

                       <p onClick={()=>{
                            setType("india");
                       }} className=" font-medium  cursor-pointer " >Home</p>
                       <p onClick={()=>{
                            setType("sports");  
                       }} className=" font-medium cursor-pointer" >Sports</p>
                       <p onClick={()=>{
                               setType("politics")
                       }} className=" font-medium cursor-pointer  " >Politics</p>
                       <p onClick={()=>{
                            setType("bollywood")
                       }} className=" font-medium cursor-pointer  " >Bollywood</p>
                       <p onClick={()=>{
                               setType("ipl");
                       }} className=" mr-4 font-medium cursor-pointer " >Ipl</p>
                  </div>
                 
           </div>
       )

           

}