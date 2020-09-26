/*
- Create class for ship
- Create Uss Assembly with x- properties
- Create Alien ships
    - Random hull, firepower, accuracy
- Define USS Assembly
- Define 6 Alien Ships
- Layout 
    - Play function
        - alert user to start game "Do you accept your mission"
        - select which ship to attck
        - if user defeats all ships - end game
        - if user is defeated - end game
            - if user ship hull reaches 0
        - if user retreats -end game
    - Attack and retreat



*/


class Ship {
    constructor(shipName){
    this.shipName = shipName;
    }
    // check if hit
    // subtract firepower
    // check if alien ship hulll is greater than 0
    // 
    attack() {        
        if(Math.random() < this.accuracy) {
            this.hull -= ussAssembly.firepower;
            console.log(`You have been hit!`);
        }
    }
    determineHit() {
        
    }
};

class UssAssembly extends Ship {
    constructor(shipName){
        super(shipName);
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
};

class EnemyShip extends Ship {
    constructor(shipName){
        super(shipName);
        this.hull = Math.floor(Math.random() * (6 - 3) + 3);
        this.firepower = Math.floor(Math.random() * (4 - 2) + 2);
        this.accuracy = Math.random() * (.8 - .6) + .6;
    }
};
const ussAssembly = new UssAssembly('USS Assembly')
const alienShip1 = new EnemyShip('Ebon Hawk');
console.log(alienShip1);
const alienShip2 = new EnemyShip('Moldy Crow');
console.log(alienShip2);
const alienShip3 = new EnemyShip('Virago');
console.log(alienShip3);
const alienShip4 = new EnemyShip('Wild Karrde');
console.log(alienShip4);
console.log(alienShip1.attack());
console.log(ussAssembly);