var gamePattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
        let level=0;

        $(document).one("keypress",function(){
            level=0;
            nextSequence();
        });
    
function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    userClickedPattern=[];
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    level ++;
    $("h1").text("Level "+level);
    playSound(randomChosenColour);
}
   
    

function startOver(){
    $(document).one("keypress",function(){
        level=0;
    gamePattern=[];
    nextSequence();
    });
}

var userClickedPattern=[];
$(".btn").on("click",function (){
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
       
});
function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColour).removeClass("pressed");
    },100);
}
function playSound(name){
    userClickButtonSound=new Audio("sounds/"+name+".mp3");
    userClickButtonSound.play();
}
function checkAnswer(currentLevel){
    
     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(() => {
                    nextSequence();
                    // console.log(gamePattern);
                }, 1000);
            }
            
        }
        else{
            $("h1").text("Game Over At Level "+level+" Press Any Key To Restart.");
            playSound("wrong");
            
                $("body").addClass("game-over");
                setTimeout(function(){
                    $("body").removeClass("game-over").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                },300);
               startOver();
          
        }

       
        
}