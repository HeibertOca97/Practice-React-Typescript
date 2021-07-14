interface UserInterface{
  name: string;
  age: number;
  sex: string;
}

const UserSchema: UserInterface = {
  name: "Heibert",
  age: 24,
  sex: "Male"
}

class Persons{
  data: any = {};
  constructor(props:any = {}){
    this.data = props;
  }

  greeting(){
    return "Hello world";
  }

  present(){
    return `My name is ${this.data.name}, and i'm ${this.data.age} year old`;
  }

  descriptionSex(){
    return `I am ${this.data.sex}`;
  }

}

const newPerson: any = new Persons(UserSchema);

console.log(newPerson.greeting());
console.log(newPerson.present());
console.log(newPerson.descriptionSex());