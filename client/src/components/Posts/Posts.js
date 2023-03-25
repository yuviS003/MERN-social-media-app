import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log("posts", posts);
  const classes = useStyles();
  return (
    <div>
      Posts
      <Post />
    </div>
  );
};

export default Posts;
