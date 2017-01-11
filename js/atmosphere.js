createAtmosphereMaterial	= function(){
	var vertexShader	= [
		'varying vec3	vVertexWorldPosition;',
		'varying vec3	vVertexNormal;',

		'varying vec4	vFragColor;',

		'void main(){',
		'	vVertexNormal	= normalize(normalMatrix * normal);',

		'	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;',

		'	// set gl_Position',
		'	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
		'}',

		].join('\n')
	var fragmentShader	= [
		'uniform vec3	glowColor;',
		'uniform float	coeficient;',
		'uniform float	power;',

		'varying vec3	vVertexNormal;',
		'varying vec3	vVertexWorldPosition;',

		'varying vec4	vFragColor;',

		'void main(){',
		'	vec3 worldCameraToVertex= vVertexWorldPosition - cameraPosition;',
		'	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;',
		'	viewCameraToVertex	= normalize(viewCameraToVertex);',
		'	float intensity		= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);',
		'	gl_FragColor		= vec4(glowColor, intensity);',
		'}',
	].join('\n')

	// create custom material from the shader code above
	//   that is within specially labeled script tags
	var material	= new THREE.ShaderMaterial({
		uniforms: { 
			coeficient	: {
				type	: "f", 
				value	: 1.0
			},
			power		: {
				type	: "f",
				value	: 2
			},
			glowColor	: {
				type	: "c",
				value	: new THREE.Color('pink')
			},
		},
		vertexShader	: vertexShader,
		fragmentShader	: fragmentShader,
		//blending	: THREE.AdditiveBlending,
		transparent	: true
		
	});
	return material
}
dilateGeometry	= function(geometry, length){
	// gather vertexNormals from geometry.faces
	var vertexNormals	= [];
	for(var i = 0; i < geometry.faces.length; i++){
		face = geometry.faces[i];
		if( face instanceof THREE.Face4 ){
			vertexNormals[face.a]	= face.vertexNormals[0];
			vertexNormals[face.b]	= face.vertexNormals[1];
			vertexNormals[face.c]	= face.vertexNormals[2];
			vertexNormals[face.d]	= face.vertexNormals[3];		
		}else if( face instanceof THREE.Face3 ){
			vertexNormals[face.a]	= face.vertexNormals[0];
			vertexNormals[face.b]	= face.vertexNormals[1];
			vertexNormals[face.c]	= face.vertexNormals[2];
		}else	console.assert(false);
	}
	// modify the vertices according to vertextNormal
	for(var i = 0; i < geometry.vertices.length; i++){
		var vertexNormal = vertexNormals[i];
		if (typeof vertexNormal === 'undefined') {
    		console.log("NOT DEFINED AT "+i);
    		geometry.vertices[i].y += length * (Math.abs(geometry.vertices[i].y)/geometry.vertices[i].y);
		}
		else{
		geometry.vertices[i].x	+= vertexNormal.x * length;
		geometry.vertices[i].y	+= vertexNormal.y * length;
		geometry.vertices[i].z	+= vertexNormal.z * length;
		}
	}	
};
function atmosphere(mesh,insidesize,insidecolor,insidec,insidep,outsidesize,outsidecolor,outsidec,outsidep){
	var atmosphere = new THREE.Object3D();
	atmosphere.position = mesh.position.clone();
	var insidegeom = mesh.geometry.clone();
	dilateGeometry(insidegeom,insidesize);
	insidematerial = createAtmosphereMaterial();
	insidematerial.uniforms.glowColor.value = new THREE.Color(insidecolor);
	insidematerial.uniforms.coeficient.value = insidec;
	insidematerial.uniforms.power.value = insidep;
	var insidemesh = new THREE.Mesh(insidegeom,insidematerial);

	var outsidegeom = mesh.geometry.clone();
	dilateGeometry(outsidegeom,outsidesize);
	outsidematerial = createAtmosphereMaterial();
	outsidematerial.uniforms.glowColor.value = new THREE.Color(outsidecolor);
	outsidematerial.uniforms.coeficient.value = outsidec;
	outsidematerial.uniforms.power.value = outsidep;
	outsidematerial.side = THREE.BackSide;
	var outsidemesh = new THREE.Mesh(outsidegeom,outsidematerial);

	atmosphere.add(insidemesh);
	atmosphere.add(outsidemesh);
	return atmosphere;
}