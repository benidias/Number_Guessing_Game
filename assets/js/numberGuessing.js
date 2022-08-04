$(document).ready(function(){
    
    $('input[name=difficultyType]').click(function(){

        $(".container").show()
        
        var guess_easy = "unlimited";
        if ($(this).attr("value") == "very_easy"){
            msg.textContent = "I am Thinking of a number Between 1 to 10";
            msg1.textContent = "No. of Guess: " + guess_easy;
            
        }

        if ($(this).attr("value") == "easy"){
            msg.textContent = "I am Thinking of a number Between 1 to 10";
            msg1.textContent = "No. of Guess: " + $noOfGuessesEasy;
        }

        if ($(this).attr("value") == "medium"){
            msg.textContent = "I am Thinking of a number Between 1 to 100";
            msg1.textContent = "No. of Guess: " + noOfGuessesMedium;
        }

        if ($(this).attr("value") == "difficult"){
            msg.textContent = "I am Thinking of a number Between 1 to 500";
            msg1.textContent = "No. of Guess: " + noOfGuessesDifficult;
        }

        if ($(this).attr("value") == "very_difficult"){
            msg.textContent = "I am Thinking of a number Between 1 to 1000";
            msg1.textContent = "No. of Guess: " + noOfGuessesVeryDifficult;
        }
    })
})
var msg1 = document.getElementById("message1")  
var msg2 = document.getElementById("message2")  
var msg3 = document.getElementById("message3")
var msg = document.getElementById("first")
// ----------------- choosing the target number ---------------------- //
var answerVeryEasy = Math.floor(Math.random()*10) + 1;  
var answerEasy = Math.floor(Math.random()*10) + 1;
var answerMedium = Math.floor(Math.random()*100) + 1;
var answerDifficult = Math.floor(Math.random()*500) + 1;
var answerVeryDifficult = Math.floor(Math.random()*1000) + 1;
result = 0; 
// ------------------ Limit the number of tries ---------------------- //
var noOfGuessesVeryEasy = Number.MAX_SAFE_INTEGER;
var $noOfGuessesEasy = 5;
var noOfGuessesMedium= 5;
var noOfGuessesDifficult = 8;
var noOfGuessesVeryDifficult= 9;  
var guesses_num = [];
// ------------------ Tell the users the number of tries remainig ------------- //
var remainEasy = 5; 
var remainMedium = 5; 
var remainDifficult = 8;
var remainVeryDifficult = 9; 

// -------------------- assign answer with each difficulty --------------- //
function getAnswer(){
    
    var tries = $("input[type=radio]:checked").val();
    

    if(tries == "very_easy"){

        result = answerVeryEasy
        
    }
    if(tries == "easy"){

        result = answerEasy

    }
    if(tries == "medium"){

        result = answerMedium
 
    }
    if(tries == "difficult"){

        result = answerDifficult
        
    }
    if(tries == "very_difficult"){

        result = answerVeryDifficult

    } return result
} 

// ------------------------- See if the answer is correct or not and ------------------ //

