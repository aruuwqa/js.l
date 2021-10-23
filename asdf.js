// for (let i = 0; i <100; i++){
//     if (i%2 ==0){console.log ('ping')}
//     else {
//         console.log ('pong')
//     };
// };


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
