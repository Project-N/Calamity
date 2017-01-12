var Main = {};
Main.music = new Audio();
Main.vox = new Audio();
Main.paused = true;
Main.level = new Level();
Main.loadLevel = function(){
	for(var i = 0; i < this.level.objects.length; i++){
		Game.addObject(this.level.objects[i]);
	}
}
//exit() - Exits the game.
Main.exit = function(){
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://localhost:8000", true); // false for synchronous request
    xmlHttp.send(null);
}
//switchLevel(Level) - Switches to level.
Main.switchLevel = function(level){
	this.music.pause();
	this.vox.pause();
	this.level.unload();
	resetGame();
	this.level = level;
	this.level.load();
	this.loadLevel();
}
//switchMusic(sound) - Switches the music to sound.
Main.switchMusic = function(sound){
	this.music.pause();//Stops the current music.
	this.music = sound;
	if(this.paused != true){//Checks if the game is paused, and if it's not, it starts the music.
		this.music.play();
	}
}
Main.playVox = function(sound){
	this.vox.pause();
	this.vox = sound;
	if(this.paused != true){
		this.vox.play();
	}
}
//playSound(sound) - Plays sound.
Main.playSound = function(sound){
	sound.play();
}
//pause() - Pauses the game.
Main.pause = function(){
	this.music.pause();
	this.vox.pause();
	this.pausemenu.style.display = "block";
	this.paused = true;
	Game.clock.stop();
}
//play() - Resumes the game.
Main.play = function(){
	requestAnimationFrame(Game.update);
	this.music.play();
	if(!this.vox.ended){
		this.vox.play();
	}
	this.pausemenu.style.display = "none";
	this.paused = false;
	Game.clock.start();
}
document.addEventListener("DOMContentLoaded",function(event){
	Main.fade = document.createElement('div');
	Main.fade.className = "fade";
	Main.fade.style.opacity = 1;
	document.body.appendChild(Main.fade);
	Main.pausemenu = document.createElement("div");
    Main.pausemenu.className = "menu";
    Main.pausemenu.innerHTML = "Paused<br /><br /><a onclick='pointerlock();'>Play</a><br /><a onclick='Main.switchLevel(mainmenu);Main.play();'>Exit</a>"
    document.body.appendChild(Main.pausemenu);
    Main.pausemenu.style.display = "none";
	Main.switchLevel(mainmenu);
	Main.play();
});