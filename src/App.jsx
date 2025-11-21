import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { PostsPage } from "./Components/PostsPage";
import { Footer } from "./Components/Footer";

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
