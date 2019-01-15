// Car is a constructor
let Car = function(color, convertible) {
	this.color = color
	this.convertible = convertible
	this.speed = 0
}

Car.prototype.accelerate = function(speed) {
	this.speed += speed
}
Car.prototype.decelerate = function(speed) {
	this.speed -= speed
}


module.exports = Car