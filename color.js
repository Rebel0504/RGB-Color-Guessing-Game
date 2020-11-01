var numColor=null;
var colors=[];
var squares=document.querySelectorAll(".square");
var pickedColor;
var h1=document.querySelector("h1");
var colorDisplay= document.querySelector("#colorDisplay");
var mesDisplay=document.querySelector("#message");
var mode=document.querySelectorAll(".modes");
var res=document.querySelector("#reset");

init();


function init(){
	clear();
	chooseMode();
}

function clear(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.display="none";
	}
}

function chooseMode(){
 for(var i=0; i < mode.length; i++){

	 mode[i].addEventListener("click",function(){
		 mode[0].classList.remove("selected");
		 mode[1].classList.remove("selected");
		 mode[2].classList.remove("selected");
		 this.classList.add("selected");
		 if(this.textContent === "EASY"){
			 numColor=3;
		 } else if(this.textContent === "HARD"){
			 numColor=6;
		 } else if(this.textContent === "EXPERT"){
			numColor=9;
		}
		reset();
	 });
 }
}

function reset(){
	colors=generateColor(numColor);
	pickedColor=pickColor();
	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		} else{
			squares[i].style.display="none";
		}
	}
	colorDisplay.textContent=pickedColor;
	h1.style.backgroundColor="steelblue";
	mesDisplay.textContent="";
	res.textContent="New Colors";
	check();
}

function check(){
	for(var i=0; i<colors.length; i++){
		squares[i].addEventListener("click",function(){
			var clickColor=this.style.backgroundColor;
			if(clickColor === pickedColor)
			{
				mesDisplay.textContent="Correct";
				changeColor(clickColor);
				h1.style.backgroundColor=clickColor;
				res.textContent="Play again ?";
			} else {
				mesDisplay.textContent="Wrong";
				this.style.backgroundColor="#232323";
			}
		});
	}

}

function generateColor(color){
    var arr=[];
    for(var i=0; i < color; i++){
        arr.push(randomColor());
    }
return arr;
}

function randomColor(){
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")" ;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColor(color){
	for(var i=0; i < squares.length; i++ ){
		squares[i].style.backgroundColor= color;
	}
}

res.addEventListener("click",function(){
	reset();
})