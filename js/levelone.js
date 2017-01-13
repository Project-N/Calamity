levelone = new Level("levelone");
var stars = skybox(30);
levelone.objects.push(stars);
var earth = planet(6000,128,"media/earthmap.jpg",false);
earth.position.x = 10000;
earth.position.z = -10000;
earth.static = true;
earth.moving = true;
earth.velocity = new THREE.Vector3(0,100,0);
levelone.objects.push(earth);
levelone.objectives.push(new Objective());
levelone.load = function(){
	var music = new Audio("media/bensound-slowmotion.ogg");
	music.loop = true;
	Main.switchMusic(music);
}
levelone.unload = function(){
	
}