import { useState } from "react";
import Post from "./components/Post/Post.jsx";
import PostFilter from "./components/PostFilter/PostFilter.jsx";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
// Pages
import Login from "./pages/login/Login.jsx";
import Feed from "./pages/feed/Feed.jsx";
import Register from "./pages/register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import "./normalize.css";

// import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  function isOverflown(element) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
