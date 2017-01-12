var Main = {};
Main.music = new Audio();
Main.vox = new Audio();
Main.paused = true;
Main.level = new Level();
Main.level.objectives.push(new Objective());
Main.newlevel = new Level();
Main.loadLevel = function(){
	for(var i = 0; i < Main.level.objects.length; i++){
		Game.addObject(Main.level.objects[i]);
	}
}
//exit() - Exits the game.
Main.exit = function(){
	Main.fadeOut(Main.exitInterim);
}
Main.exitInterim = function(){
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://localhost:8000", true); // false for synchronous request
    xmlHttp.send(null);
}
//switchLevel(Level) - Switches to level.
Main.switchLevel = function(level){
	Main.newlevel = level;
	Main.music.volume = 0;
	Main.vox.volume = 0;
	Main.fadeOut(Main.switchLevelInterim);
}
Main.switchLevelInterim = function(){
	Main.level.unload();
	resetGame();
	Main.level = Main.newlevel;
	Main.level.load();
	Main.music.volume = 1;
	Main.vox.volume = 1;
	Main.loadLevel();
	Main.fadeIn(null);
}
//switchMusic(sound) - Switches the music to sound.
Main.switchMusic = function(sound){
	Main.music.pause();//Stops the current music.
	Main.music = sound;
	if(Main.paused != true){//Checks if the game is paused, and if it's not, it starts the music.
		Main.music.play();
	}
}
Main.playVox = function(sound){
	Main.vox.pause();
	Main.vox = sound;
	if(Main.paused != true){
		Main.vox.play();
	}
}
//playSound(sound) - Plays sound.
Main.playSound = function(sound){
	sound.play();
}
//pause() - Pauses the game.
Main.pause = function(){
	Main.music.pause();
	Main.vox.pause();
	Main.pausemenu.style.display = "block";
	Main.paused = true;
	Game.clock.stop();
}
//play() - Resumes the game.
Main.play = function(){
	requestAnimationFrame(Game.update);
	Main.music.play();
	if(!Main.vox.ended){
		Main.vox.play();
	}
	Main.pausemenu.style.display = "none";
	Main.paused = false;
	Game.clock.start();
}
Main.fadeOut = function(callback){
	Main.fade.style.opacity = 1;
	setTimeout(callback,250);
}
Main.fadeIn = function(callback){
	Main.fade.style.opacity = 0;
	setTimeout(callback,250);
}
document.addEventListener("DOMContentLoaded",function(event){
	Main.fade = document.createElement('div');
	Main.fade.className = "fade";
	document.body.appendChild(Main.fade);
	Main.pausemenu = document.createElement("div");
    Main.pausemenu.className = "menu";
    Main.pausemenu.innerHTML = "Paused<br /><br /><a onclick='pointerlock();'>Play</a><br /><a onclick='Main.switchLevel(mainmenu);Main.play();'>Exit</a>"
    document.body.appendChild(Main.pausemenu);
    Main.pausemenu.style.display = "none";
	Main.switchLevel(mainmenu);
	Main.play();
});