import "./Post.css";
import { LOCAL_STORAGE_JWT_KEY, apiURL } from "../../fakeEnvVars";
import axios from "axios";
import getAxiosRequestConfig from "../../utils/functions/getAxiosRequestConfig";
import { useEffect, useRef, useState } from "react";
import getLoggedInUserIdFromJWT from "../../utils/functions/getLoggedInUserIdFromJWT";
import parseISOString from "../../utils/functions/parseISOString";
import trashIcon from "./trashIcon.svg"; 
import trashIconHover from "./trashIconHover.svg"; 
import HoverIcon from "../HoverIcon/HoverIcon";
import editIcon from "./editIcon.svg";
import editIconHover from "./editIconHover.svg";
import applyEditIcon from "./applyEditIcon.svg"; 
import applyEditHoverIcon from "./applyEditHoverIcon.svg"; 


export default function Post(props) {
  const {_id, author, currentUserVote, onDelete, tags, createdAt} = props;
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const [updatedAt, setUpdatedAt] = useState(props.updatedAt);
  const [weight, setWeight] = useState(props.weight);
  const [userVote, setUserVote] = useState();
  const [editBoxOpened, setEditBoxOpened] = useState(false); 


  const titleTagsParaRef = useRef(null); 
  const editBoxTextareaRef = useRef(null);

  useEffect(() => {
    // Get what the currently logged in user's vote is on this post
    // const url = `${apiURL}/votes`
    console.log(props);
    console.log(props.updatedAt); 
    console.log({currentUserVote}); 
    console.log({...currentUserVote}); 
    setUserVote({...currentUserVote });
    console.log("----init----"); 
    console.log(userVote); 

  }, [])

  /* ------------------------------ Voting --------------------------------- */
  function noUserVote() {
    return Object.keys(userVote).length === 0; 
  }

  async function handleUpvote(event) {
    await handleVote(event, +1);
  }

  async function handleDownvote(event) {
    await handleVote(event, -1); 
  }

  async function handleVote(event, value) {
    console.log({userVote}); 
    alert("HI"); 
    const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
    const loggedInUserId = getLoggedInUserIdFromJWT(token);
    const config = getAxiosRequestConfig(token);

    if (noUserVote()) {
      // Do up/downnvote
      console.log("CREATING VOTE"); 
      const vote = { user: loggedInUserId, post: _id, value};
      console.log(vote);

      try {
        console.log(apiURL + "/votes"); 
        console.log(vote); 
        const res = await axios.post(apiURL + "/votes", vote, config);
        const createdVote = res.data.vote; 

        // console.log(res); 
        // console.log({createdVote}); 
        // console.log(res.data.vote); 
        setWeight(weight => weight + createdVote.value); 

        setUserVote(userVote => ({...createdVote}));
        console.log({userVote}); 
      } catch(err) {
        console.log(err.message); 
        alert("Error voting"); 
        return; 
      }
    }
    else if (userVote?.value == -value) {
      // Switch vote if user's vote is currently opposite of the value we clicked on
      console.log("TRYNA SWITCH"); 
      console.log({userVote});
      try {
        console.log(apiURL + "/votes/" + userVote?._id); 
        console.log({value}); 
        const res =  await axios.put(apiURL + "/votes/" + userVote._id, { value }, config);
        console.log(res);
        // setUserVote({...userVote, value});
        setUserVote(userVote => ({...userVote, value}));
        setWeight(weight => weight -  2 * userVote.value); 

        console.log({userVote}); 


      } catch(err) {
        alert("Error voting"); 
        return; 
      }
    } 
    else if (userVote?.value == value) {
      // Remove vote
      console.log("TRYNA REMOVE"); 
      // API DELETE DOES NOT EXIST YET
      const res = await axios.delete(apiURL + "/votes/" + userVote._id, config);
      console.log(res); 
      // Because 0 => No vote on this post 
      // setUserVote(undefined); 
      setWeight(weight => weight - userVote.value)
      setUserVote(userVote => ({}));
      console.log({userVote}); 


    }

  }
  
 

  function extractHashtags(content) {
      const hashtagRegex = new RegExp("#+[a-zA-Z0-9(_)]{1,}", "g");
      const tags = content.match(hashtagRegex)?.map(tag => tag.slice(1));
      return tags || []; 
  }

  /* ------------------------------- Editing -------------------------------- */
  async function applyEdit() {
    const editedPost = await editPost();
    
    const dateString = parseISOString(editedPost.updatedAt);
    const newUpdatedAt = new Date(dateString).toISOString();

    setContent(editedPost.content);
    setUpdatedAt(newUpdatedAt); 

    toggleEditBox(); 

  }


  function toggleEditBox() {
    setEditBoxOpened(!editBoxOpened);
  }

  function getPrettyDateTime(DateISOString) {
    const date = new Date(DateISOString);
    
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric' }; 
    
    const prettyDateString = (date.toLocaleString("en-US", dateOptions)) 
    const prettyTimeString = (date.toLocaleTimeString("en-US", timeOptions)) 

    const prettyDateTimeString = `${prettyDateString}, ${prettyTimeString}`
    return prettyDateTimeString;  
  }

  /* -------------------------------- API CALLS -----------------------------*/
  async function deletePost() {
    console.log("DELETING POST ===> ....."); 
    console.log(_id); 

    const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
    const loggedInUserId = getLoggedInUserIdFromJWT(token);
    const config = getAxiosRequestConfig(token);


    const postToDeleteUrl = apiURL + "/posts/" + _id; 
      try {
        const res = await axios.delete(postToDeleteUrl, config);
        // console.log({deletionResponse: res}); 
        onDelete(); 
        alert("Post deleted"); 
      } catch(err) {
        console.log(err); 
        alert("Error deleting post"); 
      }
  }

  async function editPost(event) {
    const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
    const loggedInUserId = getLoggedInUserIdFromJWT(token);
    const config = getAxiosRequestConfig(token);

    
    const newContent = editBoxTextareaRef.current.value; 
    const newTags = extractHashtags(newContent); 

    const editedPostData = {
      content: newContent, 
      tags: newTags,
      updatedAt: (new Date()).toISOString(),
    }
    
    console.log({editedPostData}); 

    const url = `${apiURL}/posts/${_id}`;
    try {
        const { data: { updatedPost }} = await axios.patch(url, editedPostData, config);
        alert("Post edited"); 
        return updatedPost;
    } catch(err) {
        alert("ERROR: Could not edit post"); 
    }

  }

  /* -------------------------------- JSX ---------------------------------- */

  return (
    <div className="post" data-post-id={_id} data-author-id={author?._id} data-currentUserVote={ userVote?._id }>

      <header className="post-header">
        
        <h3 className="post-title">
          <span 
            onMouseEnter={() => titleTagsParaRef.current.classList.add("show") } 
            onMouseLeave={() => titleTagsParaRef.current.classList.remove("show") }
            className="post-title-tags-icon">
              #
            </span>
 
          {title || "--  No Title -- "}
        </h3>
  
        {
          props.authorIsLoggedInUser && 
          <div className="post-control-icons-container">
            {
              editBoxOpened && 
              <HoverIcon  iconPath={applyEditIcon} hoverIconPath={applyEditHoverIcon} onClick={applyEdit}/>
            }

            <HoverIcon iconPath={editIcon} hoverIconPath={editIconHover} onClick={toggleEditBox}/>

            <HoverIcon iconPath={trashIcon} hoverIconPath={trashIconHover} onClick={deletePost}/>
            

          </div>
        }

      </header>
        <p ref={titleTagsParaRef} className="post-title-tags">
            {
              tags.map(tag => {
                return <span className="tag-span">{`#${tag}`}</span>
              })
            }
        </p>


      <p className="post-content">
        { editBoxOpened ? 
            <textarea ref={editBoxTextareaRef} className="post-content-edit-box" type="text" placeholder="editbox" /> : 
            content
        }
      </p>
      <div className="post-info">
        <div className="post-authorship-info">
          <p className="post-author">{author?.username || "unknown"}</p>
          {
            updatedAt && 
            <p className="post-last-edited">
              {`last edited at ${getPrettyDateTime(updatedAt)}`}
            </p>
          }
        </div>
        <div className="post-weight-controls">
          <button 
          onClick={ handleUpvote } 
          data-clicked={ userVote?.value == 1 ? true : false }className="post-vote-btn">⬆️</button>

          <p className="post-weight">{weight != null ? weight : "unknown"}</p>

          <button 
          data-clicked={ userVote?.value == -1 ? true : false }
          onClick={ handleDownvote } 
          className="post-vote-btn">⬇️</button>
        </div>

      </div>
    </div>
  );
}
