function pointerlock(){
	document.body.requestPointerLock = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock;
	document.body.requestPointerLock();
    
}
function pointerunlock(){
	document.body.exitPointerLock = document.body.exitPointerLock || document.body.mozExitPointerLock || document.body.webkitExitPointerLock;
	document.body.exitPointerLock();
}
pointerlocked = false;
var pointerlockchange = function(event){
	if(document.pointerLockElement === document.body || document.mozPointerLockElement === document.body || document.webkitPointerLockElement === document.body){
		Main.play();
		pointerlocked = true;
	}
	else{
		Main.pause();
		pointerlocked = false;
	}
}
var pointerlockerror = function(event){

}
document.addEventListener('pointerlockchange',pointerlockchange,false);
document.addEventListener('mozpointerlockchange',pointerlockchange,false);
document.addEventListener('webkitpointerlockchange',pointerlockchange,false);

document.addEventListener('pointerlockerror',pointerlockerror,false);
document.addEventListener('mozpointerlockerror',pointerlockerror,false);
document.addEventListener('webkitpointerlockerror',pointerlockerror,false);