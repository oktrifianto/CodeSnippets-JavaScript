// Example apply, bind, call

// create object
let my_name = {
  firstName: "John",
  lastName: "Doe",
  printFullName: function() {
    // console.log(this.firstName); // this.. refer to let name
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

my_name.printFullName(); // John Doe


// --------------------- 
// in some case... we will borrow function from the top

let name2 = {
  firstName: "Anita",
  lastName : "Jia"
}

// function borrowing using call method
my_name.printFullName.call(name2); // Anita Jia
