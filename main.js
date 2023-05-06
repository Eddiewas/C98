var sR = window.webkitSpeechRecognition;
var Webcm = (camera)
var Recognition = new sR();
function start_activate() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
  
}
Recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
    speak();

    }
}
function speak () {
    var synth = window.speechSynthesis;
    speakData = "taking your selfie in 5 seconds";

    var utterthis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
        save();
    },5000);
}
Webcam.set({
    width:350,
    height:300,
    image_format:'png', png_quality:99
});
camera = document.getElementById("camera");

function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captureImage" src="'+data_uri+'">';

    }); 
}
function save() {
    link = document.getElementById("link");
    image = document.getElementById("captureImage").src;
    link.href = image;
    link.click();
    

}