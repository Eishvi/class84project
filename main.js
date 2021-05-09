canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_img="racingtrack.jpeg";
car1_img="car1.jpeg";
car1_width=100;
car1_height=90;
car1_x=10;
car1_y=10;
car2_img="car2.jpeg";
car2_width=100;
car2_height=90;
car2_x=10;
car2_y=110;
function add() {
    background_imgTag=new Image();
    background_imgTag.onload=upload_background;
    background_imgTag.src=background_img;
    car1_imgTag=new Image();
    car1_imgTag.onload=upload_car1;
    car1_imgTag.src="car1.jpeg";
    car2_imgTag=new Image();
    car2_imgTag.onload=upload_car2;
    car2_imgTag.src="car2.jpeg";
}
function upload_background(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function upload_car1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car2_width, car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
var keypress=e.keyCode;
if(keypress=='38'){
    console.log("up");
    car1up();
}
if(keypress=='40'){
    console.log("down");
    car1down();
}
if(keypress=='37'){
    console.log("left");
   car1left();
}
if(keypress=='39'){
    console.log("right");
    car1right();
}

    if(keypress=='87'){
        console.log("up");
        car2up();
    }
    if(keypress=='83'){
        console.log("down");
        car2down();
    }
    if(keypress=='68'){
        console.log("left");
       car2left();
    }
    if(keypress=='65'){
        console.log("right");
        car2right();
    }
}

function car1up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("when up arrow key is pressed, x=" +car1_x+",y=" +car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car1down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("when down arrow key is pressed, x="+car1_x+",y="+car1_y )
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1right(){
    if(car1_x<700){
        car1_x=car1_x+10;
        console.log("when right arrow key is pressed, y="+car1_y+",x="+car1_x )
        upload_background();
        upload_car1();
        upload_car2();
    }
    if(car1_x>=700){
        console.log("Car1_won")
document.getElementById("game_status").innerHTML="Car 1 WON";
    }
    if((car1_x>=700)&&(car2_x>=700)){
        document.getElementById("game_status").innerHTML="Both the cars have reached the finishing line!"
    }
}
function car1left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("when left arrow key is pressed, x="+car1_x+",y="+car1_y )
        upload_background();
        upload_car1();
        upload_car2();
        
    }
}
function car2up(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        console.log("when up arrow key is pressed, x=" +car2_x+",y=" +car2_y);
        upload_background();
        upload_car2();
        upload_car1();
    }
}
function car2down(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        console.log("when down arrow key is pressed, x="+car2_x+",y="+car2_y )
        upload_background();
        upload_car2();
        upload_car1();
    }
}

function car2right(){
    if(car2_x<700){
        car2_x=car2_x+10;
        console.log("when right arrow key is pressed, y="+car2_y+",x="+car2_x )
        upload_background();
        upload_car2();
        upload_car1();
    }
    if(car2_x>=700){
        console.log("Car2_won")
document.getElementById("game_status").innerHTML="Car 2 WON";
    }
    if((car1_x>=700)&&(car2_x>=700)){
        document.getElementById("game_status").innerHTML="Both the cars have reached the finishing line!"
    }
}
function car2left(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("when left arrow key is pressed, x="+car2_x+",y="+car2_y )
        upload_background();
        upload_car2();
        upload_car1();
    }
}
