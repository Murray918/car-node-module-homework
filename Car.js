class Car {
	constructor(carColor,isConvertable){
		this.color = carColor,
		this.convertible =isConvertable,
		this.speed = 0
	}
	accelerate(desiredSpeed){
		this.speed += desiredSpeed
	}
	decelerate(desiredReducedSpeed){
		this.speed -= desiredReducedSpeed
	}
}

module.exports = Car