var Main = {};
Main.music = new Audio();
Main.loadLevel = function(level){

}
//exit() - Exits the game.
Main.exit = function(){

}
//switchLevel(Level) - Switches to level.
Main.switchLevel = function(level){

}
//switchMusic(sound) - Switches the music to sound.
Main.switchMusic = function(sound){
	this.music.pause();
	this.music = sound;
	this.music.play();
}
//playSound(sound) - Plays sound.
Main.playSound = function(sound){
	sound.play();
}
//pause() - Pauses the game.
Main.pause = function(){

}
//play() - Resumes the game.
Main.play = function(){

}
document.addEventListener("DOMContentLoaded",function(event){

});