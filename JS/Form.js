class Form{
constructor(){
this.Input=createInput("Name");
this.Button=createButton("Play");
this.greeting=createElement('h2');
}

hide (){
this.greeting.hide();
this.Input.hide();
this.Button.hide();
}
Display(){
var Title=createElement('h1')
Title.html("Car Racing Game");
Title.position(150,0);


this.Input.position(130,160);
this.Button.position(250,200);
this.Button.mousePressed(()=>{
this.Input.hide();
this.Button.hide();
player.Name=this.Input.value();
playerCount=playerCount+1
player.Index=playerCount;
player.update()
player.updateCount(playerCount)
this.Greeting.html('HELLO'+ Name);
this.Greeting.position(130,160);
})
}
}
