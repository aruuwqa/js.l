// let allCars =[];

// let ecoCollection = {name: 'premium', cars: []}
// let ecoCollection = {name: 'standart', cars: []}
// let ecoCollection = {name: 'ekonom', cars: []}

// function setName (){
//     let random = Math.round(Math.random()* 12)
// switch(random)}

// function Car(name, speed) {
//     this.name = name;
//     this.speed = speed;
// }

// let maybah = new Car ('maybah', 220);
// let maybah2 = new Car ('maybah2', 170);

// console.log (maybah, maybah2);



// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// arr.push(10)
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(0);
// console.log(arr);

// arr.reverse();
// console.log(arr);

// arr.splice();
// console.log(arr);

// arr.slice(7,13);
// console.log(arr);

// arr.forEach();
// console.log(arr);

// function showMessage (message){
//     return `My message : ${message}`
// }

// function setMessage (callback
//     , message){
//     return callback (message)
// }
// let message = setMessage (showMessage, 'hello! my name is Awuuqe')
// console.log (message)

// let arr=[1,2,3,4,5,6,7,8,9];

// arr.forEach(function(a){
//     console.log (a);
// })

// arr.forEach((a) => console.log(a))

let fruits = [
    {
        name: 'apple1'
    },
    {
        name: 'apple2'
    },
    {
        name: 'apple3'
    },
    {
        name: 'apple4'
    },
    {
        name: 'apple5'
    },
    {
        name: 'apple6'
    },
    {
        name: 'apple7'
    },
    {
        name: 'apple8'
    },
    {
        name: 'apple9'
    },
]
fruits.forEach((elem) => {
    elem.price = Math.round(Math.random()* 100)
    console.log (`${elem.name} : ${elem.price}`)

})