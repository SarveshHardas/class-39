class Player{
    constructor()
    {
        this.name = null;
        this.index=null;
        this.positionX=0;
        this.positionY=0;
        this.rank=0;
        this.fuel=185;
        this.life=185;
        this.score=0;

    }
    getCount()
    {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
        playerCount=data.val()
        })
    }

    updateCount(count)
    {
        database.ref("/").update({
            playerCount:count,
        });
    }
    static getPlayersInfo()
    {
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value",(data)=>{
        allPlayer=data.val();
        })
    }
    addPlayer()
    {
        var playerIndex = "players/player"+this.index
        if(this.index===1)
        {
            this.positionX=width/2-100;
        }else{
            this.positionX=width/2+100;
        }
        database.ref(playerIndex).set({
            name:this.name ,
            positionX:this.positionX,
            positionY:this.positionY,
            rank:this.rank,
            life:this.life,
            score:this.score,
        })
    }
    getDist()
    {
        var playerDistanceRef = database.ref("players/player"+this.index);
        playerDistanceRef.on("value",(data)=>{
            playerDistance=data.val();
            this.positionX=playerDistance.positionX;
            this.positionY=playerDistance.positionY;
        })
    }
    update()
    {
        var playerIndex="players/player"+this.index;
        datavase.ref(playerIndex).update({
            positionX:this.positionX,
            positionY:this.positionY,
            rank:this.rank,
            score:this.score,  
        });
    }
}