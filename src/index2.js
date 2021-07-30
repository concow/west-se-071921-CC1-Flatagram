const gramUrl = "http://localhost:3000"
const imageUrl = "http://localhost:3000/images"
const imageUrlId = "http://localhost:3000/images/1"
const commentUrl = "http://localhost:3000/comments"
const fgImg = document.getElementById("fg-image");
const fgLikes = document.getElementById("fg-likes");
const fglikeButton = document.getElementById("fg-like-button");
const fgComments = document.getElementById("fg-comments");
const fgTitle = document.getElementById("fg-title")

//Properties: id, title, likes, image, comments
fetch(imageUrlId)
    .then((res) => res.json())
    //.then((data) => handleGram(data));
    .then((data) => handleGram);

fglikeButton.addEventListener('click', () => {
    fgLikes.innerText = `${data.likes++} likes`    //innerText or textContent?

});

function handleGram(data) {
    fgImg.src = data.image
    //console.log(data.image)
    fgTitle.innerText = data.title
    fgLikes.textContent = `${data.likes} likes`
    //  likeButton.addEventListener('click', () => {
    //      fgLikes.innerText = `${data.likes++} likes`    //innerText or textContent?

    // });
}
//3: Click event for comment submission
// fetch(commentUrl)
//     .then((res) => res.json())
//     .then(comments => handleComments(comments));
//     //.then(comments => handleComments);

function handleComments(comments) {
    // fgComments.innerText = '';
    // fgComments.textContent = '';
    fgComments.innerHTML = "";
    comments.forEach((comment) => {
        const li = document.createElement("li");
        li.innerText = comment.content;            //?
        fgComments.append(li);


    })
}