let cars = [
    {
    name: 'bmw', 
    color: 'black', 
    speed: 130, 
    price: 14000, 
    type: 'cheap',
},
  {
    name: 'm-benz', 
    color: 'green', 
    speed: 150, 
    price: 50000, 
    type: 'cheap',
  },
  {
    name: 'maybah', 
    color: 'pink', 
    speed: 220, 
    price: 200000, 
    type: 'cheap',
  },
  {
    name: 'honda', 
    color: 'white', 
    speed: 100, 
    price: 7000, 
    type: 'cheap',
  },
  {
    name: 'henday', 
    color: 'red', 
    speed: 120, 
    price: 9000, 
    type: 'cheap',
  },
  {
    name: 'land-r', 
    color: 'black', 
    speed: 130, 
    price: 34000, 
    type: 'cheap',
  },
  {
    name: 'lexus', 
    color: 'purple', 
    speed: 180, 
    price: 57000, 
    type: 'cheap',
  },
   {
    name: 'toyota', 
    color: 'black', 
    speed: 190, 
    price: 3000, 
    type: 'cheap',
  },
  {
    name: 'porsh', 
    color: 'white', 
    speed: 150, 
    price: 76000, 
    type: 'cheap',
  },
  {
    name: 'camry', 
    color: 'brown', 
    speed: 140, 
    price: 4000, 
    type: 'cheap',
  },
{
    name: '350', 
    color: 'green', 
    speed: 110, 
    price: 38000, 
    type: 'cheap',
  },
{
    name: '570', 
    color: 'pink', 
    speed: 210, 
    price: 100000, 
    type: 'cheap',
  },
]
  let cheapCars =[];
  let standartCars =[];
  let premiumCars =[];

  for (let i=0; i<cars.length; i++){
    if (cars[i].speed >170){
        cars[i].price += 1200;
        cars[i].type='premium';
    } else if (cars[i].speed >140){
        cars[i].price +=500;
        cars[i].type='standart';
  };
};
console.log(cars);
 
  
