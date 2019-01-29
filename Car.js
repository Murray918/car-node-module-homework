module.exports = class Car {
	constructor(color, convertible) {
		this.speed = 0
		this.color = color
		this.convertible = convertible
	}
	accelerate(newSpeed) {
		return this.speed += newSpeed
	}
	decelerate(newSpeed) {
		return this.speed -= newSpeed
	}
}

