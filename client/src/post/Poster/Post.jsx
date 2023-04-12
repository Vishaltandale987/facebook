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
  console.log("aaaaaaaaaaaaaaaa", data._id);

  const [postData, setpostData] = useState();
  const [like, setlike] = useState({
    likecount: 1,
    state: false,
  });
  const [showComments, setComments] = useState(false);
  const [createComment, setcreateComment] = useState("");
  const toast = useToast();

  //like
  let idata = {
    userId: "64359d85b38f8fa5576cfbc5",
  };

  const handleLikes = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8088/post/643683350a3570cf0ce891c7/like`,
        idata
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    getPost();
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
            <span className="postUsername">Vishal Tandale</span>
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
