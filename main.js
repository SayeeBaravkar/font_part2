function setup()
{
    video = createCapture(VIDEO);
    video.size(450,500);
    video.position(200,75)
    
    canvas = createCanvas(280,280);
    canvas.position(750,75);
   
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
    image(video,0,0,300,300);
    classifier.classify(video, gotResult);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!')
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
        }
}