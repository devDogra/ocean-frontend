import "./Post.css";

export default function Post({ author, _id, content, weight, title }) {
  return (
    <div className="post" data-post-id={_id} data-author-id={author?._id}>
      <h3 className="post-title">{title || "--  No Title -- "}</h3>
      <p className="post-content">{content}</p>
      <div className="post-info">
        <p className="post-author">{author?.username || "unknown"}</p>
        <p className="post-weight">{weight || "unknown"}</p>
      </div>
    </div>
  );
}
