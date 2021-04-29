// //Events
// //User Events (interaction) and Browder Events (loading, etc...))
// document.addEventListener('load', console.log('hi'));

// //Listening:
// //Higher order functions aka functions that  accept function (callbacks)
// const divText = document.querySelector(".text");
// const print = () => {
//     divText.innerHTML += 'Hi I am onclick from HTML';

// };
// const btn = document.getElementById("more");
// btn.onclick = () => {
//     divText.innerHTMT += "Hi am onclick from JavaScript <br>";
// };

// const reset = () => {
//     header.style.backgroundColor = "white"
// }

// //EventTarget.addEventLister(<namespace>, <callback>)


// // Mouse events:
// // 'click', 'mousecenter', 'mouseleave'
// const header = document.querySelector("h1");
// header.addEventListener("mouseenter", () => {
//     header.style.backgroundColor = "red"
// });
// header.addEventListener("mouseleave", reset)

// //Keyboard Events:
// // 'keydown', 'keyup'
// function keyUp (e) {
//     console.log(e);
//     this.style.backgroundColor = "blue";
//     if(e.code == 'KeyS') alert('You are cool');
// };
// function keyDown (e) {
//     this.style.backgroundColor = "yellow";
// };
// function keyPress (e) {
//     this.style.backgroundColor = "magenta";
// };

// const userInput = document.querySelector('#userInput');
// userInput.addEventListener("keyup",keyUp) //trigerred on last;
// userInput.addEventListener("keydown",keyDown)
// userInput.addEventListener("keypress",keyPress);

// const copy = () => {
//     let text = document.querySelector("#userInput2");
//     text.select();
//     document.execCommand("copy");
// };
// document.querySelector(".copy-btn").addEventListener("click", copy);


//Mini Game
//keycode.info (For key cods on event listener)

//SELECTORS
const mini = document.querySelector(".mini");
const body = document.querySelector("body");
const image = document.querySelector("img");
 

//FUNCTIONS 
let hStandPoint = 0;
let vStandPoint = 0;

//UP FX
function goUp() {
    hStandPoint -= 10;
    mini.style.top = hStandPoint + "px";
    mini.style.transform = "rotate(-90deg)";

}

function goDown() {
    hStandPoint += 10;
    mini.style.top = hStandPoint + "px";
    mini.style.transform = "rotate(90deg)";
}

function goRight() {
    vStandPoint += 10;
    mini.style.left = vStandPoint + "px";
    mini.style.transform = "rotate(0deg)";
}

function goLeft() {
    vStandPoint -= 10;
    mini.style.left = vStandPoint + "px";
    mini.style.transform = "scaleX(-1)";
}


function move (e) {
if (e.code == "KeyW") goUp() ;
if (e.code == "KeyS") goDown();
if (e.code == "KeyA") goLeft();
if (e.code == "KeyD") goRight();
}








//EVENT LISTENERS
body.addEventListener("keypress", move);