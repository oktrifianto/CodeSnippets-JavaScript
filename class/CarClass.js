/**
 * Create Car Class
 * @param {string}  brand  - type of product
 * @param {number}  year   - time of car production
 * @param {string}  color  - color of car
 * @param {number}  max_speed  - how fast the car
 * @param {boolean} manual_trans - is manual transmission?
 */
class Car {
  constructor(brand, year, color, max_speed, manual_trans){
    this.brand        = brand;
    this.year         = year;
    this.color        = color;
    this.max_speed    = max_speed;
    this.manual_trans = manual_trans;
  }

  getSpeed(){
    return `Your ${this.brand} car have maximum speed ${this.max_speed} km/h`;
  }

  isManual(){
    if (this.manual_trans){
      return "Manual Transmission";
    }
    return "Automatic Transmission";
  }

}

// Instance class
const supra  = new Car("Toyota Supra", 2021, "Black", 200, false);

console.log(supra.color)
console.log(supra.getSpeed())
console.log(supra.manual_trans)
console.log(supra.isManual())