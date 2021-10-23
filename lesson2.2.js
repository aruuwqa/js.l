// function UserConstructor(name, age, gender){
//     return{
//         name,
//         age,
//         gender
//     }
// }

// let user =UserConstructor('ava',32,'female');
// console.log(user);


// function name

// console.log (1,2,3)


// class Car {
//     constructor(name, speed, price){
//         this.name = name;
//         this.speed = speed;
//         this.price = price;
//         this.isActive = false;
//     }
//     // run(){   ?
//     //     if(this.isActive){   ?
//     //         return console.log('already');   ?
//     //     }   ?
//     //     console.log('done');   ?  
//     //     this.isActive = true;   ?
//     // }   ?
//     changeActive(){
//         this.isActive= !this.isActive;
//         this.isActive? console.log ('zaveli'):
//         (console.log('zaglushit'));
//     }
// }

// const bmw = new Car('bmw', 240, 10000);
// bmw.changeActive();
// bmw.changeActive();

// class Robot {
//     constructor(name,power){
//         this.name = name;
//         this.power = power;
//         this.isAlive = isAlive;
//     }

//     walk (){
//         console.log ('sdelan shag');
//     }

//     fire (){
//         console.log (`naneseno ${this.power}`)
//     }
// }

// const asye = new Robot('asye')




class Robot{
    constructor(name, power, isAlive) {
     this.name = name;
     this.power = power;
     this.isAlive = isAlive;
    }
   
    walk() {
     console.log('sdelan shag');
    }
   
    fire() {
     console.log(`naneseno ${this.power}`);
    }
   }
   
   const wariki= new Robot("wariki", 50, true)
   
   class Desepticon extends Robot{
    constructor(name, power, isAlive) {
     super(name, power, isAlive);
    }
    canFly() {
     console.log(`vzleteli`);
    }
   }
   class Autobot extends Robot{
    constructor(name, power, isAlive) {
     super(name, power, isAlive);
    }
    canDrive() {
     console.log(`poehal`);
    }
   }
   const maqi = new Desepticon('maqi', 100, false)
   const waki = new Autobot('waki', 120, true)
   
   console.log(maqi);
   maqi.canFly();
   
   console.log(waki);
   waki.canDrive();




