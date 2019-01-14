class Car {
	constructor(color,convertible) {
		this.color = color;
		this.convertible = convertible;
		this.speed = 0;
	}

	accelerate (speed) {
		this.speed += speed;
	}
	decelerate (speed) {
		this.speed -= speed;
	}
}

module.exports = Car;

//let cow = new Car("blue",false);
//cow.accelerate();
//cow.deaccelerate();
//console.log(cow.speed);

//console.log(cow.speed);

