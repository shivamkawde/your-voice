
let microPhoen = document.querySelector("#microPhoen");
let stopMic = document.querySelector("#stopMic");
let message = document.querySelector("#mez");
let textBox = document.querySelector("#textBox");
let clear = document.querySelector("#clear");
let recognition = new webkitSpeechRecognition();


recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

let content = "";

let shows = false
if (shows == false) {
    message.innerHTML = "click on"
}


recognition.onresult = function () {

    let data = event.resultIndex;
    let transcript = event.results[data][0].transcript
    content = content + transcript
    textBox.innerHTML = content
    console.log(content);

}

recognition.continuous = false
microPhoen.addEventListener("click", function (e) {
    if (content.length) {
        content = content + " ";
    }
    recognition.start();
    message.innerHTML = "microphoen started"
})
stopMic.addEventListener("click", function (e) {
    recognition.stop();
    message.innerHTML = "stoped microphoen"
})




clear.addEventListener("click", function (e) {
    textBox.innerHTML = "";
    content=""
})



let okShivam = document.querySelector("#okShivam");

okShivam.addEventListener("click", function () {
    window.location.href = "voiceSearch.html"
})



