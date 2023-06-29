import { apiURL } from "../../fakeEnvVars";
import { LOCAL_STORAGE_JWT_KEY } from "../../fakeEnvVars";
import jwtDecode from "jwt-decode";
import "./NewPostForm.css";
import axios from "axios";

export default function NewPostForm() {
    async function handleSubmit(event) {
        event.preventDefault(); 
        let form = event.target; 
        let formDataJson = getFormJSONData(form); 

        const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
        const decodedToken = jwtDecode(token);
        const loggedInUserId = decodedToken.sub;

            
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };

        formDataJson.author = loggedInUserId; 
        try {
            await axios.post(apiURL + '/posts', formDataJson, config);
            alert("Post created"); 
        } catch(err) {
            alert("ERROR: Could not create post"); 
        }
    }

    function getFormJSONData(form) {
        const formData = new FormData(form);
        const formDataJson = Object.fromEntries(formData.entries());
        return formDataJson;
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
