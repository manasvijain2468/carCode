class Game{
constructor(){

}

getState(){
var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
    gameState = data.val();    
})
}

update(state){
    database.ref('/').update({
        gameState:state
    })
}
async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  car1=createSprite(100,300,50,50);
  car2=createSprite(200,300,50,50);
  car3=createSprite(300,300,50,50);
  car4=createSprite(400,300,50,50);
  cars=[car1,car2,car3,car4];
  
}
    play(){
        background("yellow");
        console.log()
        form.hide();
        text("Game Start",120,100)
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            var index=0;
            var x=100;
            var y=300;
           // var pos=130;

            
        for(var plr in allPlayers){
            index+=1;
            x+=200;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
            if(index==player.index){
                cars[index-1].shapeColor="orange"
            }
            console.log(cars[index-1])
            /*if(plr == "player"+player.index){
                fill("purple");
            }
            else{
                fill("red");
            }*/

            //pos += 20
            //textSize(20)
            //text(allPlayers[plr].name+" : "+allPlayers[plr].distance,100,pos)
        }

        }
        if(keyIsDown(UP_ARROW)){
            player.distance=player.distance+50;
            player.update();
        }
        drawSprites();
    }


}