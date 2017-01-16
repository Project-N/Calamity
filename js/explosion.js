function explosion(count,color,size,speed){
	var particles = new THREE.Geometry();
	var pmaterial = new THREE.PointsMaterial({size:size,color:color,sizeAttenuation:true,map:THREE.ImageUtils.loadTexture("media/particle.png"),blending:THREE.AdditiveBlending,transparent:true});
	for(var j = 0; j < count; j++){
		var pX = Math.random()*500-250,pY = Math.random()*500-250,pZ = Math.random()*500-250;
		var particle = new THREE.Vector3(pX,pY,pZ);
		particles.vertices.push(particle);
	}
	var particleSystem = new THREE.Points(particles,pmaterial);
	particleSystem.sortParticles = true;
	particleSystem.static = true;
	return particleSystem;
}