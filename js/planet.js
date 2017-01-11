function planet(radius,segments,texturepath,lighting){
	var geometry = new THREE.SphereGeometry(radius,segments,segments);
	if(lighting == false){
		var material = new THREE.MeshBasicMaterial({color:0xffffff});
	}
	else{
		var material = new THREE.MeshLambertMaterial();
	}
	material.map = THREE.ImageUtils.loadTexture(texturepath);
	var sphere = new THREE.Mesh(geometry,material);
	return sphere;
}