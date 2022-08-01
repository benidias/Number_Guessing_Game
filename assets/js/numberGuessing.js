var msg1 = document.getElementById("message1")  
var msg2 = document.getElementById("message2")  
var msg3 = document.getElementById("message3")
//choosing the target number
var answerVeryEasy = Math.floor(Math.random()*10) + 1;  
var answerEasy = Math.floor(Math.random()*10) + 1;
var answerMedium = Math.floor(Math.random()*100) + 1;
var answerDifficult = Math.floor(Math.random()*500) + 1;
var answerVeryDifficult = Math.floor(Math.random()*1000) + 1;
result = 0;  
var noOfGuessesVeryEasy = Number.MAX_SAFE_INTEGER;
var noOfGuessesEasy = 5;
var noOfGuessesMedium= 5;
var noOfGuessesDifficult = 8;
var noOfGuessesVeryDifficult= 9;  
var guesses_num = [];
//document ready once difficulty choice
$(document).ready(function(){
    $('input[type=radio]').click(function(){

        

        getAnswer()
        restartGame()
        
        
        
        
        
        

    })

    $('input[name=difficultyType]').click(function(){
        
        $(".container").show()
        var guess_easy = "unlimited";
        if ($(this).attr("value") == "very_easy"){
            msg1.textContent = "No. of Guess: " + guess_easy;
        }

        if ($(this).attr("value") == "easy"){
            msg1.textContent = "No. of Guess: " + noOfGuessesEasy;
        }

        if ($(this).attr("value") == "medium"){
            msg1.textContent = "No. of Guess: " + noOfGuessesMedium;
        }

        if ($(this).attr("value") == "difficult"){
            msg1.textContent = "No. of Guess: " + noOfGuessesDifficult;
        }

        if ($(this).attr("value") == "very_difficult"){
            msg1.textContent = "No. of Guess: " + noOfGuessesVeryDifficult;
        }
    })
})


function play(){  
   var user_guess = document.getElementById("guess").value;
// set maximum number  
   if(user_guess < 1 || user_guess > 1000 ){  
     alert("Please Enter a number Between 1 to 100");  
   }  
   else{
    numberOfTries();
     
    
   }

    

    
   

}
function restartGame(){
    msg1 = document.getElementById("message1")  
    msg2 = document.getElementById("message2")  
    msg3 = document.getElementById("message3")  
    result = 0
    noOfGuessesVeryEasy = Number.MAX_SAFE_INTEGER;
    noOfGuessesEasy = 5;
    noOfGuessesMedium= 5;
    noOfGuessesDifficult = 8;
    noOfGuessesVeryDifficult= 9;  
    guesses_num = [];


}

function getAnswer(){
    //assign answer with each difficulty
    var tries = $("input[type=radio]:checked").val();
    

    if(tries == "very_easy"){

        

        result = answerVeryEasy

        
    }
    if(tries == "easy"){

        

        result = answerEasy

        

        noOfGuessesEasy -= 1;
        if(noOfGuessesEasy<=0){
            alert("Game over. the number was " + result)
        } 
    }
    if(tries == "medium"){

        result = answerMedium

        noOfGuessesMedium -= 1;
        if(noOfGuessesMedium<=0){
            alert("Game over. the number was " + result)
            
        } 
    }
    if(tries == "difficult"){

         result = answerDifficult

        noOfGuessesDifficult -= 1;
        if(noOfGuessesDifficult<=0){
            alert("Game over. the number was " + result)
        }
    }
    if(tries == "very_difficult"){

        result = answerVeryDifficult

        noOfGuessesVeryDifficult -= 1;
        if(noOfGuessesVeryDifficult<=0){
            alert("Game over. the number was " + result)
        }
    } return result
} 

function numberOfTries(){
    

    
    //see if the answer is correct or not

    var user_guess = document.getElementById("guess").value;

    guesses_num.push(user_guess);  
    noOfGuessesEasy -= 1;  
     if(user_guess < getAnswer()){ 
         
     msg1.textContent = "Your Guess is Too low"  
     msg2.textContent = "No. Of Guess Remain: ";  
     msg3.textContent = "Guessed Number Are: " +  
     guesses_num;
        
     }  
     else if(user_guess > getAnswer()){
          
       msg1.textContent = "Your Guess is Too High"  
       msg2.textContent = "No. Of Guess Remain: "; 
       msg3.textContent = "Guessed Number Are: " +  
       guesses_num;  
     }  
     else if(user_guess == getAnswer()){  
       msg1.textContent = "Congratulations! You won !!"  
       msg2.textContent = "the Number was " + getAnswer()  
       msg3.textContent = " ";
       Message();
       reloadThePage()
       restartGame()   
     }  
    

    

}

function Message(){
    alert("Congratulations you won");
    
}
function reloadThePage(){
    window.location.reload(false);
} 
