import React from 'react'
import CreatePost from '../createPost/CreatePost'
import Post from '../Poster/Post'
import "./mainpost.css"

function MainPost() {
  return (
    <div className="feed">
    <div className="feedWrapper">
    <h1>Post</h1>
    <CreatePost/>
    <Post/>
    </div>
  </div>
  )
}

export default MainPost
