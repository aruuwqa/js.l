let notpad ={ 
    name : 'mac', 
    canModify: true , 
    price: 6, 
    graphicsСard :  5, 
    cpu : 4 ,
}

let notpad2 ={ 
    name : 'hp', 
    canModify: true , 
    price: 3, 
    graphicsСard :  7, 
    cpu : 8, 
}

let notpad3 ={ 
    name : 'acer', 
    canModify: false, 
    price: 2, 
    graphicsСard :  9, 
    cpu : 5,}

let notpads = [notpad,notpad2,notpad3]
for (let i =0; i< notpads.length; i++){
     if (canModify= true, notpads[i].ssd = 3){
        
    }
     if (notpads[i].graphicsСard >=5 && notpads[i].cpu >=5){
        notpads[i].price += 1200
          } else if (notpads[i].graphicsСard >=5 || notpads[i].cpu >=5){
        notpads[i].price += 500
     }  
     console.log (notpads)
}


