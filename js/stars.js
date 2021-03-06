function skybox(scalar){
	var starcontainer = new THREE.Object3D();
	var i, r = scalar*10, starsGeometry = [ new THREE.Geometry(), new THREE.Geometry() ];
				for ( i = 0; i < 250; i ++ ) {
					var vertex = new THREE.Vector3();
					vertex.x = Math.random() * 2 - 1;
					vertex.y = Math.random() * 2 - 1;
					vertex.z = Math.random() * 2 - 1;
					vertex.multiplyScalar( r );
					starsGeometry[ 0 ].vertices.push( vertex );
				}
				for ( i = 0; i < 1500; i ++ ) {
					var vertex = new THREE.Vector3();
					vertex.x = Math.random() * 2 - 1;
					vertex.y = Math.random() * 2 - 1;
					vertex.z = Math.random() * 2 - 1;
					vertex.multiplyScalar( r );
					starsGeometry[ 1 ].vertices.push( vertex );
				}
				var stars;
				var starsMaterials = [
					new THREE.PointsMaterial( { color: 0xf3ecb5, size: 2, sizeAttenuation: false } ),
					new THREE.PointsMaterial( { color: 0xfaf8e0, size: 1, sizeAttenuation: false } ),
					new THREE.PointsMaterial( { color: 0xfaf8e0, size: 2, sizeAttenuation: false } ),
					new THREE.PointsMaterial( { color: 0xfaf8e0, size: 1, sizeAttenuation: false } ),
					new THREE.PointsMaterial( { color: 0xf3ecb5, size: 2, sizeAttenuation: false } ),
					new THREE.PointsMaterial( { color: 0xfaf8e0, size: 1, sizeAttenuation: false } )
				];
				for ( i = 10; i < 30; i ++ ) {
					stars = new THREE.Points( starsGeometry[ i % 2 ], starsMaterials[ i % 6 ] );
					stars.rotation.x = Math.random() * 6;
					stars.rotation.y = Math.random() * 6;
					stars.rotation.z = Math.random() * 6;
					s = 23 * 10;
					stars.scale.set( s, s, s );
					stars.matrixAutoUpdate = false;
					stars.updateMatrix();
                    starcontainer.add(stars);
				}
	starcontainer.static = true;
    return starcontainer;
}