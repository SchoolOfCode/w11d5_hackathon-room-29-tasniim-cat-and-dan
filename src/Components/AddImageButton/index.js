import React from "react";
import {useState} from "react";


export default function AddImageButton() {
const [url, setUrl] = useState("https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg");

function handleClick() {
  setUrl("https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg")
}

  return (
    <div>
    <img src={url}/>
      <button onClick={handleClick}>Add image</button>
    </div>
  );
}


  

  


