import "./createPost.css";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { AddIcon, MoonIcon } from "@chakra-ui/icons";
import { Input, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { frameData } from "framer-motion";

let id = localStorage.getItem("id");





const initState = {
  username:"",
  userId: id,
  desc: "",
  img: "",
};



export default function CreatePost() {
  const desc = useRef();
  const [image, setimage] = useState("");
  const [formData, setFormData] = useState(initState);



  
  const toast = useToast();


  //get username

  let getId =async () => {
    try {
      const res = await axios(`http://localhost:8088/user/${id}`);
       
       setFormData({ ...formData, username: res.data.username });
    } catch (error) {
      console.log(error);
    }
  }

useEffect(() => {
  getId()

}, [])
  

 

  // cloudinaty && post


  const submit = async () => {
    
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dd9cmhunr");

    fetch("http://api.cloudinary.com/v1_1/dd9cmhunr/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.url);
        setFormData({ ...formData, img: data.url });
      })
      .catch((err) => {
        console.log(err);
      });


      



  };

  // console.log("data",formData)


  const add = async () => {
    try{
      let res=await axios.post('http://localhost:8088/post',formData)
      console.log(res.data)

      if(res.data){
            toast({
      position: "top",
      title: "You are Successfully created Post",
      // description: "done",
      status: "success",
      duration: 4000,
      isClosable: false,
    });
      }
    }
    catch(err){
  
    console.log(err)
    }
  }

  if(formData.img !== ""){
    add()

  }





  // post


  // const handlePosts = async () => {

  //   try{
  //     let res=await axios.post('http://localhost:8088/post',formData)
  //     console.log(res.data)
  //   }
  //   catch(err){
  
  //   console.log(err)
  //   }

  // }








  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="https://avatars.githubusercontent.com/u/107469218?v=4"
            alt=""
          />

          <div className="shareBottom">
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <AddIcon mr={2} className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  // accept=".png,.jpeg,.jpg"
                  onChange={(e) => setimage(e.target.files[0])}
                />
              </label>
              {image && (
                <div className="shareImgContainer">
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    style={{
                      width: "50px",
                      borderRadius: "50px",
                    }}
                  />
                  <CloseIcon
                    className="shareCancelImg"
                    onClick={() => setimage("")}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="shareHr" />
        <div className="des">
          <Input
            placeholder={"What's in your mind " + "?"}
            className="shareInput"
            type="text"
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
            required
            ref={desc}
          />

          <button className="shareButton" onClick={submit}>
            Post
          </button>


          
        </div>
      </div>
    </div>
  );
}










