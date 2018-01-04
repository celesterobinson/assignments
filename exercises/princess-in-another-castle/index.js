class Player {
    constructor(name) {
        this.name = name;
        this.totalCoins = 0;
        this.status = "Small";
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
                this.star = true;
                break;
            case "Big":
                this.status = "Powered Up";
                this.star = true;
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

    randomRange() {
        let randomNum = Math.floor(Math.random() * 3);
        switch(randomNum) {
            case 0:
                return this.gotHit();
                break;
            case 1:
                return this.gotPowerup();
                break;
            case 2:
                return this.addCoin();
                break;
        }
    }
}

function play() {
    let player = new Player("Mario");
    player.randomRange();
    player.randomRange();
    player.randomRange();
    return player.print(player);
}

console.log(play());

