$(() => {

const apiUrl = 'http://localhost:8443'

const main = $('main'); 
const btnPosts = $('nav li.posts');
const btnHome = $('nav li.home');
const btnUsers = $('nav li.users');
const btnLogin = $('nav li.login'); 
const btnRegister = $('nav li.register'); 

const formRegister = $('#register-form'); 

formRegister.on('submit', e => {
    const data = $(formRegister).serialize();
    const url = apiUrl + '/users';
    $.post(url, data, createdUser => {
        window.alert(`user: ${createdUser.username} created`); 
    })

})

btnRegister.on('click', e => {
    
})

let x = $('template#post').clone();
console.log(x); 

function getPostNode(post) {
    let node = $($('template#post').html());
    node.find('.post-author-username').text(post.author.username);
    node.find('.post-weight').text(post.weight);
    node.find('.post-content').text(post.content);
    
    return node; 
}


function renderPosts(posts) {
    main.empty();
    posts.forEach(p => {
        let node = getPostNode(p); 
        main.append(node);
    })
}
btnPosts.on('click', e => {
    e.preventDefault();

    $.get(apiUrl + '/posts', data => {
        console.log(data); 

        renderPosts(data);
        // console.log(x.html()); 
    })
})

$.get(apiUrl + '/users', data => {
    console.log(data); 
})




})