function sum(...thisArg){
  // return arguments.length; //  devuelve el numero total de parametros
  // return arguments.reduce((previous, current) => previous + current); //  error
  // return thisArg.reduce((previous, current) => previous + current);
}
/***********
DESTRUCTURING OBJECT 
*************/
const userDetails = {
  name: 'Master',
  address: "Av. Barcelona y piedraita",
  sample:{
    test: 'test'
  }  
}

const {name: newName = 'Josh', ...otherDetail} = userDetails;

console.log(newName);
console.log(otherDetail);

/***********
DESTRUCTURING ARRAY
*************/
const fruits = ['banana', 'orange', 'watermelon', 'apple'];

const [firstFruits, ...lastFruits] = fruits;

console.log(firstFruits);
console.log(lastFruits);