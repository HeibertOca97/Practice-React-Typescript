/***
function calculateSquareArea() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const squareArea = 5 * 5;
      //success
      resolve(squareArea);
      //error
      // reject(squareArea);
    }, 500);
  });
}

function onFulFilled(data) {
  console.log('onFulFilled: ' + sada);
}

function onReject(reason) {
  console.log('onReject: ' + reason);
}

calculateSquareArea()
.then(onFulFilled)
.catch(reason => {
  console.log('Catch: '+ reason);
});

***/

function onFulFilled(data) {
  console.log('onFulFilled: ', data);
} 
/***
Promise.resolve('testresolve')
.then(onFulFilled)
.catch(reason => {
  console.log('Catch: '+ reason);
});

Promise.reject('testresolve')
.then(onFulFilled)
.catch(reason => {
  console.log('Catch: '+ reason);
});
***/

/***
const myPromises = [
  new Promise((resolve, reject) => setTimeout(resolve, 500)),
  new Promise((resolve, reject) => setTimeout(resolve, 500)),
  new Promise((resolve, reject) => setTimeout(reject, 500))
];

Promise.all(myPromises)
.then(onFulFilled)
.catch(reason => {
  console.log('Catch: '+ reason);
});

Promise.allSettled(myPromises)
.then(onFulFilled)
.catch(reason => {
  console.log('Catch: '+ reason);
});

***/

/***
const myPromises = [
  new Promise((resolve, reject) => setTimeout(() => resolve(100), 100)),
  new Promise((resolve, reject) => setTimeout(() => reject(200), 200)),
  new Promise((resolve, reject) => setTimeout(() => resolve(300), 300))
];
// Promise.rice(myPromises)
// Promise.any(myPromises)
Promise.all(myPromises)
.then(onFulFilled)
.catch(reason => {
  console.log('Catch: '+ reason);
});
***/

let myNumber = 5;

function changeNumber(){
  return new Promise((resolve) => {
    setTimeout(() => {
      myNumber = 10;
      resolve(myNumber);  
    }, 500);
  });
}

// function startChange(){
//   changeNumber();
//   console.log(myNumber);
// }

async function startChange(){
  await changeNumber();
  console.log(myNumber);
}

startChange();