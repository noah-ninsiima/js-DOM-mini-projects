let textArea =document.getElementById("textBox");
let counter =document.getElementById("live-counter");

const upperCharLimit = 200;
console.log("Upper Character Limit:", upperCharLimit);

textArea.addEventListener("input", function(){
let realtimeLength =textArea.value.length;
    console.log("Number of typed characters:", realtimeLength);
    
let remainingChar = upperCharLimit - realtimeLength; 
     console.log("Number of remaining characters:",remainingChar);
    counter.innerText =`${remainingChar} characters ramaining`;
});
