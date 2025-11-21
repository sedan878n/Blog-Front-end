import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from 'react';

export function PostsPage() {

  const [blog, setPosts] = useState ([])
  

  const handleIndex = () =>{
    axios.get("http://localhost:3000/posts.json").then 
    ((response) => {
      setPosts(response.data);
   })
  }
   
 useEffect(handleIndex, []);

  return (
    <div>
      <PostsNew />
      <PostsIndex blogProps={blog} />
    </div>
  );
}
