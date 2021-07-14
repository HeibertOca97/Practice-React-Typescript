// this.console.log("I'm Global Object");

const userDetails = {
  name: "Heibert",
  getName: function() {
    return this.name;
  }
}

console.log(userDetails.getName());