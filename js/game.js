function resetGame(){
var Game = {};
Game.scene = new THREE.Scene();
Game.scenecontainer = new THREE.Object3D();
Game.scene.add(scenecontainer);
Game.clock = new THREE.Clock();
Game.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100000);
Game.renderer = new THREE.WebGLRenderer({antialias:true});
Game.renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(Game.renderer.domElement);
Game.addObject = function(object){
	if(object.static == true){
		Game.scene.add(object);
	}
	else{
		Game.scenecontainer.add(object);
	}
}
Game.removeObject = function(object){
	
}
Game.update = function(){
	Game.renderer.render(Game.scene,Game.camera);
	if(Main.paused != true){
	requestAnimationFrame(Game.update);
	}
}
};