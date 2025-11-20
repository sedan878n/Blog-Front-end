import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
   </div>
  )
}

function PostsNew() {
  return(
      <div id="posts-index">
        <h1>New Post</h1>
        <h2>How to Be a Good Programmer</h2>
        <img src="https://wallpaperaccess.com/full/314785.jpg"/>
        <p>To become a great programmer,
consistently practice by building projects and solving problems, and focus on mastering the fundamentals. Additionally, cultivate strong soft skills like communication, read and understand others' code, and embrace continuous learning to stay current with the evolving technology landsca</p>
      </div>
  )
}

function PostsIndex(props) {
  return(
      <div id="posts-index">
        <h1>All {props.blogProps.length} Blog Postings</h1>

        {props.blogProps.map((blog) =>(
          <div key={blog.id} className="blogs>">
            <h2>{<blog.tile}</h2>
            <img src={blog.image_url}/>
            <p>Post: {blog.text}</p>
            <button> Read More </button>
          </div>
      ))}
    </div>
  )
        
}


function Footer() {
  return(
    <div>
      <footer>
        <p>Copyright Leon Shimizu Programming. All Rights Reserved. 2025</p>
      </footer>
    </div>
  );
}

function PostsPage() {
  let blog = [
    {
      id: 1,
      title: "Eat Better to Program Better",
      text: "To program better, eat a balanced diet that includes complex carbohydrates for sustained energy, lean proteins for focus, and omega-3 fatty acids and antioxidants for brain health. Staying hydrated by drinking water is crucial, and smart snacking on nuts, fruits, or seeds can prevent energy crashes. Minimizing sugar and highly processed carbs will help maintain consistent focus, while mindful eating and regular meal times prevent overeating and fatigue",
      image: "https://m.media-amazon.com/images/I/314nM14n3iL._SY342_.jpg"
    },

    {
      id: 2,
      title: "Sleep Better to Program Better",
      text: "Getting more and better sleep improves your programming skills by boosting creativity, concentration, and memory consolidation, which leads to faster coding, fewer mistakes, and better problem-solving. To improve your sleep, maintain a consistent schedule, create an ideal sleep environment, and establish healthy habits like avoiding caffeine and screens before bed",
      image: "https://www.bocasay.com/wp-content/uploads/2023/03/Software-Development-for-Better-Sleep-768x768.png"
    },

    {
      id: 3,
      title: "",
      text: "",
      image: ""
    }
  ]
  return(
    <div>
      <PostsNew/>
      <PostsIndex blogProps={blog}/>
    </div>
  )
}

function App() {
  return(
    <div>
      <Header/>
      <PostsPage/>
      <Footer/>
    </div>
  )
}

export default App;
