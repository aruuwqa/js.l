// let user = {
//     name: 'Bob',
//     showName: function() {
//         console.log(this);
//     }
// }

// let car = {
//     speed: 100,
//     type: 'standart',
//     color: 'red',
//     showStatistics: function()
// }


// Цвет: red, Тип: standard, цвет: red

// const desepticon={
//     name:'megathrone',
//     hp:100,
//     armor:50,
//     power:14,
//     attac:function(){
//         return this.hp
//     },
// },
// const desepticon={
//     name:'optimus',
//     hp:100,
//     armor:40,
//     power:  17,
//     attac:function(){
//         return this.power;
//     },
//     getDamage: function(){
//         return (this.hp - desepticon.power / 2);
//     }
// }

//ima cena metod
// let a = 1;
// let b = 'b'
// if (a == 1 && b == 'b') {

// }

// function canLogin(age = 19, isAdmin = true) {
//     return age > 18 && isAdmin; // isAdmin == true
// }

// function canLogin2(age = 16, isAdmin = false) {
//     return age > 18 || isAdmin; // isAdmin == true
// }

// // boolean

let season = 'summer'

let fruits = [
    {
        name: 'banany',
        price: 120,
        season: 'allTime',
        showObj: function () {
            console.log(this.name, this.price)
        },
        serPrice: function () {
            if (this.season === season) {
                this.price += 45
            }
        }
    },
    {
        name: 'yabloki',
        price: 70,
        season: 'summer',
        showObj: function () {
            console.log(this.name, this.price)
        },
        serPrice: function () {
            if (this.season === season) {
                this.price += 45
            }
        }
    },
    {
        name: 'grushy',
        price: 50,
        season: 'winter',
        showObj: function () {
            console.log(this.name, this.price)
        },
        serPrice: function () {
            if (this.season === season) {
                this.price += 45
            }
        }
    },
    {
        name: 'izum',
        price: 160,
        season: 'winter',
        showObj: function () {
            console.log(this.name, this.price)
        },
        serPrice: function () {
            if (this.season === season) {
                this.price += 45
            }
        }
    },
    {
        name: 'chereshnya',
        price: 90,
        season: 'summer',
        showObj: function () {
            console.log(this.name, this.price)
        },
        serPrice: function () {
            if (this.season === season) {
                this.price += 45
            }
        }
    }
]

for (let fruit of fruits) {
    fruit.serPrice();
    fruit.showObj();
}





// Вывести статисткиу методом showFruit