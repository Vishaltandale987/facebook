import "./post.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";

import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";
export default function Post({ data }) {

  const [postData, setpostData] = useState();
  const [showComments, setComments] = useState(false);
  const [createComment, setcreateComment] = useState("");
  const [topsection, settopsection] = useState()

  const toast = useToast();

  // time 

  const currentDate = new Date(); // Get the current date and time
  const pastDate = new Date(data.createdAt); // Set the past date and time

  const difference = currentDate.getTime() - pastDate.getTime(); 

  console.log("tiem",difference)

  //like
  let ass = localStorage.getItem('id')
  let idata = {
    userId: ass,
  };

  console.log("assssssssssssssssssssssssssssssssssssssssssssssssss",data)


  const handleLikes = async () => {
    // console.log(data._id,data.userId)
    try {
      const res = await axios.put(
        `http://localhost:8088/post/${data._id}/like`,
        idata
      );
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    handleLikes()
  }, [data.likes.length])
  

  //comments

  const handleCommentPost = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/userslogin", {
      method: "POST",
      body: JSON.stringify(createComment),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err.message);
      });
    toast({
      position: "top",
      title: "You are Successfully Commented on post",
      // description: "done",
      status: "success",
      duration: 4000,
      isClosable: false,
    });
    // console.log(createComment);
  };

  //get post

  const getPost = async () => {
    try {
      const res = await axios("http://localhost:8088/post");
      setpostData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("topsection",topsection)
  useEffect(() => {
    getPost();
  }, []);


  //top  section


  const getTopData = async () => {
    try {
      const res = await axios(`http://localhost:8088/user/${data.userId}`);
      settopsection(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
    getTopData()
  }, []);


  // console.log(postData);

  // useEffect(() => {
  //   setIsLiked(post.likes.includes(currentUser._id));
  // }, [currentUser._id, post.likes]);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/users?userId=${post.userId}`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, [post.userId]);

  // const likeHandler = () => {
  //   try {
  //     axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
  //   } catch (err) {}
  //   setLike(isLiked ? like - 1 : like + 1);
  //   setIsLiked(!isLiked);
  // };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <Link to={`/profile/${user.username}`}> */}
            <img
              className="postProfileImg"
              src="https://bit.ly/3kkJrly"
              alt=""
            />
            {/* </Link> */}
            <span className="postUsername">{data.username}</span>
            <span className="postDate">10 min</span>
          </div>
          <div className="postTopRight">
            <h1>add</h1>
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{data.desc}</span>
          <img className="postImg" src={data.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <p className="likeIcon" onClick={handleLikes}>
              <CheckCircleIcon />
            </p>
            {/* <p className="likeIcon">lik</p> */}
            <span className="postLikeCounter">{data.likes.length}</span>
          </div>
          <div className="postBottomRight">
            <span
              className="postCommentText"
              onClick={() => setComments((v) => !v)}
            >
              comments
            </span>
          </div>
        </div>
        <h1>{createComment}</h1>
        {showComments && (
          <Box as="section" className="comments-container">
            {/* <CommentForm autoFocus={true} onSubmit={onCreateComment} />

            {post?.RootComments != null && post?.RootComments.length > 0 && (
              <CommentsList
                comments={post.RootComments}
                replies={post.Replies}
              />
            )} */}
            <div className="des">
              <input
                placeholder={"What's in your mind " + "?"}
                className="shareInput"
                type="text"
                onChange={(e) => setcreateComment(e.target.value)}
                required
              />

              <button className="shareButton" onClick={handleCommentPost}>
                Post
              </button>
            </div>
          </Box>
        )}
      </div>
    </div>
  );
}
