class Player{
constructor(){
this.Index=null
this.Distance=0;
this.Name=null
}

getCount(){
var playerCountRef=database.ref('playerCount');
playerCountRef.on("value",(data)=>{
playerCount=data.val();
})
}
updateCount(count){
database.ref('/').update({
playerCount:count
})
}
update(Name){
var playerIndex="player"+playerCount
database.ref(playerIndex).set({
Name:Name
})
}

update(){
var playerIndex="players/player"+this.Index()
database.ref(playerIndex).set({
Name:this.Name,Distance:this.Distance
})
}
static getPlayerInfo(){
var playerInfoRef=database.ref('players');
playerInfoRef.on("value",(data)=>{
allPlayers=data.val();
})

}
}