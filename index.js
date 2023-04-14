const Ham = document.querySelector(".hamHold")
const left = document.querySelector(".left")
const left2 = document.querySelector(".left2")
const right = document.querySelector(".right")
const Home = document.querySelector(".Home")
const Home2 = document.querySelector(".Home2")
const Sub = document.querySelector(".Sub")
const liked = document.querySelector(".liked")
const watched = document.querySelector(".watched")
const Sub2 = document.querySelector(".Sub2")
const videos = document.querySelector(".videos")

Ham.addEventListener("click", function(){
    left.classList.toggle('showLefts')
    right.classList.toggle("widthResize")
})
Home.addEventListener("click", function(){
    Home.classList.add("selected")
    Sub.classList.remove("selected")
    liked.classList.remove("selected")
    watched.classList.remove("selected")
    Home2.classList.remove("selected")
    Sub2.classList.remove("selected")
})
Home2.addEventListener("click", function(){
    Home2.classList.add("selected")
    Sub.classList.remove("selected")
    liked.classList.remove("selected")
    watched.classList.remove("selected")
    Home.classList.remove("selected")
    Sub2.classList.remove("selected")
})
Sub.addEventListener("click", function(){
    Sub.classList.add("selected")
    Home2.classList.remove("selected")
    liked.classList.remove("selected")
    watched.classList.remove("selected")
    Home.classList.remove("selected")
    Sub2.classList.remove("selected")
})
Sub2.addEventListener("click", function(){
    Sub2.classList.add("selected")
    Home2.classList.remove("selected")
    liked.classList.remove("selected")
    watched.classList.remove("selected")
    Home.classList.remove("selected")
    Sub.classList.remove("selected")
})
liked.addEventListener("click", function(){
    liked.classList.add("selected")
    Home2.classList.remove("selected")
    Sub2.classList.remove("selected")
    watched.classList.remove("selected")
    Home.classList.remove("selected")
    Sub.classList.remove("selected")
})
watched.addEventListener("click", function(){
    watched.classList.add("selected")
    Home2.classList.remove("selected")
    Sub2.classList.remove("selected")
    liked.classList.remove("selected")
    Home.classList.remove("selected")
    Sub.classList.remove("selected")
})


const HomeArray= [
    {
        title: "introduction to inclined planes",
        img: `<img class="boxImg" src="/Assets/Image1.PNG" alt="">`,
        user: "the organic chemistry tutor",
        userImg: `<img class="userImage" src="/Assets/Image1.PNG" alt="">`
    },
    {
        title: "learn css position in 9 minutes",
        img: `<img class="boxImg" src="/Assets/Image2.PNG" alt="">`,
        user: "web dev simplified",
        userImg:`<img class="userImage" src="/Assets/Image2.PNG" alt="">`
    },
    {
        title: "understanding electromagnetic radiation",
        img: `<img class="boxImg" src="/Assets/Image3.PNG" alt="">`,
        user: "lesics",
        userImg: `<img class="userImage" src="/Assets/Image3.PNG" alt="">`
    },
    {
        title: "netflix chill gone wrong",
        img: `<img class="boxImg" src="/Assets/Image4.PNG" alt="">`,
        user: "lesics",
        userImg:`<img class="userImage" src="/Assets/Image4.PNG" alt="">`
    },
    {
        title: "learn flexbox the easy way",
        img: `<img class="boxImg" src="/Assets/Image5.PNG" alt="">`,
        user: "kevin powell",
        userImg: `<img class="userImage" src="/Assets/Image5.PNG" alt="">`
    },
    {
        title: "how an AR-15 works",
        img: `<img class="boxImg" src="/Assets/Image6.PNG" alt="">`,
        user: "matt rittman",
        userImg: `<img class="userImage" src="/Assets/Image6.PNG" alt="">`
    },
    {
        title: "see thru jet engine",
        img: `<img class="boxImg" src="/Assets/Image7.PNG" alt="">`,
        user: "warped perception",
        userImg: `<img class="userImage" src="/Assets/Image7.PNG" alt="">`
    }
    ,
    {
        title: "golden gate bridge | the crazy engineering behind it",
        img: `<img class="boxImg" src="/Assets/Image8.PNG" alt="">`,
        user: "warped perception",
        userImg: `<img class="userImage" src="/Assets/Image8.PNG" alt="">`
    }
]
HomeArray.forEach(item => {
    const html = `
        <div class="box">
            <div class="boxImgHold">
                ${item.img}
            </div>
            <div class="content">
                <div class="contentLeft">
                    ${item.userImg}
                </div>
                <div class="contentRight">
                    <p class = "mainTitle"><a href="/WebFiles/newPage.html" class="VideoTitle">${item.title}</a></p>
                    <p class="VideoPoster">${item.user}</p>
                </div>
            </div>
        </div>`
    videos.insertAdjacentHTML("beforeend", html)
    const VideoTitle = document.querySelector(".VideoTitle")
    VideoTitle.addEventListener("click", function(){
        console.log("habeeb")
    })
});
