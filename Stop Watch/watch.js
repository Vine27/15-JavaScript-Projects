var seconds = document.getElementById("seconds");
var milliseconds = document.getElementById("seconds");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var sec = 0;
var millisec = 0;
var timeInterVal;

const timer=()=>{
    millisec++;

    if(millisec < 9){
        milliseconds.innerHTML = "0" + millisec;
    }
    if(millsec > 9){
    milliseconds.innerHTML = millsec;
    }
    if(milliseconds > 99){
        sec++;
        seconds.innerHTML = "0" + sec;
        millsec = 0;
        milliseconds.innerHTML = "0" + 0;
    }
    if(sec > 9){
        seconds.innerHTML = sec;
    }
}
//start button
start.addEventListener("click", ()=>{
    timeInterVal = setInterval(timer, 1000) 
});