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
                this.gameActive = false;
                console.log("Uh...you died.");
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

    gotPowerup() {
        switch(this.status) {
            case "Small":
                this.status = "Powered Up";
                break;
            case "Big":
                this.status = "Powered Up";
                break;
        }
        return this.status;
    }

    addCoin() {
        return this.totalCoins++;
    }

    print(name) {
        return `Name: ${this.name} \nStatus: ${this.status} \nStar: ${this.star} \nTotal Coins: ${this.totalCoins} \nGame Active: ${this.gameActive}`;
    }
}

let player = new Player("Celeste");
console.log(player.print("Celeste"));
