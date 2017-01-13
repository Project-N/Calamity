var maxId = 0;
//FOR EVERY THREE.JS OBJECT, THE FOLLOWING MUST BE ADDED.
//type - Type of the object. Projectile, Ship, Immovable, None
//static - Whether or not the object is outside the scene container.
//moving - Whether or not the object has a velocity attribute that needs to be added to the position each frame.
//FOR ALL SHIPS:
function setupShip(object){
  object.velocity = new THREE.Vector3(0,0,0);
  object.moving = true;
  object.throttle = 0; 
  object.throttleUp = 0; //Affected by Controls
  object.throttleDown = 0; //Affected by Controls
  object.retroThruster = 0; 
  object.mainThruster = 0;
  object.leftThruster = 0;
  object.rightThruster = 0;
  object.topThruster = 0;
  object.bottomThruster = 0;
  object.retroThrusterOn = -1;
  object.mainThrusterOn = -1;
  object.leftThrusterOn = -1;
  object.rightThrusterOn = -1;
  object.topThrusterOn = -1;
  object.bottomThrusterOn = -1;
  object.rollLeft = 0; //Affected by Controls
  object.rollRight = 0; //Affected by Controls
  object.movementX = 0; //Affected by Controls
  object.movementY = 0; //Affected by Controls
  object.rollSpeed = 0;
  object.turnSpeed = 0;
  object.mainSpeed = 0;
  object.thrustSpeed = 0;
  object.mainChangeSpeed = 0;
  object.thrustChangeSpeed = 0;
  object.straightenSpeed = 0;
  object.throttleChangeSpeed = 0;
}
function HIDControls(){

}

/*function Thing() {
  this.id = maxId++;
  this.velocity = new THREE.Vector3( 0, 0, 0 );
  this.position = new THREE.Vector3( 0, 0, 0 );
  this.hull = 1000;
}

Thing.prototype.update = function(){};

function Ship() {
  Thing.call(this);
}

Ship.prototype = Object.create(Thing.prototype);
Ship.prototype.fireProjectile = function(){
    console.log("fired a torpedo at Trevor's face.");
};
Ship.prototype.constructor = Ship;

function Projectile(velocity) {
  Thing.call(this);
}

Projectile.prototype = Object.create(Thing.prototype);
Projectile.prototype.constructor = Projectile;

function Box() {
    Thing.call(this);
}

Box.prototype = Object.create(Thing.prototype);
Box.prototype.constructor = Box;*/