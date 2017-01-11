var Game = null;
function resetGame(){
if(Game != null){
document.body.removeChild(Game.renderer.domElement);
}
Game = {};
Game.scene = new THREE.Scene();
Game.scenecontainer = new THREE.Object3D();
Game.scene.add(Game.scenecontainer);
Game.objects = [];
Game.clock = new THREE.Clock();
Game.camera = new THREE.PerspectiveCamera(75, screen.width/screen.height, 0.1, 100000);
Game.renderer = new THREE.WebGLRenderer({antialias:true});
Game.renderer.setSize(screen.width,screen.height);
document.body.appendChild(Game.renderer.domElement);
Game.addObject = function(object){
	Game.objects.push(object);
	if(object.static == true){
		Game.scene.add(object);
	}
	else{
		Game.scenecontainer.add(object);
	}
}
Game.removeObject = function(object){
	Game.objects.remove(object);
	if(object.static == true){
		Game.scene.remove(object);
	}
	else{
		Game.scenecontainer.remove(object);
	}
}
Game.update = function(){
	Main.level.update();
	for(var i = 0; i < Game.objects.length; i++){
		if(Game.objects[i].update != undefined){
			Game.objects[i].update(Game.clock.getDelta());
		}
	}
	Game.renderer.render(Game.scene,Game.camera);
	if(Main.paused != true){
	requestAnimationFrame(Game.update);
	}

}
};