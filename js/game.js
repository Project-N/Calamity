var Game = {};
Game.scene = new THREE.Scene();
Game.clock = new THREE.Clock();
Game.addObject = function(object){

}
Game.removeObject = function(object){

}
Game.update = function(){
	console.log("hi");
	if(Main.paused != true){
	requestAnimationFrame(Game.update);
	}
}