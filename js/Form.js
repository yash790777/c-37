class Form 
{
  constructor() 
  {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }
  setElementsPosition() 
  {
    this.titleImg.position(120, 70);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }
  setElementsStyle() 
  {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }
  hide() 
  {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  handleMousePressed() 
  {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);

      //write code to increase the playercount by 1when player presses the play Button
      playerCount+=1
      //write code to update the player name in Input box
      player.name=this.input.value();
      //write code to make player count = player index number
      player.index=playerCount;
      //Call addPlayer function
      player.addPlayer();
      //write code to update the count of player
       player.updateCount(playerCount);
    });
  }

  display() 
  {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
