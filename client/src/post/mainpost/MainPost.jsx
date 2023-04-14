import React, { useEffect, useState } from 'react'
import CreatePost from '../createPost/CreatePost'
import Post from '../Poster/Post'
import "./mainpost.css"
import axios from 'axios';

function MainPost() {
  const [postData, setpostData] = useState();

  const getPost = async () => {
    try {
      const res = await axios("http://localhost:8088/post");
      setpostData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //top section

  // time 

// Get the current time
const now = new Date();

// Parse the given time string into a Date object
const givenTime = new Date("2023-04-13T18:52:07.689Z");

// Calculate the difference in minutes
const diffInMinutes = Math.floor((givenTime.getTime() - now.getTime()) / (1000 * 60));

 console.log("time" ,diffInMinutes)

 



  useEffect(() => {
    getPost();
  }, []);

  // console.log("mainpost",postData)


  return (
    <div className="feed">
    <div className="feedWrapper">
    <h1>Post</h1>
    <CreatePost/>
    {
      postData?.map((el,index) => {

        return <Post  key={index}  data={el}/>
      }



      )}

      {/* <Post/> */}
    </div>
  </div>
  )
}

export default MainPost
