//constructor function and new operator
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const fahem = new Person("fahem", 2000);
// const bilal = new Person("bilal", 2001);
// console.log(fahem, bilal);

// const saif = "saif";
// console.log(fahem instanceof Person);
// console.log(saif instanceof Person);

// // prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// fahem.calcAge();
// console.log(fahem.__proto__);
// console.log(fahem.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(fahem));

// console.log(Person.prototype.isPrototypeOf(bilal));

// console.log(Person.prototype.isPrototypeOf(Person));

// // coding challenge 1
// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.make} is going at ${this.speed}km/h`);
// // };

// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.make} is going at ${this.speed}km/h`);
// // };
// // const BMW = new Car("BMW", 120);
// // const mercedes = new Car("Mercedes", 90);
// // BMW.accelerate();
// // BMW.accelerate();
// // BMW.brake();
// // BMW.accelerate();
// // mercedes.accelerate();
// // mercedes.brake();

// //  object create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   Init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const atif = Object.create(PersonProto);
// console.log(atif);
// atif.name = "atif";
// atif.birthYear = "2002";
// atif.calcAge();

// console.log(atif.__proto__ === PersonProto);

// const malik = Object.create(PersonProto);
// malik.Init("malik ", 2000);
// malik.calcAge();

// // code challenge 2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new CarCl("ford ", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);
// ford.speedUS = 100;
// console.log(ford);

// // coding challenge 3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // link the prototype
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed}km/h and with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV("tesla", 120, 23);
// // console.log(tesla);
// tesla.chargeBattery(10);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// code challenge 4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h and with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
const rivan = new EVCl("rivan ", 120, 30);
// console.log(rivan);
// console.log(rivan.#charge);
rivan.accelerate().accelerate().brake().chargeBattery(70).accelerate();
