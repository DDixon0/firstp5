let b1x = 40;
let b1y = 450;
let b2x = 100;
let b2y = 450;
let radius = 15;
let b3x = 160;
let b3y = 450;

let red = 70
let green = 170
let blue = 200

let circle = false;
let worm = false;
let square = false;

let currentXSize = 15;
let currentYSize = 15;

const initialSize = currentXSize;


function setup(){
createCanvas(500,500);



}

function draw(){
rectMode(CENTER);
ellipseMode(RADIUS);
   
    

button1();
button2();
button3();

}

function button1(){
    fill(255,0,0);
    ellipse(b1x,b1y,radius,radius);
    
    
};



function button2(){
    fill(0,255, 0);
    ellipse(b2x,b2y,radius,radius);
    
};

function button3(){
    fill(0,0, 255);
    ellipse(b3x,b3y,radius,radius);
    
};


//COLOR FUNCTIONS

function colorRed(){
    red = 255;
    green = 0;
    blue = 0;
    };    
function colorGreen(){
       red = 0;
       green = 255;
       blue = 0;    
    };
    
function colorBlue(){
       red = 0;  
       green = 0;
       blue = 255; 
    };
    
//SHape stuff
function makeBigger()
{
   size *= 1.5;    
}

function makeSmaller()
{
   size *= .5;
}

function makeIntoOriginalSize()
{

   currentXSize = initialSize;
   currentYSize = initialSize;
}




//Actions

function mouseClicked(){

    //button 1
    let a = int(dist(mouseX, mouseY, b1x, b1y));
    if (a < radius){
     //call function
    
     colorRed();
     
     
    }


    //button2
    let b = int(dist(mouseX, mouseY, b2x, b2y));
    if (b < radius){
    //call function    
    
    colorGreen();
    }


    //button3
    let c = int(dist(mouseX, mouseY, b3x, b3y));
    if (c < radius){
    //call function    
    
    colorBlue();
    }


};


function mouseDragged() {
    stroke(red,green,blue);
    fill(red,green,blue);

        if(keyCode === 49 || circle)
        {

            circle = true;
            worm = false;
            square = false;
            ellipse(mouseX, mouseY, currentXSize, currentYSize);
        }
        else if(keyCode === 50|| square)
        {
            square =true;
            circle = false;
            worm = false;
            rect(mouseX, mouseY, currentXSize, currentYSize);
        }        
        else if(keyCode === 51 || worm)
        {
            worm = true;
            square = false;
            circle = false;
            line(pmouseX,pmouseY,mouseX, mouseY);;
        }
    
  }


  