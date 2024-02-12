var playOne= new Audio("audios/SongA.mp3") 
var playTwo =new Audio("audios/SongB.mp3")
var playThree =new Audio("audios/SongC.mp3")
var playFour =new Audio("audios/SongD.mp3")
var playFive =new Audio("audios/SongE.mp3")
var playSix =new Audio("audios/SongF.mp3")
var playSeven =new Audio("audios/SongX.mp3")

function checkValue() {
    var inputvalue = document.getElementById("input").value
    if(inputvalue != ""){
        if(inputvalue >= 0 && inputvalue <40) {
            displayResult.innerHTML = "F Fail"
            displayResult.style.color ="red"
            playFour.pause()
            playOne.pause()
            playTwo.pause()
            playThree.pause()
            playFive.pause()
            playSix.play()
            playSeven.pause()
            
        }
        else if(inputvalue >=40 && inputvalue < 45)
        {
            displayResult.innerHTML = " E Pass"
            displayResult.style.color ="yellow"
            playFour.pause()
            playOne.pause()
            playTwo.pause()
            playThree.play()
            playFive.pause()
            playSix.pause()
            playSeven.pause()
        }
        else if (inputvalue >=45 && inputvalue < 50)
        {displayResult.innerHTML = " D Average"
        displayResult.style.color ="yellow"
        playFour.play()
        playThree.pause()
        playFive.pause()
        playSix.pause()
        playSeven.pause()
        playOne.pause()
        playTwo.pause()
        }
        else if(inputvalue >=50 &&  inputvalue < 60)
        {displayResult.innerHTML ="  C Credit"
        displayResult.style.color="gray"
        playThree.play()
        playFour.pause()
        playFive.pause()
        playSix.pause()
        playSeven.pause()
        playOne.pause()
        playTwo.pause()
        }
        else if(inputvalue >= 60 && inputvalue < 75){
        displayResult.innerHTML=" B3 Good"
        displayResult.style.color="green"
        playTwo.play()
        playThree.pause()
        playFour.pause()
        playFive.pause()
        playSix.pause()
        playSeven.pause()
        playOne.pause()

        }
        else if(inputvalue >=75 && inputvalue < 85)
        {
            displayResult.innerHTML ="B2 Very Good"
            displayResult.style.color="white"  
            playTwo.play()
            playThree.pause()
            playFour.pause()
            playFive.pause()
            playSix.pause()
            playSeven.pause()
            playOne.pause()

        }
        else if (inputvalue >=85 && inputvalue <=100)
        {
            displayResult.innerHTML = "A1 Excellent"
            displayResult.style.color="white"
            playOne.play()
            playThree.pause()
            playFour.pause()
            playFive.pause()
            playSix.pause()
            playSeven.pause()
            playTwo.pause()
        }
    else if(inputvalue >100){
        displayResult.innerHTML ="Not recognised"
        playThree.pause()
        playFour.pause()
        playFive.play()
        playSix.pause()
        playSeven.pause()
        playOne.pause()
        playTwo.pause()
    }
    else if(inputvalue <0){
        displayResult.innerHTML ="Not recognised"
    }
    }else{
        displayResult.innerHTML = "Input value"
        playSeven.play()
        playThree.pause()
        playFour.pause()
        playFive.pause()
        playSix.pause()
        playOne.pause()
        playTwo.pause()
    }    
}