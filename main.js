function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
canvas.position(560,150);

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on("pose" , gotResult);
}

function draw() {
    background("grey");
    textSize(diffrence);
    fill("pink");
    text("Hello",50,250);
    document.getElementById("font_size").innerHTML = "Width and Height of the text are " + diffrence + "px";
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotResult(results){
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;

leftWristX = results[0].pose.leftWrist.x;
 rightWristX = results[0].pose.rightWrist.x;
 diffrence = floor(leftWristX - rightWristX);
 console.log("noseX = " + noseX + " noseY = " + noseY);
 console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX);
 console.log("diffrence = " + diffrence);
    }
}