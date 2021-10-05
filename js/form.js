class Form{
    constructor()
    {
        this.input=createInput("").attribute("placeholder","ENTER YOUR NAME");
        this.playBtn = createButton("play");
        this.titleImg = createImg("./assets/title.png","gameTitle");
        this.greeting = createElement("h2")
    }
    setElementsPosition()
    {
        this.titleImg.position(120,50);
        this.input.position(width/2-110,height/2-80);
        this.playBtn.position(width/2-90,height/2-20);
        this.greeting.position(width/2-300,height/2-100);
    }
    setElementsStyle()
    {
        this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playBtn.class("customButton");
        this.greeting.class("greeting");
    }
    hide()
    {
        this.input.hide();
        this.playBtn.hide();
        this.tittleImg.hide();
        this.greeting.hide();
    }
    handleMousePressed()
    {
            this.playBtn.mousePressed(()=>{
            this.input.hide();
            this.playBtn.hide();
            player.name=this.input.value();
            var message="Hello "+player.name+"</br>Wait for another player to join..."
            this.greeting.html(message);
            playerCount+=1;
            player.updateCount(playerCount);
            player.index=playerCount;
            player.addPlayer();
           
            player.getDist();
        }
        )
    }

    display()
    {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
    }
}