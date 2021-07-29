const gramUrl = "http://localhost:3000"
const imageUrl ="http://localhost:3000/images"
const commentUrl ="http://localhost:3000/comments"
const imgCont = document.getElementsByClassName("image-container");
const fgImg = document.getElementById("fg-image");
//const fgImg2 = document.querySelector("#fg-image").value
const fgLikes = document.getElementById("fg-likes");
const likebutton = document.getElementById("fg-like-button");
const fgComments = document.getElementById("fg-comments");
const fgTitle = document.getElementById("fg-title")

//Properties: id, title, likes, image, comments
fetch(imageUrl)
.then((res) => res.json())
.then((data) => handleGram(data));

function handleGram(data) {
    data.forEach((user) => {
        console.log(fgImg.src)
        fgTitle.innerText = user.title 
        fgLikes.textContent = user.likes
       // fgComments.innerHTML = ''           //removes comments
        //console.log(user.likes)

        //fgComments.remove() Removed wrong container
        //fgImg.innerHTML
        //append image?
    })
}
//1: Cont: Replace Comments, Replace Image

//2: Click Event for Likes

//3: Click event for comment submission
fetch(commentUrl)
.then((res) => res.json())
.then(comments => handleComments(comments));
//.then(comments => handleComments);

function handleComments(comments) {
    console.log(comments)
}