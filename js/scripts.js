var firstplayer;
var secondplayer;

var rolldice=function(){
    return Math.floor(Math.floor.random())+1;

}
function participant(turn){
    this.rolldice=0;
    this.dicescore=0;
    this.totalscore=0;
    
}