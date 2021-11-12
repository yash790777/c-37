class Game 
{
  constructor() {}
  
  //Declare getState function to the gamestate
  getState() 
  {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
 //Declare update function to update the game state
  update(state) 
  {
    database.ref("/").update({
      gameState: state
    });
  }

  start() 
  {
    form = new Form();
    form.display();
    player = new Player();

    //write code to retrive player information
    playerCount=player.getCount()
    //Create car Sprite & add Image
    car1=createSprite(width/2-50,height-100);
    car1.addImage("car1",car1_img);
    car1.scale=0.07;
    car2=createSprite(width/2+100,height-100);
    car2.addImage("car2",car2_img);
    car2.scale=0.07;
    cars=[car1,car2]
  }
  //Write handle Elements function
  handleElements() 
  {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //Declare play function
  play() 
  {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) 
    {
      //Add track image
      image(track,0,-height*5,width,height*6);

      drawSprites();
    }
  }
}
