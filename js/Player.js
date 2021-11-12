class Player 
{
  constructor() 
  {
    //write properties of player
    this.name=null;
    this.index=null;
    this.positionX=0;
    this.positionY=0;
  }
   //Declare getCount function to get the count of player
   getCount() 
   {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }
  //Declare updateCount to update the player details once the player enters the game
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  //Declare Add player function to  add the player with proper index number and X&Y Positon
  addPlayer() 
  {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }
 //Declare static function to get players info
  static getPlayersInfo() 
  {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }
}
