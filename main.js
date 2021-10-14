difference=0;
leftWristX=0;
rightWristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150)
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("Pose Net Is Initialized");
}

function gotPoses(results) {
    if(results.length>0)
    {
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}

function draw() {
    background("#F1948A");
    document.getElementById("font_size").innerHTML="Font Size Of The Text will Be="+difference+"px";
    textSize(difference);
    fill("#C39BD3");
    text("Sahiti",50,400);
}