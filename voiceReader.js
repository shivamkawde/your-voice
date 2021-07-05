let sound=document.querySelector("#sound");

sound.addEventListener("click",function(e){
    if(content.length>0)
    {
        let speech = new SpeechSynthesisUtterance(content);
        if(textBox.innerHTML!="")
        window.speechSynthesis.speak(speech);
        console.log("aagay")
    }
})