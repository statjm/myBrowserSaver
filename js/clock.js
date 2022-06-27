const h1 = document.querySelector("div.hello:first-child h1")

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);


// function handleTitleClick(){
//     h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick);
