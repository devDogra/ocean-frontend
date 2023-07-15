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
  const [postIdToVoteMap, setPostIdToVoteMap] = useState(new Map());

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

    // Load all votes of a user and map: postid => vote, so we can for every post pass the user's vote associated with that post (if it exists) to the post component
    (async () => {
      const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
      const config = getAxiosRequestConfig(token);
      try {
        // GET /votes by default gets a user his own votes
        const { data: currentUserVotes } = await axios.get(apiURL + "/votes", config);
        console.log(currentUserVotes) ; 

        const tempMap = new Map();
        currentUserVotes.forEach(vote => {
          tempMap.set(vote.post, vote);
        })
        console.log(tempMap); 
        setPostIdToVoteMap(new Map(tempMap));
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
          const currentUserVote = postIdToVoteMap.get(post._id);
          const postProps = {...post, currentUserVote}
          return <Post key={index} {...postProps} />;
        })}
      </div>

      <div id="app-sidebar">
        <PostFilter />
      </div>
    </div>
  );
}
