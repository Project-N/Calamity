Game = {};
function resetGame(){
	Game.scene = new THREE.Scene();
	Game.scenecontainer = new THREE.Object3D();
	Game.scene.add(Game.scenecontainer);
	Game.objects = [];
}
Game.scene = new THREE.Scene();
Game.scenecontainer = new THREE.Object3D();
Game.scene.add(Game.scenecontainer);
Game.objects = [];
Game.movingobjects = [];
Game.clock = new THREE.Clock();
Game.camera = new THREE.PerspectiveCamera(60, screen.width/screen.height, 0.1, 100000);
Game.renderer = new THREE.WebGLRenderer({antialias:true});
Game.renderer.setSize(screen.width,screen.height);
Game.addObject = function(object){
	Game.objects.push(object);
	if(object.static == true){
		Game.scene.add(object);
	}
	else{
		Game.scenecontainer.add(object);
	}
	if(object.moving == true){
		Game.movingobjects.push(object);
	}
}
Game.removeObject = function(object){
	Game.objects.splice(Game.objects.indexOf(object),1);
	if(object.static == true){
		Game.scene.remove(object);
	}
	else{
		Game.scenecontainer.remove(object);
	}
	if(object.moving == true){
		Game.movingobjects.splice(Game.movingobjects.indexOf(object),1);
	}
}
Game.update = function(){
	var delta = Game.clock.getDelta();
	Main.level.update();
	for(var i = 0; i < Game.objects.length; i++){
		if(Game.objects[i].update != undefined){
			Game.objects[i].update(delta);
		}
	}
	for(var i = 0; i < Game.movingobjects.length; i++){
		Game.movingobjects[i].position.addScaledVector(Game.movingobjects[i].velocity,delta);
	}
	Game.renderer.render(Game.scene,Game.camera);
	if(Main.paused != true){
	requestAnimationFrame(Game.update);
	}

}
document.addEventListener("DOMContentLoaded",function(event){
	document.body.appendChild(Game.renderer.domElement);
});