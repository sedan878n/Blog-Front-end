import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function PostsPage() {
  const [blog, setPosts] = useState([]);

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
    });
  };

  const handleShow = (blog) => {
    console.log("handleShow", blog);
    setIsPostsShowVisible(true);
    setCurrentPost(blog);
  };

  const handleCreate = (params) => {
    console.log("handleCreate");
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      let copiedPosts = Array.from(blog);
      copiedPosts.push(response.data);
      setPosts([...blog, response.data]);
    });
  };

  const handleUpdate = (post, params) => {
    console.log("handleUpdate");
    axios.patch(`http://localhost:3000/posts/${post.id}.json`, params).then((response) => {
      console.log(response.data);

      setPosts(blog.map((p) => (p.id === response.data.id ? response.data : p)));
      setIsPostsShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <div>
      <PostsNew onCreate={handleCreate} />
      <PostsIndex blogProps={blog} onShow={handleShow} />
      <Modal show={isPostsShowVisible} onClose={() => setIsPostsShowVisible(false)}>
        <PostsShow blog={currentPost} onUpdate={handleUpdate} />
      </Modal>
    </div>
  );
}
