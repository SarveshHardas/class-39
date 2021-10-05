class Game
{
    constructor()
    {
        this.resetTitle = createElement("h2");
        this.resetBtn = createButton("");
        this.leaderboardTitle = createElement("h2");
        this.leader1 = createElement("h2");
        this.leader2 = createElement("h2");
        
    }

    getState()
    {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",(data)=>{
        gameState=data.val()
        })
    }

    update(state)
    {
        database.ref("/").update({
            gameState:state,
        });
    }
    start()
    {
        form = new Form()
        form.display();

        player = new Player()
        playerCount=player.getCount()
        
        c1 = createSprite(width/2-50,height-100);
        c1.addImage(cImg1);
        c1.scale=0.07;

        c2 = createSprite(width/2+100,height-100);
        c2.addImage(cImg2);
        c2.scale=0.07;

        cars=[c1,c2];
    }
    handleElements()
    {
        form.hide();
        form.titleImg.position(40,50);
        form.titleImg.class("gameTitleAfterEffect");

        this.resetTitle.html("RESET GAME");
        this.resetTitle.class("resetText");
        this.resetTitle.position(width/2+200,40);

        this.resetBtn.class("resetBtn");
        this.resetBtn.position(width/2+230,100);

        this.leaderboardTitle.html("LEADERBOARD");
        this.leaderboardTitle.class("resetText");
        this.leaderboardTitle.position(width/3-50,130);

    }
    play()
    {
        alert("working");
       this.handleElements()
       Player.getPlayersInfo();
       if(allPlayer !==undefined)
       {
           image(track,0,-height*5,width,height*6);
           var index=0;
           //for(var i=0;i<2;i++)
           for(var p in allPlayer)
           {
               index=index+1;
               var x=allPlayer[p].positionX;
               var y=height-allPlayer[p].positionY;
               cars[index-1].position.x=x;
               cars[index-1].position.y=y;
               if(index===player.index)
               {
                   stroke(10);
                   fill("red");
                   ellipse(x,y,60,60);
                   camera.position.x=cars[index-1].position.x;
                   camera.position.y=cars[index-1].position.y;
               }
           }
           this.handlePlayerControls();

           drawSprites();
       }
    }
    handlePlayerControls()
    {
        if(keyDown(UP_ARROW))
        {
            player.positionY+=10;
            player.update();
        }
    }
    showLeaderboard()
    {
        var leader1 ;
        var leader2;
        var players = Object.values(allPlayer);
        
        if((players[0].rank===0&&players[1].rank===0)|| players[0].rank===1 )
        {
            leader1 = player[0].rank+"&emsp"
        }
    }

}