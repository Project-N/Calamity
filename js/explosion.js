function explosion(count,color,size,speed){
	var particles = new THREE.Geometry();
	var pmaterial = new THREE.PointsMaterial({size:size,color:color});
	for(var j = 0; j < count; j++){
		var pX = Math.random()*2-1,pY = Math.random()*2-1,pZ = Math.random()*2-1;
		var particle = new THREE.Vector3(pX,pY,pZ);
		particles.vertices.push(particle);
	}
	var particleSystem = new THREE.Points(particles,pmaterial);
	particleSystem.static = true;
	particleSystem.speed = speed;
	particleSystem.update = function(delta){
		var pCount = this.geometry.vertices.length;
      while(pCount--) {
        var particle =  this.geometry.vertices[pCount];
        particle.y *= speed;
        particle.x *= speed;
        particle.z *= speed;
      }
      this.geometry.verticesNeedUpdate = true;
	}
	return particleSystem;
}