// const loadPosts = async () => {
//     const response = await fetch('http://localhost:3000/u/')
//     const links = await response.json();

//     links.forEach(link => {
//         appendLink(post);
//     });

//     appendLink(link)
// }

// appendLink = (link) => {

//     const paragrafo = postElement.querySelectorAll('p')[0]
//     paragrafo.innerText = link;

//     document.getElementById('timeline').append(postElement);
// }

// window.onload = () => {
//     const btnAddlink = document.getElementById('botao')
//     btnAddlink.onclick = addPost;
//     loadPosts()
// }


async function logLinks() {
    const response = await fetch("http://localhost:3000/u/1");
    const movies = await response.json();
    console.log(movies);
  }
  

var botao = document.getElementById("botao");
botao.addEventListener("click", function() {
    var paragrafo = document.getElementById("paragrafo");
    logLinks();
    paragrafo.textContent = logLinks();
});