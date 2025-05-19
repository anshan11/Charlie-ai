let btn=document.querySelector("#btn")
let content=document.querySelector("#content")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
     let hours=day.getHours()
   if(hours>=0 && hours<12){
        speak("Good Morning Sir")  

   }
   else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
   }else{
         speak("Good Evening Sir")
   }
}
   window.addEventListener('load',()=>{
     wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
      let currentIndex=event.resultIndex
      let transcript=event.results[currentIndex][0].transcript
      content.innerText=transcript
      takeCommand(transcript.toLowerCase())
             
}

btn.addEventListener("click",()=>{
    recognition.start()
})
function takeCommand(message){
    if(message.includes("hello")||message.includes("hi")){
        speak("hello sir, what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("I am virtual assistant ,created by anshan sir")
    }else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
     else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com")
    }
    else if(message.includes("open canva")){
        speak("opening canva")
        window.open("https://www.canva.com")
    }
    else if(message.includes("open gemini")){
        speak("opening gemini")
        window.open("https://gemini.google.com")
    }
     else if(message.includes("open dd")){
        speak("opening discord")
        window.open("https://discord.com/")
    }
    else{
        speak(`this is your internet result${message}`)
        window.open (`https://www.google.com/search?q=${message}`) 
    }
}