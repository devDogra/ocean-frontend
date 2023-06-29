import "./Post.css";

export default function Post({ author, _id, content, weight, title }) {
  return (
    <div className="post" data-post-id={_id} data-author-id={author?._id}>
      <h3 className="post-title">{title || "--  No Title -- "}</h3>
      <p className="post-content">{content}</p>
      <div className="post-info">
        <p className="post-author">{author?.username || "unknown"}</p>
        <div className="post-weight-controls">
          <button className="post-vote-btn">⬆️</button>
          <p className="post-weight">{weight || "unknown"}</p>
          <button className="post-vote-btn">⬇️</button>
        </div>

      </div>
    </div>
  );
}
