import PostFilter from "../../components/PostFilter/PostFilter";
import Post from "../../components/Post/Post";
import Header from "../../components/Header/Header";
import "./Feed.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { LOCAL_STORAGE_JWT_KEY, apiURL } from "../../fakeEnvVars";
import getAxiosRequestConfig from "../../utils/functions/getAxiosRequestConfig";
import useRedirectIfNotLoggedIn from "../../utils/functions/redirectIfNotLoggedIn";


export default function Feed() {
  useRedirectIfNotLoggedIn();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Load all posts
    (async () => {
      const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
      const config = getAxiosRequestConfig(token);
      try {
        const { data: fetchedPosts } = await axios.get(
          apiURL + "/posts",
          config
        );
        console.log(fetchedPosts);
        setPosts(fetchedPosts);
      } catch (err) {
        console.log(err.statusCode);
        console.log(err.message);
      }
    })();

    // Load all votes of a user
    (async () => {
      const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
      const config = getAxiosRequestConfig(token);
      try {
        // GET /votes by default gets a user his own votes
        const { data: currentUserVotes } = await axios.get(apiURL + "/votes", config);
        console.log(currentUserVotes) ; 
      } catch(err) {
        console.log(err.statusCode);
        console.log(err.message);
      }
    })();
  }, []);

  return (
    <div id="app-container">
      <Header />

      <div id="app-board">
        {posts.map((post, index) => {
          return <Post key={index} {...post} />;
        })}
      </div>

      <div id="app-sidebar">
        <PostFilter />
      </div>
    </div>
  );
}
