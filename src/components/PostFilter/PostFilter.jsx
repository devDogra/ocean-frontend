import "./PostFilter.css";

export default function PostFilter() {
  return (
    <ul id="app-sidebar-filter-container">
      <li className="app-sidebar-filter">
        <input
          type="text"
          id="searched-post"
          name="searchedPost"
          placeholder="🔎 Search"
        />
      </li>

      <li className="app-sidebar-filter">
        <button>Sort by date</button>
      </li>

      <li className="app-sidebar-filter">
        <button>Sort by weight</button>
      </li>
    </ul>
  );
}
