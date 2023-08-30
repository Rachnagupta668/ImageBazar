import React, { useState,useEffect } from 'react'
import axios from "axios";
//acccess data from .env
console.log("Client_id",process.env.REACT_APP_CLIENT_ID);
const SearchBar = ({setInfo}) => {
    let[search,setSearch]= useState("");
    useEffect(()=>{
      console.log("im working")
      getImage()
    },[])
async function getImage(){
  console.log("get image is alsoworking")
  try{
  let request= await axios.get("https://api.unsplash.com/search/photos",{
    params:{
      query:search ||"nature",
      
    },
    headers:{
      Authorization:`Client-ID ${process.env.REACT_APP_CLIENT_ID}`
    }
  })
  console.log(request.data.results);
  setInfo(request.data.results);
  }
  catch(error){
    console.log("error");
  }
}
  return (

    <div className='container' >
        <input className='input' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='
        Searchbar'/>
        <button className='btn' onClick={getImage}>Search</button>
    </div>
  )
}

export default SearchBar