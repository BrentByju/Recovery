var noseX = 0;
var noseY = 0

function preload(){
    clown_nose = loadImage('https://pbs.twimg.com/media/C2kDAxCXUAI7U2R.jpg')

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); 
}

function draw(){
    
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 100, 100);
}

function take_snapshot(){
    save('Depressed.png');
}

function modelLoaded(){
    console.log('PoseNet Is Initialised');
}

function gotPoses(results){
    if(results.length>0)
{
    console.log(results);

     X = parseInt(results[0].pose.nose.x);
     Y = parseInt(results[0].pose.nose.y);

     noseX = X - 50;
     noseY = Y - 50;

    console.log(noseX+" and "+noseY);

    
}
}
