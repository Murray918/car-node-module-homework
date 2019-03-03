//Traditional way to create a class and assign prototypes
let Car = function(color,convertible){
		this.color = color
		this.convertible = convertible
		this.speed = 0
}
Car.prototype.accelerate = function(speed){
	this.speed += speed
}
Car.prototype.decelerate = function(speed){
	this.speed -= speed
}

//How to use classes and assign prototypes
class Junker{
	constructor(color,convertible){
	this.color = color
	this.convertible = convertible
	this.speed = 0
	}
	accelerate(speed){
	this.speed += speed
}
decelerate(speed){
	this.speed -= speed
}
}

//ignore for purposes of this file
module.exports = Car