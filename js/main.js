var Main = {};
Main.music = new Audio();
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
//playSound(sound) - Plays sound.
Main.playSound = function(sound){
	sound.play();
}
//pause() - Pauses the game.
Main.pause = function(){
	this.music.pause();
	this.paused = true;
}
//play() - Resumes the game.
Main.play = function(){
	requestAnimationFrame(Game.update);
	this.music.play();
	this.paused = false;
}
document.addEventListener("DOMContentLoaded",function(event){
	Main.switchLevel(mainmenu);
	Main.play();
});