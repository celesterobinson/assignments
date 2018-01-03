class Player {
    constructor(name) {
        this.name = name;
        this.totalCoins = 0;
        this.status = "Big";
        this.star = false;
        this.gameActive = true;
    }
        
    setName(namePicked) {
        switch(namePicked) {
            case "Mario":
                this.name = "Mario";
                break;
            case "Luigi":
                this.name = "Luigi";
                break;
        }
        return this.name;
    }

    gotHit() {
        switch(this.status) {
            case "Small":
                this.status = "Dead";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Powered Up":
                this.status = "Big";
                break;
        }
        return this.status;
    }
}

let player = new Player("Celeste");
console.log(player.setName("Celeste"));
