const api = 'https://api.github.com/repos/catnoname2011/soluuniem/issues';


fetch(api)
.then(res => res.json())
.then(data => {
const box = document.getElementById('posts');
box.innerHTML = '';


data.forEach(issue => {
const div = document.createElement('div');
div.className = 'post';


let body = issue.body || '';
body = body.replace(/\n/g, '<br>');


div.innerHTML = `
<h3>${issue.title}</h3>
<p>${body}</p>
<a target="_blank" href="${issue.html_url}">💬 Bình luận</a>
`;


box.appendChild(div);
});
});
