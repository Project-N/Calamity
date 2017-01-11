mainmenu = new Level("mainmenu");
var stars = skybox(30);
stars.update = function(delta){
	this.rotation.x += 0.05 * delta;
    this.rotation.y += 0.01 * delta;
}
mainmenu.objects.push(stars);
mainmenu.objectives.push(new Objective());
mainmenu.load = function(){
	var music = new Audio("media/bensound-slowmotion.ogg");
	music.loop = true;
	Main.switchMusic(music);
	this.title = document.createElement("div");
    this.title.className = "menu";
    this.title.id = "mainmenutitle";
    this.title.innerHTML = "CALAMITY<br /><br /><a onclick='pointerlock();Main.switchLevel(levelone);'>Play</a><br /><a onclick='Main.exit()'>Exit</a>"; //TODO: Request pointer lock when PLAY button is clicked. Add JS helper file for pointer locks. https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
    document.body.appendChild(this.title);
}
mainmenu.unload = function(){
	document.body.removeChild(this.title);
}