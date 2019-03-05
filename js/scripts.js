//Business interface

var firstplayer="";
var secondplayer="";

var diceroll=function(){
    return Math.floor(6 * Math.random())+1;

}
function Player(turn){
    this.roll=0;
    this.diescore=0;
    this.overallscore=0;
    this.turn=turn;
    this.Player;   
}
//checking for one
Player.prototype.roll=function(){
    if(this.roll===1){
        this.diescore=0;
        alert(this.Player+"your turn is over you have rolled once")
    }
    else{
        this.diescore+=this.roll;
    }
};
Player.prototype.hold=function(){
    this.overallscore+=this.diescore;
    this.diescore=o;
    alert(this.Player+"you time of playing is over, next player")
}
Player.prototype.winnerCheck=function(){
    if(this.overallscore>=100);
    alert(this.Player+"WINNER!!!");
}

Player.prototype.newGame=function(){
    this.roll=0;
    this.diescore=0;
    this.overallscore=0;
    this.Player="";

}
var clearvalues=function(){
    $("#firstplayer").val("");
    $("#secondplayer").val("");
}
//user interface logic
$(document).ready(function(){
    $("button#click").click(function(event){
        firstplayern=new Player(true);
        secondplayer=new Player(false);
        $(".player").show();
        $("#start-game-again").show();

        var firstplayerName=$(".playerone").val();
        $("#firstplayer").text(firstplayerName);

        var  secondplayerName=$(".playertwo").val();
        $("#secondplayer").text(secondplayerName);

        firstplayer.PlayerName=firstplayerName;
        secondplayer.PlayerName=secondplayerName;

    });
    $("button#start-game-again").click(function(event){
       $(".player").show();
       clearvalues();    
       
    //  firstplayer.newGame();
    //  secondplayer.newGame();
       $("#round1-total-score").empty();
       $("#total1-score").empty();
       $("#roll-dice-1").empty();
       $("#round2-total-score").empty();
       $("#total2-score").empty();
       $("#roll-dice-2").empty();
       $("#start").empty();

    });
    $("button#firstPlayer-rolldice").click(function(event){
        firstplayer.roll=diceroll();
        $("#roll-dice-1").text(firstplayer.roll);
        firstplayer.roll();
        $("#round1-total-score").text(firstplayer.diescore);

    });
    $("button#secondPlayer-rolldice").click(function(event){
        secondplayer.roll=diceroll();
        $("#roll-dice-1").text(secondplayer.roll);
        secondplayer.rollone();
        $("#round2-total-score").text(secondplayer.diescore);

    });
    $("button#firstPlayer-holdice").click(function(event){
        firstplayer.hold();
        $("#total1-score").text(firstplayer.overallscore);
        $("#round1-total-score").empty();
        $("#roll-dice-1").empty();
        firstplayer.winnerCheck();

        
    });
    $("button#secondPlayer-holddice").click(function(event){
        secondplayer.hold();
        $("#total2-score").text(firstplayer.overallscore);
        $("#round2-total-score").empty();
        $("#roll-dice-2").empty();
        secondplayer.winnerCheck();
    });

});