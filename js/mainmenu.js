mainmenu = new Level("mainmenu");
var stars = skybox(30);
stars.update = function(delta){
	this.rotation.x += 0.05 * delta;
    this.rotation.y += 0.01 * delta;
}
mainmenu.objects.push(stars);
mainmenu.objectives.push(new Objective());
mainmenu.showcredits = function(){
	this.title.style.display = "none";
	this.credits.style.display = "block";
}
mainmenu.hidecredits = function(){
	this.credits.style.display = "none";
	this.title.style.display = "block";
}
mainmenu.load = function(){
	var music = new Audio("media/bensound-slowmotion.ogg");
	music.loop = true;
	Main.switchMusic(music);
	this.title = document.createElement("div");
    this.title.className = "menu";
    this.title.id = "mainmenutitle";
    this.title.innerHTML = "CALAMITY<br /><br /><a onclick='pointerlock();Main.switchLevel(levelone);'>Play</a><br /><a onclick='mainmenu.showcredits()'>Credits</a><br /><a onclick='Main.exit()'>Exit</a>"; //TODO: Request pointer lock when PLAY button is clicked. Add JS helper file for pointer locks. https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
    document.body.appendChild(this.title);
    this.credits = document.createElement("div");
    this.credits.className = "menu";
    this.credits.style.display = "none";
    this.credits.innerHTML = "Credits<br /><div style='font-size:12px'>All works are original except those listed below.<br /><br />Using music from Bensound, licensed under the Creative Commons Attribution license. Using fonts created by Severin Meyer, licensed under the SIL Open Font License.<br />Using modified code from https://github.com/jeromeetienne/threex.geometricglow/, distributed under the MIT license. Using un-copyrighted Earth map produced by NASA.</div><a onclick='mainmenu.hidecredits()'>Back</a>"; //TODO: Request pointer lock when PLAY button is clicked. Add JS helper file for pointer locks. https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
    document.body.appendChild(this.credits);
}
mainmenu.unload = function(){
	document.body.removeChild(this.title);
	document.body.removeChild(this.credits);
}