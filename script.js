// Mở trang GitHub Issue để đăng bài
function postIssue() {
const title = document.getElementById("title").value;
const content = document.getElementById("content").value;


if (!title || !content) {
alert("Vui lòng nhập đủ tiêu đề và nội dung");
return;
}


const url = `https://github.com/catnoname2011/soluuniem/issues/new?title=${encodeURIComponent(
title
)}&body=${encodeURIComponent(content)}`;


window.open(url, "_blank");
}


// Load các bài viết từ GitHub Issues
fetch("https://api.github.com/repos/catnoname2011/soluuniem/issues")
.then(res => res.json())
.then(data => {
const box = document.getElementById("posts");
box.innerHTML = "";


data.forEach(issue => {
if (issue.pull_request) return;


const div = document.createElement("div");
div.className = "post";


div.innerHTML = `
<h3>${issue.title}</h3>
<div>${issue.body.replace(/\n/g, "<br>")}</div>
`;


box.appendChild(div);
});
})
.catch(() => {
document.getElementById("posts").innerText = "Không tải được bài viết";
});
