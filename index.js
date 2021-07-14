var UserSchema = {
    name: "Heibert",
    age: 24,
    sex: "Male"
};
var Persons = /** @class */ (function () {
    function Persons(props) {
        if (props === void 0) { props = {}; }
        this.data = {};
        this.data = props;
    }
    Persons.prototype.greeting = function () {
        return "Hello world";
    };
    Persons.prototype.present = function () {
        return "My name is " + this.data.name + ", and i'm " + this.data.age + " year old";
    };
    Persons.prototype.descriptionSex = function () {
        return "I am " + this.data.sex;
    };
    return Persons;
}());
var newPerson = new Persons(UserSchema);
console.log(newPerson.greeting());
console.log(newPerson.present());
console.log(newPerson.descriptionSex());
