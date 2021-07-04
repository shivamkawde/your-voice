let recognitio = new webkitSpeechRecognition();
let form=   document.querySelector("#form");
let voiceData=document.querySelector("input");

//speechRecognitionList.addFromString(grammar, 1);
//recognition.grammars = speechRecognitionList;
//recognitio.continuous = true;
recognitio.lang = 'en-US';
recognitio.interimResults = false;
recognitio.maxAlternatives = 1;
let searchh=document.querySelector("#search");

searchh.addEventListener("click",function(){
    //recognition.start();
    
      recognitio.start();
    
    
    
})
let gooledata="";
recognitio.onresult=function(){

    let info= event.resultIndex;
    let transcript=event.results[info][0].transcript
    gooledata=gooledata+transcript
    //textBox.innerHTML=content
    //console.log(content);
    voiceData.value=gooledata
    form.submit()
  // setTimeout(()=>{
  //   form.submit()
  // },5000)
   
  console.log(gooledata)
    }
 
