// task 3
let review = [
    {id: 1, name: "Saitama",job: "Oppai Hero",info: "Saitama, from One Punch Man, is a hero who defeats any foe with one punch but struggles with boredom, seeking a real challenge.",img: "/Review carousel/pictures/saitama.jpg"},
    {id: 2, name: "Onizuka",job: "Great Teacher",info: "Eikichi Onizuka, from Great Teacher Onizuka (GTO), is a former biker turned teacher who solves student problems in wild, heartfelt ways. Beneath his roughness lies a big heart and deep dedication to his students.",img: "/Review carousel/pictures/onizuka.jpg" },
    {id: 3, name: "Joseph",job: "Stand User",info: "Joseph Joestar, from JoJo's Bizarre Adventure, is a witty fighter who uses Hamon and his Stand, Hermit Purple, to battle supernatural threats.",img: "/Review carousel/pictures/joseph.jpg" }
]

let img = document.querySelector(".img")
let author = document.querySelector(".author")
let job = document.querySelector(".job")
let info = document.querySelector(".info")

let preBtn = document.querySelector(".pre-button")
let nexBtn = document.querySelector(".next-button")
let randomBtn = document.querySelector(".random")

let currentItem = 0

function showPerson() {

    let item = review[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.info
}

preBtn.addEventListener("click", function() {
    currentItem--
    if (currentItem < 0) {
        currentItem = review.length - 1
    }
    showPerson()
})

nexBtn.addEventListener("click", function () {
    currentItem++
    if (currentItem > review.length -1) {
        currentItem = 0
    }
    showPerson()
});

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * review.length)
    showPerson()
})



