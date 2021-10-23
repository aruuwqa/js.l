let car1 = {
      name: 'bmw', 
      color: 'black', 
      speed: 130, 
      price: 14000, 
      type: 'cheap',
    }
  let car2 = {
      name: 'm-benz', 
      color: 'green', 
      speed: 150, 
      price: 50000, 
      type: 'cheap',
    }
  let car3 ={
      name: 'maybah', 
      color: 'pink', 
      speed: 220, 
      price: 200000, 
      type: 'cheap',
    }
  let car4 = {
      name: 'honda', 
      color: 'white', 
      speed: 100, 
      price: 7000, 
      type: 'cheap',
    }
  let car5 = {
      name: 'henday', 
      color: 'red', 
      speed: 120, 
      price: 9000, 
      type: 'cheap',
    }
  let car6 = {
      name: 'land-r', 
      color: 'black', 
      speed: 130, 
      price: 34000, 
      type: 'cheap',
    }
  let car7 = {
      name: 'lexus', 
      color: 'purple', 
      speed: 180, 
      price: 57000, 
      type: 'cheap',
    }
  let car8 = {
      name: 'toyota', 
      color: 'black', 
      speed: 190, 
      price: 3000, 
      type: 'cheap',
    }
  let car9 = {
      name: 'porsh', 
      color: 'white', 
      speed: 150, 
      price: 76000, 
      type: 'cheap',
    }
  let car10 = {
      name: 'camry', 
      color: 'brown', 
      speed: 140, 
      price: 4000, 
      type: 'cheap',
    }
  let car11 = {
      name: '350', 
      color: 'green', 
      speed: 110, 
      price: 38000, 
      type: 'cheap',
    }
  let car12 = {
      name: '570', 
      color: 'pink', 
      speed: 210, 
      price: 100000, 
      type: 'cheap',
    }

  let cars =[car1,car2,car3,car4,car5,car6,car7,car8,car9,car10,car11,car12]
  let cheapCars =[]
  let standartCars =[]
  let premiumCars =[]
  let sum=[]

  for (let i=0; i<cars.length; i++){
    if (cars[i].speed >170){
        cars[i].price += 1200;
        cars[i].type='premium';
    } else if (cars[i].speed >140){
        cars[i].price +=500;
        cars[i].type='standart';
  };
    }
    console.log (standartCars,premiumCars);

  for (let i =0; i>cars.length;i++) {
        if (cars[i].type === 'standart'){
            standartCars.push(cars[i])
        }
        if (cars[i].type === 'premium'){
            premiumCars.push(cars[i])
        }
    }
    console.log (cars);

let totalPriceOfCheapCars =(cheapCars.price / cheapCars.length );
let totalPriceOfStandartCars = ( standartCars.price / standartCars.length );
let totalPriceOfPremiumCars = ( premiumCars.price / premiumCars.length);

console.log (totalPriceOfPremiumCars, totalPriceOfCheapCars, totalPriceOfStandartCars)


// найти самую дешевую и самую дорогую машину каждого парка 
//(cheap, standard и premium)

// в консоль вывести следующее:

// Машины эконом класса:
// [список машин]
// Средняя цена эконом класса: *сердняя цена*
// Самая дорогая эконом класса: *объект car*
// Самая дешевая эконом класса: *объект car*
// ---------------------------------
// Машины класса стандарт: ...
// --------------------------------- 
// Машины премиум класса: ...

// Подсказка: вам нужно будет создать нескольцо циклов