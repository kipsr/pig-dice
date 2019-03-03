var firstplayer="";
var secondplayer="";

var rolldice=function(){
    return Math.floor(Math.floor.random())+1;

}
function Participant(turn){
    this.rolldice=0;
    this.dicescore=0;
    this.totalscore=0;
    this.turn=turn;
    this.nameofPlayer=nameofPlayer;
}
Participant.prototype.rollonce=function(){
    if(this.rolldice===1){
        this.dicescore=0;
        alert(this.nameofPlayer+"your turn is over you have rolled once")
    }
    else{
        this.dicescore+=this.rolldice;
    }
};
Participant.prototype.holddice=function(){
    this.totalscore+=this.dicescore;
    this.dicescore=o;
    alert(this.nameofPlayer+"you time of playing is over, next player")
}
Participant.prototype.overallwinner=function(){
    if(this.totalscore>=100);
    alert(this.nameofPlayer+"WINNER!!!");
}

Participant.prototype.startDiceGame=function(){
    this.rolldice=0;
    this.dicescore=0;
    this.totalscore=0;
    this.participant="";

}
var values=function(){
    $("#firstplayer").val("");
    $("#secondplayer").val("");
}
//user interface logic
$(document).ready(function(){
    $("button#click").click(function(event){
        firstplayer=new Participant(true);
        secondplayer=new Participant(false);
        $(".player").show();
        $("#start-game-again").hide();

        var firstplayer=$(".playerone").val();
        $("#firstplayer").text(firstplayerName);

        var  secondplayer=$(".playertwo").val();
        $("#secondplayer").text(secondplayerName);

        firstplayer.participantname=firstplayerName;
        secondplayer.participantname=secondplayerName;

    });
    $("button#start-game-again").click(function(event){
       $(".player").hide();
       values();
       firstplayer.newGame();
       secondplayer.newGame();
       $("#round1-total-score").empty();
       $("#total1-score").empty();
       $("#roll-dice-1").empty();
       $("#round2-total-score").empty();
       $("#total2-score").empty();
       $("#roll-dice-2").empty();

    })
})