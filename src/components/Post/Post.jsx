import "./Post.css";

export default function Post({ author, _id, content, weight }) {
  return (
    <div className="post" data-post-id={_id}>
      <h3 className="post-title">{"TITLES NOT FETCHED YET"}</h3>
      <p className="post-content">{content}</p>
      <div className="post-info">
        <p className="post-author">{author}</p>
        <p className="post-weight">{weight}</p>
      </div>
    </div>
  );
}
