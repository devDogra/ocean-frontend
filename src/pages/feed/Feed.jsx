import PostFilter from "../../components/PostFilter/PostFilter";
import Post from "../../components/Post/Post";
import Header from "../../components/Header/Header";
import "./Feed.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../../fakeEnvVars";

export default function Feed() {
  const sampleposts = [
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
  // const [posts, setPosts] = useState();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const fetchedPosts = await axios.get(apiURL + "/posts");
  //       console.log(fetchedPosts);
  //       console.log;
  //       // setState(posts)
  //     } catch (err) {
  //       console.log(err.statusCode);
  //       console.log(err.message);
  //     }
  //   })();
  // }, []);
  return (
    <div id="app-container">
      <Header />

      <div id="app-board">
        <Post {...sampleposts[0]} />
        <Post {...sampleposts[1]} />
        <Post {...sampleposts[2]} />
        <Post {...sampleposts[3]} />
        <Post {...sampleposts[4]} />
        <Post {...sampleposts[5]} />
        <Post {...sampleposts[6]} />
        <Post {...sampleposts[7]} />
        <Post {...sampleposts[8]} />
        <Post {...sampleposts[9]} />
      </div>

      <div id="app-sidebar">
        <PostFilter />
      </div>
    </div>
  );
}
