import { apiURL } from "../../fakeEnvVars";
import { LOCAL_STORAGE_JWT_KEY } from "../../fakeEnvVars";
import jwtDecode from "jwt-decode";
import "./NewPostForm.css";
import axios from "axios";
import getAxiosRequestConfig from "../../utils/functions/getAxiosRequestConfig";
import getLoggedInUserIdFromJWT from "../../utils/functions/getLoggedInUserIdFromJWT";
import getFormJSONData from "../../utils/functions/getFormJSONData";
// import { debounce } from "lodash";
import debounce from "lodash/debounce"; 
import { throttle } from "lodash";

export default function NewPostForm() {

    async function handleSubmit(event) {
        event.preventDefault(); 

        const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
        const loggedInUserId = getLoggedInUserIdFromJWT(token);
        const config = getAxiosRequestConfig(token);

        let form = event.target; 
        let formDataJson = getFormJSONData(form); 
        formDataJson.author = loggedInUserId; 
        console.log({formDataJson}); 
        console.log(extractHashtags(formDataJson.content)); 

        try {
            // await axios.post(apiURL + '/posts', formDataJson, config);
            alert("Post created"); 
        } catch(err) {
            alert("ERROR: Could not create post"); 
        }
    }
    
    function extractHashtags(content) {
        const hashtagRegex = new RegExp("#+[a-zA-Z0-9(_)]{1,}", "g");
        const tags = content.match(hashtagRegex);
        return tags; 
    }


    return (
        <form id="new-post-form" action="#"  onSubmit={handleSubmit}>
            
            <div className="form-field">
                <label htmlFor="new-post-title">Title</label>
                <input type="text" id="new-post-title" name="title" />
            </div>
            <div className="form-field">
                <label htmlFor="new-post-content">Content</label>
                <textarea id="new-post-title" name="content" />
            </div>

            <button type="Submit">Create</button>
        </form>
    );
}
