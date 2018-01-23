var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
]
var boxes = document.querySelectorAll(".box");
var pickedColor = colors[5];
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var header = document.querySelector("header");
var messageDispaly = document.getElementById("message");
messageDispaly.textContent = "start";
for (i = 0; i < boxes.length; i++){
    //add colors to boxs
    boxes[i].style.backgroundColor = colors[i];
    // add click event listener
    boxes[i].addEventListener("click", function(){
        // alert(" was clicked!");
        //grab clicked color box
        var clickedColor = this.style.backgroundColor;
        //compare to pickedColor
        if(clickedColor === pickedColor){
            // alert("correct");
            
            header.style.backgroundColor = clickedColor;
            header.classList.add("correct");
            messageDispaly.textContent = "CORRECT ";
            changeColor(clickedColor);
        }else{
            // alert("Wrong");
            this.style.backgroundColor = "#232323";
            messageDispaly.textContent = "try again ";
        }
    });
}

//change all colors to match correct color
function changeColor(color){
    for(i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = color;
    }
}