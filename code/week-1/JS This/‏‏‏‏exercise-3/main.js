const pumpFuel = function (plane) {
  if (!plane.fuel) {
    plane.fuel = 0;
  }
  plane.fuel += 1;
};

const airplane = {
  fly: function () {
    if (this.fuel < 2 || !this.fuel) {
      return "on the ground!";
    } else {
      return "flying!";
    }
  },
};

console.log("The plane should not be able to fly (yet): " + airplane.fly());

pumpFuel(airplane);
console.log("The plane should STILL not be able to fly: " + airplane.fly());

pumpFuel(airplane);
console.log("Take off! " + airplane.fly());
