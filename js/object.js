var maxId = 0;
//Suggest moving all functions to Thing.prototype
function Thing() {
  this.id = maxId++;
  this.velocity = 0; //Velocity is a vector, not a number. Should be a THREE.Vector3.
  this.position = new THREE.Vector3( 0, 0 ,0);
  this.update = function(){};
  this.damage = 0; //Suggest replacing with a Hull variable, which will be decreased accordingly every time the object is damaged.
}

//Trevor suggests removing this function.
function inherit() {
    return Thing.call(this, Thing.id, Thing.velocity, Thing.position, Thing.update, Thing.damage);
}

//Suggest adding Thing.call(this), and removing all references to Inherit.
//In addition, Ship needs to copy Thing's prototype.
//After copying the prototype of Thing, Ship needs to replace the prototype.constructor with its own.
function Ship() {
  inherit();
  this.fireProjectile = function(){};
}
//Suggest removing object.create and replacing with according code.
function Projectile(velocity) {
  object.create(Thing);
  this.damage = 0;
}

function Box() {
    object.create(Thing);
}
//Current implementation doesn't work.
//Suggest looking at:
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
//Make sure to put all variable declarations in the constructor, and all function declarations in the prototype.
//Make sure to use call() correctly. Also, make sure to copy over the prototype and replace the constructor accordingly.