function numberOfTries(){
    
    
    var user_guess = document.getElementById("guess").value;
    var type = $("input[type=radio]:checked").val();

    guesses_num.push(user_guess);
    var number = guesses_num.length;
    
    
    


    if(type == "very_easy"){
        if(user_guess < 1 || user_guess > 10 ){  
            alert("Your Selected Number Must Be In Range of 1 to 10");
            
             
        }
        if(user_guess < getAnswer()){
            msg2.textContent = "" ;
            msg1.textContent = "Your Guess is Too low"
            msg3.textContent = "Guessed Number Are: " + guesses_num;

        }
        else if(user_guess > getAnswer()){
            msg2.textContent = "";
            msg1.textContent = "Your Guess is Too High"
            msg3.textContent = "Guessed Number Are: " + guesses_num;
        }
        else if(user_guess == getAnswer()){
            msg1.textContent = "Congratulations! You won !!";
            msg2.textContent = "the Number was " + getAnswer();
            msg3.textContent = " ";
            alert("Congratulations you won. You guessed the number in " + number + " tries");
            reloadThePage();
        }

    }
    if (type == "easy"){
        $noOfGuessesEasy -= 1; 
        
        if($noOfGuessesEasy<=0){
            alert("Game over. the number was " + result)
            reloadThePage();
        }
        if(user_guess < 1 || user_guess > 10 ){  
            alert("Your Selected Number Must Be In Range of 1 to 10");
            $noOfGuessesEasy += 1;
            remainEasy++;
            guesses_num.pop() 
             
        }
        if(user_guess < getAnswer()){
            remainEasy--;
            msg2.textContent = "No. Of Guess Remain: " + remainEasy;
            msg1.textContent = "Your Guess is Too low"
            msg3.textContent = "Guessed Number Are: " + guesses_num;

        }
        else if(user_guess > getAnswer()){
            remainEasy--;
            msg2.textContent = "No. Of Guess Remain: " + remainEasy;
            msg1.textContent = "Your Guess is Too High"
            msg3.textContent = "Guessed Number Are: " + guesses_num;
        }
        else if(user_guess == getAnswer()){
            msg1.textContent = "Congratulations! You won !!";
            msg2.textContent = "the Number was " + getAnswer();
            msg3.textContent = " ";
            alert("Congratulations you won. You guessed the number in " + number + " tries");
            reloadThePage();
        }
    }

    if (type == "medium"){
        noOfGuessesMedium -= 1; 
        
        
        if(noOfGuessesMedium<=0){
            alert("Game over. the number was " + result)
            reloadThePage();
            
        }
        if(user_guess < 1 || user_guess > 100 ){  
            alert("Your Selected Number Must Be In Range of 1 to 100");
            noOfGuessesMedium += 1;
            remainMedium++;
            guesses_num.pop()
             
        }
        if(user_guess < getAnswer()){
            remainMedium--;
            msg2.textContent = "No. Of Guess Remain: " + remainMedium;
            msg1.textContent = "Your Guess is Too low"
            msg3.textContent = "Guessed Number Are: " + guesses_num;

        }
        else if(user_guess > getAnswer()){
            remainMedium--;
            msg2.textContent = "No. Of Guess Remain: " + remainMedium;
            msg1.textContent = "Your Guess is Too high"
            msg3.textContent = "Guessed Number Are: " + guesses_num;
        }
        else if(user_guess == getAnswer()){
            msg1.textContent = "Congratulations! You won !!";
            msg2.textContent = "the Number was " + getAnswer();
            msg3.textContent = " ";
            alert("Congratulations you won. You guessed the number in " + number + " tries");
            reloadThePage();
        }
        
    }

    if (type == "difficult"){
        noOfGuessesDifficult -= 1; 

        if(noOfGuessesDifficult<=0){
            alert("Game over. the number was " + result)
            reloadThePage();
        }
        if(user_guess < 1 || user_guess > 500 ){  
            alert("Your Selected Number Must Be In Range of 1 to 500");
            noOfGuessesDifficult += 1;
            remainDifficult++;
            guesses_num.pop()
             
        }
        if(user_guess < getAnswer()){
            remainDifficult--;
            msg2.textContent = "No. Of Guess Remain: " + remainDifficult;
            msg1.textContent = "Your Guess is Too low"
            msg3.textContent = "Guessed Number Are: " + guesses_num;

        }
        else if(user_guess > getAnswer()){
            remainDifficult--;
            msg2.textContent = "No. Of Guess Remain: " + remainDifficult;
            msg1.textContent = "Your Guess is Too high"
            msg3.textContent = "Guessed Number Are: " + guesses_num;
        }
        else if(user_guess == getAnswer()){
            msg1.textContent = "Congratulations! You won !!";
            msg2.textContent = "the Number was " + getAnswer();
            msg3.textContent = " ";
            alert("Congratulations you won. You guessed the number in " + number + " tries");
            reloadThePage();
        }
        
    }

    if (type == "very_difficult"){
        noOfGuessesVeryDifficult -= 1;
        
        if(noOfGuessesVeryDifficult<=0){
            alert("Game over. the number was " + result)
            reloadThePage();
        }
        if(user_guess < 1 || user_guess > 1000 ){  
            alert("Your Selected Number Must Be In Range of 1 to 1000");
            noOfGuessesVeryDifficult -= 1;
            remainVeryDifficult++;
            guesses_num.pop()
             
        }
        if(user_guess < getAnswer()){
            remainVeryDifficult--;
            msg2.textContent = "No. Of Guess Remain: " + remainVeryDifficult;
            msg1.textContent = "Your Guess is Too low"
            msg3.textContent = "Guessed Number Are: " + guesses_num;

        }
        else if(user_guess > getAnswer()){
            remainVeryDifficult--;
            msg2.textContent = "No. Of Guess Remain: " + remainVeryDifficult;
            msg1.textContent = "Your Guess is Too high"
            msg3.textContent = "Guessed Number Are: " + guesses_num;
        }
        else if(user_guess == getAnswer()){
            msg1.textContent = "Congratulations! You won !!";
            msg2.textContent = "the Number was " + getAnswer();
            msg3.textContent = " ";
            alert("Congratulations you won. You guessed the number in " + number + " tries");
            reloadThePage();
        }
        
    }
    ifChange()
     

}

function reloadThePage(){
    window.location.reload(true);
}
function reload(){
    window.location.reload(false);
    
}
function ifChange(){
    $('input[name=difficultyType]').on('click change', function(){
        reloadThePage()
    })
}
