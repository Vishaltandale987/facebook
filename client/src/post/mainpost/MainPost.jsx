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

  useEffect(() => {
    getPost();
  }, []);

  console.log("mainpost",postData)


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
