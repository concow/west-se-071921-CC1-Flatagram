const gramUrl = "http://localhost:3000"
const imageUrl ="http://localhost:3000/images"
const commentUrl ="http://localhost:3000/comments"
const imgCont = document.getElementsByClassName("image-container");
//const fgImg = document.getElementById("fg-image src");
//const fgImg2 = document.querySelector("#fg-image").value
const fgLikes = document.getElementById("fg-likes");
const likebutton = document.getElementById("fg-like-button");
const fgComments = document.getElementById("fg-comments");
const fgTitle = document.getElementById("fg-title")

//Properties: id, title, likes, image, comments
fetch(imageUrl)
.then((res) => res.json())
//.then(data => data);
.then((data) => handleGram(data));
//.then((data) => console.log(data) )

function handleGram(data) {
    data.forEach((user) => {
        const fgImg = document.getElementsByTagName("fg-image.src");
        const fgImg2 = document.querySelector(".image-container")
        fgTitle.innerText = user.title 
        fgLikes.innerText = user.likes
        fgComments.innerText.remove
        fgImg.innerHTML
        console.log(fgImg)
        //append image?
        //fgImg.append(fgImg)
    })
}
//1:cont: Replace Comments, Replace Image

//2: Click Event for Likes

//3: Click event for comment submission