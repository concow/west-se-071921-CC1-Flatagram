//Properties: title, likes, image, comments
const imageUrl = "http://localhost:3000/images/1"
const commentUrl ="http://localhost:3000/comments"
const fgTitle = document.getElementById("fg-title");
const fgImg = document.getElementById("fg-image");
const fgLikes = document.getElementById("fg-likes");
const fgLikeButton = document.getElementById("fg-like-button");
const fgComments = document.getElementById("fg-comments");
const fgCommentForm = document.getElementById("fg-comment-form");

fgCommentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addComment(event.target.comment.value);
    event.target.comment.value = '';
});

fetch(imageUrl)
.then((res) => res.json())
.then(handleGram);
//.then((data) => handleGram(data));

function handleGram(data) {
    fgImg.src = data.image
    fgTitle.innerText = data.title
    setComment(data.comments);
    fgLikeButton.addEventListener('click', () => {
        fgLikes.innerText = `${data.likes++} likes`
    });
}

function setComment(comments) {
    fgComments.innerHTML = "";          //empty comments 
    comments.forEach((comment) => addComment(comment.content));
}

function addComment(comment) {
    const li = document.createElement('li');
    li.innerText = comment;
    fgComments.append(li);
}