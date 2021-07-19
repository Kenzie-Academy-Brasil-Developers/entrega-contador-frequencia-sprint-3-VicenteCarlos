const letterCounts = {}
const button = document.getElementById("countButton");

button.addEventListener("click", function() {  
  
   let wordCounts = {};

   let typedText = document.getElementById("textInput").value;

   typedText = typedText.toLowerCase();

   typedText = typedText.replace(/[^a-z'\s]+/g, "");

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }
        
    }
   

    for (let letter in letterCounts) {
        
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.style.marginTop = "20px"
        letters.appendChild(span); 
        letters.style.border = "2px solid blue";
        letters.style.padding = "5px";
        letters.style.color = "darkred";
        letters.style.fontWeight = "bold";
    }
    words = typedText.split(/\s/);
    
    for (let i = 0; i < words.length; i++) {
        
        const guardar = words[i];
        
        if (wordCounts[guardar] === undefined) {
            wordCounts[guardar] = 1; 
        } else { 
            wordCounts[guardar]++; 
        }
    }
    console.log(wordCounts)

    for(let nova in wordCounts){
        const span = document.createElement("span");
        const textContent = `"${nova}": ${wordCounts[nova]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("wordsDiv");
        letters.appendChild(span);
        letters.style.marginTop = "20px";
        letters.style.marginTop = "20px";
        letters.style.border = "2px solid blue";
        letters.style.padding = "5px";
        letters.style.color = "darkred";
        letters.style.fontWeight = "bold";
    }

});
 