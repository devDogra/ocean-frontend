import { useState } from "react";
import Post from "./components/Post/Post.jsx";
import PostFilter from "./components/PostFilter/PostFilter.jsx";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
// Pages
import Login from "./pages/login/Login.jsx";
import Feed from "./pages/feed/Feed.jsx";
import "./normalize.css";

// import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  const posts = [
    {
      title: "Post1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
      quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
      ipsum deserunt?`,
      author: "Author",
      weight: 123,
    },
    {
      title: "Post2",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
      quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
      ipsum deserunt?`,
      author: "Author",
      weight: 123,
    },
    {
      title: "Post3",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
      quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
      ipsum deserunt?`,
      author: "Author",
      weight: 123,
    },
    {
      title: "Post4",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
      quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
      ipsum deserunt?`,
      author: "Author",
      weight: 123,
    },
    {
      title: "Post5",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
      quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
      ipsum deserunt?`,
      author: "Author",
      weight: 123,
    },
    {
      title: "Post6",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
      quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
      ipsum deserunt?`,
      author: "Author",
      weight: 123,
    },
  ];

  function isOverflown(element) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </>
  );
}

export default App;
