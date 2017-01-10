var maxId;
function Object() {
  this.id = function() {
      if(maxId == null){
          maxId = 0;
      } else {
          maxId = ++1;
      }
      return maxId;
  };
  this.velocity = 0;
  this.position = new THREE.Vector3( 0, 0 ,0);
  this.update = function(){
      
  };
  this.damage = 0;
}