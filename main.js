var x = 0;
var y = 0;
drawCircle = "";
drawRectangle="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){

    
    document.getElementById("status").innerHTML = "System is listening, please speak.";
    recognition.start();
}

recognition.onresult = function(event){
    var content = event.results[0][0].transcript

    document.getElementById("status").innerHTML= "Speech has been recognized as: " + content;

    if (content == "circle"){
        x = Math.floor(Math.random()*800);
        y = Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML = "Circle is being drawn";
        drawCircle="set";
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random()*800);
        y = Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML="Rectangle is being drawn";
        drawRectangle = "set";
    }
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if (drawCircle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML="Circle is drawn";
        drawCircle="";
    }

    if (drawRectangle=="set"){
        width = Math.floor(Math.random()*100);
        height = Math.floor(Math.random()*100);
        if (width != height){
        rect(x, y, width, height);
    }
    else {
        width = width+20;
        rect(x, y, width, height);
    }
    document.getElementById("status").innerHTML="Rectangle has been drawn.";
    drawRectangle="";
    }
}