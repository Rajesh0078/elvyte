const barBtn = document.querySelector("#bar") 
const logo = document.getElementById("logo")
const li = document.querySelectorAll("li")
const head = document.querySelector("#head")
const side = document.querySelector("#sidebar")
const mobileBar = document.querySelector("#mobile")
const mobile = document.querySelector(".mobile")
const main = document.querySelector("#main")
const cross = document.querySelector(".cross")



barBtn.onclick = () =>{
    side.classList.toggle("active")
    barBtn.classList.toggle("active")
    logo.classList.toggle("active")
    head.classList.toggle("active")
    li.forEach((e)=>{
        const link = e.childNodes[0]
        link.lastChild.classList.toggle("active")
    })
    
}



mobileBar.onclick = () =>{
    mobile.classList.add("active")
}
cross.onclick = () =>{
    mobile.classList.remove("active")
}