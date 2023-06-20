$(() => {
  /* -------------------------------------------------------------------------- */
  const apiUrl = "http://localhost:8443";
  /* ---------------------------------- Data ---------------------------------- */
  let posts = [];
  let users = [];
  /* ------------------------------- DOM caching ------------------------------ */
  const main = $("main");
  const btnPosts = $("nav li.posts");
  const btnHome = $("nav li.home");
  const btnUsers = $("nav li.users");
  const btnLogin = $("nav li.login");
  const btnRegister = $("nav li.register");

  const home = $("#home");
  const formRegister = $("#register-form");
  const formLogin = $("#login-form");

  renderHome();

  /* -------------------------------- Utilities ------------------------------- */
  function hideAll() {
    main.children().css("display", "none");
  }

  btnHome.on("click", (e) => {
    e.preventDefault();
    renderHome();
  });
  btnUsers.on("click", (e) => {
    e.preventDefault();
    renderUsers([]);
  });
  btnPosts.on("click", (e) => {
    e.preventDefault();
    renderPosts([]);
  });
  btnLogin.on("click", (e) => {
    e.preventDefault();
    renderLogin();
  });
  btnRegister.on("click", (e) => {
    e.preventDefault();
    renderRegister();
  });
  formRegister.on("submit", (e) => {
    e.preventDefault();
    renderRegister();
  });
  formLogin.on("submit", (e) => {
    e.preventDefault();
    renderLogin();
  });

  /* ------------------------------ Button clicks ----------------------------- */
  /* ---------------------------------- Items --------------------------------- */

  function getPostNode(post) {
    let node = $($("template#post").html());
    node.find(".post-author-username").text(post.author.username);
    node.find(".post-weight").text(post.weight);
    node.find(".post-content").text(post.content);
    return node;
  }

  function getUserNode(user) {
    let node = $($("template#user").html());
    node.find(".username").text(user.username);
    node.find(".email").text(user.email);
    node.find(".password").text(user.password);
    return node;
  }

  /* -------------------------------------------------------------------------- */
  /* ---------------------------------- Pages (Render on DOM) --------------------------------- */
  function renderPosts(posts) {
    hideAll();
    posts.forEach((p) => {
      let node = getPostNode(p);
      main.append(node);
    });
  }

  function renderUsers(users) {
    hideAll();
    users.forEach((u) => {
      let node = getUserNode(u);
      main.append(node);
    });
  }

  // FOr now just show hide. Later, attach detach from DOM?
  function renderRegister() {
    hideAll();
    formRegister.css("display", "block");
  }
  function renderLogin() {
    hideAll();
    formLogin.css("display", "block");
  }

  function renderHome() {
    hideAll();
    home.css("display", "block");
  }
});
