import { useState } from "react";
import Post from "./components/Post/Post.jsx";
import PostFilter from "./components/PostFilter/PostFilter.jsx";
import Header from "./components/Header/Header.jsx";
import "./normalize.css";
import "./App.css";

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
    <div id="app-container">
      <Header />

      <div id="app-board">
        <Post {...posts[0]} />
        <Post {...posts[1]} />
        <Post {...posts[2]} />
        <Post {...posts[3]} />
        <Post {...posts[4]} />
        <Post {...posts[5]} />
        <Post {...posts[6]} />
        <Post {...posts[7]} />
        <Post {...posts[8]} />
        <Post {...posts[9]} />
      </div>

      <div id="app-sidebar">
        <PostFilter />
      </div>
    </div>
  );
}

export default App;
