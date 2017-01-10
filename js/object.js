var maxId = 0;
//FOR EVERY THREE.JS OBJECT, THE FOLLOWING MUST BE ADDED.
//type - Type of the object. Projectile, Ship, Immovable, None
//static - Whether or not the object stays in place.



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