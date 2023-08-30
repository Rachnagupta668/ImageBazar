// import React,{useState} from 'react'

const ImageList = ({images}) => {
  return (
    <div className="imgcontainer">

      {
        images &&images.map((value,index)=>{
          console.log(value.urls.small)
          return(
          <img className="img" key={index} src={value.urls.small} alt={value.alt_description}/>
          )
        })

      }
    </div>
  )
}

export default ImageList