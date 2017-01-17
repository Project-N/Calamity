levelone = new Level("levelone");
levelone.objectives.push(new Objective());
levelone.load = function(){
	levelone.objects.length = 0; //Reuses old memory, is better for performance than objects = []
	var stars = skybox(30);
	levelone.objects.push(stars);
	var explosion1 = explosion(10000,0xFF0000,1,1.1);
	explosion1.position.z = -100;
	explosion1.position.x = 10;
	levelone.objects.push(explosion1);
	var earth = planet(6000,128,"media/earthmap.jpg",false);
	earth.position.x = 10000;
	earth.position.z = -10000;
	earth.static = true;
	earth.moving = true;
	earth.velocity = new THREE.Vector3(0,100,0);
	levelone.objects.push(earth);
	var music = new Audio("media/bensound-slowmotion.ogg");
	music.loop = true;
	Main.switchMusic(music);
}
levelone.unload = function(){
	
}