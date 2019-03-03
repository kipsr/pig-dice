var firstplayer;
var secondplayer;

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
        
    }
}
