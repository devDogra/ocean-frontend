import "./Post.css";
import { LOCAL_STORAGE_JWT_KEY, apiURL } from "../../fakeEnvVars";
import axios from "axios";
import getAxiosRequestConfig from "../../utils/functions/getAxiosRequestConfig";
import { useEffect, useState } from "react";

export default function Post(props) {
  const {_id, author, currentUserVote} = props;
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const [weight, setWeight] = useState(props.weight);
  const [userVote, setUserVote] = useState(0);

  useEffect(() => {
    // Get what the currently logged in user's vote is on this post
    // const url = `${apiURL}/votes`
    console.log(props);
    console.log({currentUserVote}); 
    setUserVote(currentUserVote?.value);

  }, [])

  async function handleVote(event, change) {
    const url = `${apiURL}`
    const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
    const config = getAxiosRequestConfig(token);
    // try {
    //   const response = await axios.patch(url, {weight: weight + change}, config);
    //   const { data: { message, updatedPost } } = response;
    //   setWeight(updatedPost.weight);
    // } catch(err) {
    //   alert("Error voting"); 
    //   console.log(err); 
    //   return;
    // }
  }
  async function handleUpvote(event) {
    await handleVote(event, +1);
  }
  async function handleDownvote(event) {
    await handleVote(event, -1);
  }
  return (
    <div className="post" data-post-id={_id} data-author-id={author?._id} data-currentUserVote={ userVote }>
      <h3 className="post-title">{title || "--  No Title -- "}</h3>
      <p className="post-content">{content}</p>
      <div className="post-info">
        <p className="post-author">{author?.username || "unknown"}</p>
        <div className="post-weight-controls">
          <button 
          onClick={ handleUpvote } 
          data-clicked={ userVote == 1 ? true : false }className="post-vote-btn">⬆️</button>

          <p className="post-weight">{weight || "unknown"}</p>

          <button 
          data-clicked={ userVote == -1 ? true : false }
          onClick={ handleDownvote } 
          className="post-vote-btn">⬇️</button>
        </div>

      </div>
    </div>
  );
}
