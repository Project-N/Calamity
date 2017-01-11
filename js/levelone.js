levelone = new Level("levelone");
var stars = skybox(30);
levelone.objects.push(stars);
levelone.objectives.push(new Objective());
levelone.load = function(){
	var music = new Audio("media/bensound-slowmotion.ogg");
	music.loop = true;
	Main.switchMusic(music);
}
levelone.unload = function(){
	
}