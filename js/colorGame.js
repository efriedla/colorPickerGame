var colors = generateRandomColors(6);
var boxes = document.querySelectorAll(".box");
var pickedColor = pickNewColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var header = document.querySelector("header");
var messageDispaly = document.getElementById("message");
messageDispaly.textContent = "start";
var newGameButton = document.getElementById("newGame");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(3);
    pickedColor = pickNewColor();
    colorDisplay.textContent = pickedColor;
    header.style.backgroundColor = "black";
    restartBasic(3);
    //hide boxes that are not in use
    for (i = 0; i < boxes.length; i++){
        if(colors[i]){
            boxes[i].style.backgroundColor = colors[i];
        }else{
            boxes[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    restartBasic(6);
    //display any boxes that were hidden
    for (i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = colors[i];
        if(boxes[i].style.display = "none"){
            boxes[i].style.display = "block"
        }
    } 
});
//check if correct box was clicked
function ifCorrect(){
    for (i = 0; i < boxes.length; i++){
        //add colors to boxs
        boxes[i].style.backgroundColor = colors[i];
        // add click event listener
        boxes[i].addEventListener("click", function(){
            //grab clicked color box
            var clickedColor = this.style.backgroundColor;
            //compare to pickedColor
            if(clickedColor === pickedColor){        
                header.style.backgroundColor = clickedColor;
                messageDispaly.textContent = "CORRECT ";
                changeColor(clickedColor);
                newGameButton.textContent = "Play Again?";
            }else{
                this.style.backgroundColor = "#232323";
                messageDispaly.textContent = "try again ";
            }
        });
    }
}
ifCorrect();

//change all colors to match correct color
function changeColor(color){
    for(i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = color;
    }
}

//pick a new color
function pickNewColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
//generates random colors
function generateRandomColors(num){
    //make an array
    var arr = [];
    // add num random colors to array
    for(i = 0; i < num; i++){
        //get random color and push to arr
        arr.push(makeColors());
    }
    //return array
    return arr;
}

// makes the actul color for colors
function makeColors(){
    //pick a red 0 - 255
    var red = Math.floor(Math.random() * 256);
    //pick a green
    var green = Math.floor(Math.random() * 256);
    //pick a blue
    var blue = Math.floor(Math.random() * 256);
    return "rgb("+ red +", "+ green +", "+ blue +")";
}
//easy restart basics
function restartBasic(num){
    colors = generateRandomColors(num);
    pickedColor = pickNewColor();
    colorDisplay.textContent = pickedColor;
    header.style.backgroundColor = "rgb(83, 156, 199)";
    newGameButton.textContent = "New Colors";
}
//on click button will restart the game and give new colors
newGameButton.addEventListener("click", function(){
    restartBasic(6);
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    for (i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = colors[i];
        if(boxes[i].style.display = "none"){
            boxes[i].style.display = "block"
        }
    }
    ifCorrect();
});