const openPost = document.getElementById('openPost');
const postBox = document.getElementById('postBox');
const pasteArea = document.getElementById('pasteArea');
const preview = document.getElementById('preview');
let imageData = "";


openPost.onclick = () => postBox.classList.toggle('hidden');


pasteArea.addEventListener('paste', e => {
const item = e.clipboardData.items[0];
if (item.type.indexOf('image') !== -1) {
const file = item.getAsFile();
const reader = new FileReader();
reader.onload = () => {
imageData = reader.result;
preview.src = imageData;
preview.style.display = 'block';
};
reader.readAsDataURL(file);
}
});


function submitPost() {
const title = document.getElementById('title').value;
const content = document.getElementById('content').value;
const posts = JSON.parse(localStorage.getItem('posts') || '[]');
posts.unshift({ title, content, image: imageData });
localStorage.setItem('posts', JSON.stringify(posts));
location.reload();
}


function loadPosts() {
const posts = JSON.parse(localStorage.getItem('posts') || '[]');
const box = document.getElementById('posts');
posts.forEach(p => {
const div = document.createElement('div');
div.className = 'post';
div.innerHTML = `<h3>${p.title}</h3><p>${p.content}</p>`;
if (p.image) div.innerHTML += `<img src="${p.image}">`;
box.appendChild(div);
});
}


loadPosts();
