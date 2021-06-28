(() => {
    var monCanvas = document.getElementById("hang");
    var ctx = monCanvas.getContext("2d")
    ctx.lineWidth="5";
    ctx.strokeStyle="#316AC5";
    
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(150, 70);
    ctx.stroke();
    
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 200);
    ctx.stroke();

    ctx.moveTo(20, 200);
    ctx.lineTo(80, 200);
    ctx.stroke();












    var word = ["maison", "voiture", "avion", "aaaaa", "malabarminion"]
    var randomWord = word[Math.floor(Math.random()*word.length)];
    var underscore = "";
    // console.log(randomWord)

    for (let i = 0; i < randomWord.length; i++) {
            underscore += `<span id="span${i}">_ </span>`;
    };
    
    document.getElementById("wordFind").innerHTML = underscore

    var arrayLetterSub = [];
    var attempt = 10;
    var goodAttempt = 0


    document.addEventListener("keydown", (event)=> {

        var letter = event.key;
        
        if (arrayLetterSub.indexOf(letter) == -1) {
            if (randomWord.indexOf(letter)!= -1){
                var i = 0
                while (i < randomWord.length) {
                    if (randomWord[i] == letter) {
                        document.getElementById(`span${i}`).innerHTML = letter
                    }
                    i++
                }
                goodAttempt++
                arrayLetterSub.push(letter)
                document.getElementById("attempt").innerHTML = "Il vous reste " + attempt + " tentatives!"
            }else{
                attempt--
                arrayLetterSub.push(letter)
                document.getElementById("attempt").innerHTML = "Il vous reste " + attempt + " tentatives!"
            }  
        }else {
            document.getElementById("attempt").innerHTML = "Vous avez deja proposé cette lettre!"
        }

        document.getElementById("ltAlSub").innerText = arrayLetterSub

        if (attempt == 0) {
            document.getElementById("attempt").innerHTML = "You loose!"
        }

        if (goodAttempt == randomWord.length) {
            document.getElementById("attempt").innerHTML = "You win!"
        }
    })
})();









// document.getElementById("submit").addEventListener("click", () => {

    //     var letter = document.getElementById("letter").value;
        
    //     if (arrayLetterSub.indexOf(letter) == -1) {
    //         if (randomWord.indexOf(letter)!= -1){
    //             var i = 0
    //             while (i < randomWord.length) {
    //                 if (randomWord[i] == letter) {
    //                     document.getElementById(`span${i}`).innerHTML = letter
    //                 }
    //                 i++
    //             }
    //             goodAttempt++
    //             arrayLetterSub.push(letter)
    //             document.getElementById("attempt").innerHTML = "Il vous reste " + attempt + " tentatives!"
    //         }else{
    //             attempt--
    //             arrayLetterSub.push(letter)
    //             document.getElementById("attempt").innerHTML = "Il vous reste " + attempt + " tentatives!"
    //         }  
    //     }else {
    //         document.getElementById("attempt").innerHTML = "Vous avez deja proposé cette lettre!"
    //     }

    //     document.getElementById("ltAlSub").innerText = arrayLetterSub

    //     if (attempt == 0) {
    //         document.getElementById("attempt").innerHTML = "You loose!"
    //     }

    //     if (goodAttempt == randomWord.length) {
    //         document.getElementById("attempt").innerHTML = "You win!"
    //     }

    //     document.getElementById("letter").value = ""
    // })