var maxId = 0;

function Thing() {
  this.id = maxId++;
  this.velocity = 0;
  this.position = new THREE.Vector3( 0, 0 ,0);
  this.update = function(){};
  this.damage = 0;
}

function inherit() {
    return Thing.call(this, Thing.id, Thing.velocity, Thing.position, Thing.update, Thing.damage);
}

function Ship() {
  inherit();
  this.fireProjectile = function(){};
}

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