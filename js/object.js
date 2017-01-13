var maxId = 0;
//FOR EVERY THREE.JS OBJECT, THE FOLLOWING MUST BE ADDED.
//type - Type of the object. Projectile, Ship, Immovable, None
//static - Whether or not the object stays in place.
//FOR ALL SHIPS:
function setupShip(object){
  object.velocity = new THREE.Vector3(0,0,0);
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