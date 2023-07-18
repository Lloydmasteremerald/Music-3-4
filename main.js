Music1 = "";
Music2 = "";
Cole = 0;
ScoreLeftWrist = "";
function preload()
{
    Music1 = loadSound("music.mp3");
    Music2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(500, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function draw()
{
    image(video, 0, 0, 600, 500);
    fill("#08fa00");
    stroke("#1d00fa");
    if (Cole > 0.2) {
        circle(LeftWristX, LeftwristY, 20);
        song1.stop();
        if(song2_status == false)
        {
          song2.play()
          document.getElementById("song").innerHTML = "Playing - Peter Pan Song"
        }
    }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)

        LeftWristX = results[0].pose.leftWrist.x;
        LeftwristY = results[0].pose.leftWrist.y;
        console.log("LeftwristX " + LeftWristX + " LeftwristY " + LeftwristY);

        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX " + RightWristX + " RightWristY " + RightWristY);
    }
}
