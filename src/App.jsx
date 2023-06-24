import { useState } from "react";
import "./normalize.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function isOverflown(element) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }

  return (
    <div id="app-container">
      <header id="app-header">
        <h1 id="app-title">
          <span>Board</span>
        </h1>
      </header>

      <div id="app-board">
        <div className="post">
          <h3 className="post-title">
            I am I am I am hello hello post title Hi
          </h3>
          <p className="post-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
            ipsum deserunt?
          </p>
          <p className="post-author">Author</p>
        </div>
        <div className="post">
          <h3 className="post-title">
            I am I am I am hello hello post title Hi
          </h3>
          <p className="post-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
            ipsum deserunt?
          </p>
          <p className="post-author">Author</p>
        </div>
        <div className="post">
          <h3 className="post-title">
            I am I am I am hello hello post title Hi
          </h3>
          <p className="post-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
            ipsum deserunt? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dignissimos velit cumque vitae earum, odit explicabo, eius
            tempora animi enim cum asperiores? Magni et, alias sed velit earum,
            praesentium accusantium asperiores tempore repudiandae cum animi
            eveniet doloribus reiciendis. Laboriosam consequuntur eligendi
            possimus libero ipsum fuga nemo quia, fugiat mollitia quas sit.
          </p>
          <p className="post-author">Author</p>
        </div>
        <div className="post">
          <h3 className="post-title">
            I am I am I am hello hello post title Hi
          </h3>
          <p className="post-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
            ipsum deserunt? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reprehenderit, aperiam. Laudantium, sint dolore cum a illum
            iusto magni nobis architecto.
          </p>
          <p className="post-author">Author</p>
        </div>
        <div className="post">
          <h3 className="post-title">
            I am I am I am hello hello post title Hi
          </h3>
          <p className="post-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
            ipsum deserunt? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quod totam voluptas libero vel quas reprehenderit illo
            distinctio. Voluptas eum iure ipsum ex repellendus consequatur
            assumenda omnis tempore molestias sed est, blanditiis odio
            doloremque dolores in asperiores rem nesciunt sequi soluta? Tempora
            commodi nulla eveniet doloremque error ipsam ea quisquam sequi
            consectetur alias debitis velit possimus quae et, fugiat ducimus.
            Fuga officia at distinctio nemo eaque. Assumenda culpa magnam
            perferendis delectus dolorum dolorem quisquam impedit autem aliquid,
            unde fuga minus adipisci placeat natus illum perspiciatis debitis
            totam necessitatibus illo nihil beatae sequi voluptatum sunt odio?
            Exercitationem voluptate nihil molestias ab error quisquam omnis sit
            magnam maiores sunt fugit, laborum, cupiditate earum quidem sed
            veniam similique illum nesciunt in excepturi pariatur ullam. Harum
            neque dolore illo, deserunt labore animi nostrum pariatur, suscipit
            laudantium eligendi voluptas voluptatem, architecto voluptatibus
            cupiditate ab aperiam ducimus! Eveniet animi, totam fuga nesciunt
            distinctio veritatis soluta autem, error omnis enim, pariatur
            voluptatum vel deleniti! Officiis nemo sint totam iure incidunt quam
            odit, illo placeat dolor enim eius minima, quis iste quo quibusdam
            neque blanditiis vitae quos sequi suscipit cupiditate est! Quo,
            voluptates labore explicabo doloremque tenetur quia voluptatem
            excepturi temporibus voluptatum, eius, quae earum ducimus commodi
            laborum expedita.
          </p>
          <p className="post-author">Author</p>
        </div>
        <div className="post">
          <h3 className="post-title">
            I am I am I am hello hello post title Hi
          </h3>
          <p className="post-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
            ipsum deserunt?
          </p>
          <p className="post-author">Author</p>
        </div>
        <div className="post">
          <h3 className="post-title">
            I am I am I am hello hello post title Hi
          </h3>
          <p className="post-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            quis distinctio cupiditate nam ipsam ducimus eius, sint accusantium
            ipsum deserunt?
          </p>
          <p className="post-author">Author</p>
        </div>
        <div className="post">
          <h3 className="post-title">
            I am I am I am hello hello post title Hi
          </h3>
          <p className="post-content">
            Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam dolorum exercitationem libero vel natus, inventore quidem
            voluptatum. Distinctio, perspiciatis natus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Non, repellendus? accusantium
            ipsum deserunt?
          </p>
          <p className="post-author">Author</p>
        </div>
        <div className="post">
          <h3 className="post-title">
            I am I am I am hello hello post title Hi
          </h3>
          <p className="post-content">Lorem ipsum</p>
          <p className="post-author">Author</p>
        </div>
      </div>

      <div id="app-sidebar">
        <ul id="app-sidebar-filter-container">
          <li className="app-sidebar-filter">
            <label htmlFor="searchedPost">Search</label>
            <input
              type="text"
              id="searched-post"
              name="searchedPost"
              placeholder="🔎"
            />
          </li>

          <li className="app-sidebar-filter">
            <button>Sort by date</button>
          </li>

          <li className="app-sidebar-filter">
            <button>Sort by weight</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
