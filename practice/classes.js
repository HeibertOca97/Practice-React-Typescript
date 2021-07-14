class Shape{
  #privateVariable = 'privateVariable'
  publicVariable = 'publicVariable'
  static staticVariable = 'staticVariable'

  constructor(height, width){
    this.height = height;
    this.width = width;
  }
  
  getArea(){
    return 'not implemented';
  }

  getPrivateVariable(){
    return this.#privateVariable;
  }
};

class Square extends Shape{
  getArea(){
    return this.height * this.width;
  }

  getParentArea(){
    return super.getArea();
  }
}

const houseAndLot = new Square(120, 100);

console.log(houseAndLot.getParentArea());
console.log(houseAndLot.getArea());
console.log(houseAndLot.getPrivateVariable());
console.log(houseAndLot.publicVariable)
console.log(houseAndLot)