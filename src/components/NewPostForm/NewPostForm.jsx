import "./NewPostForm.css";

export default function NewPostForm() {
    return (
        <form id="new-post-form" action="#">
            
            <div className="form-field">
                <label htmlFor="new-post-title">Title</label>
                <input type="text" id="new-post-title" name="title" />
            </div>
            <div className="form-field">
                <label htmlFor="new-post-content">Content</label>
                <textarea id="new-post-title" name="title" />
            </div>

            <button type="Submit">Create</button>
        </form>
    );
}
