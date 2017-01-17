function ship(){
    geometry = new THREE.Geometry();
    v1 = new THREE.Vector3(-0.05, -0.05, -0.1);
    v2 = new THREE.Vector3(0.05, -0.05, -0.1);
    v3 = new THREE.Vector3(-0.1, -0.1, 0);
    v4 = new THREE.Vector3(0.1, -0.1, 0);
    v5 = new THREE.Vector3(-0.1, 0.1, 0);
    v6 = new THREE.Vector3(0.1, 0.1, 0);
    v7 = new THREE.Vector3(-0.045, -0.05, -0.1);
    v8 = new THREE.Vector3(0.045, -0.05, -0.1);
    v9 = new THREE.Vector3(-0.095, 0.1, 0);
    v10 = new THREE.Vector3(0.095, 0.1, 0);
    geometry.vertices.push(v1);
    geometry.vertices.push(v2);
    geometry.vertices.push(v3);
    geometry.vertices.push(v4);
    geometry.vertices.push(v5);
    geometry.vertices.push(v6);
    geometry.vertices.push(v7);
    geometry.vertices.push(v8);
    geometry.vertices.push(v9);
    geometry.vertices.push(v10);
    geometry.faces.push(new THREE.Face3(3, 1, 2));
    geometry.faces.push(new THREE.Face3(0, 2, 1));
    geometry.faces.push(new THREE.Face3(0, 6, 8));
    geometry.faces.push(new THREE.Face3(0, 8, 4));
    geometry.faces.push(new THREE.Face3(7, 1, 5));
    geometry.faces.push(new THREE.Face3(7, 5, 9));
    geometry.computeFaceNormals();
    /*throttleoutlinegeom = new THREE.Geometry();
    throttleoutlinegeom.vertices.push(new THREE.Vector3(-0.04,0.05,-0.1));
    throttleoutlinegeom.vertices.push(new THREE.Vector3(-0.05,0.05,-0.1));
    throttleoutlinegeom.vertices.push(new THREE.Vector3(-0.05,0.05,-0.1));
    throttleoutlinegeom.vertices.push(new THREE.Vector3(-0.05,-0.05,-0.1));
    throttleoutlinegeom.vertices.push(new THREE.Vector3(-0.05,-0.05,-0.1));
    throttleoutlinegeom.vertices.push(new THREE.Vector3(-0.04,-0.05,-0.1));
    throttleoutlinegeom.vertices.push(new THREE.Vector3(-0.04,-0.05,-0.1));
    throttleoutlinegeom.vertices.push(new THREE.Vector3(-0.04,0.05,-0.1));
    throttleoutline = new THREE.LineSegments(throttleoutlinegeom,new THREE.LineBasicMaterial({color:0x29b6f6,transparent:true,opacity:0.5}));
    throttleoutline.position.x = -0.045;
    throttleoutline.position.z = -0.1;
    throttlemesh = new THREE.Mesh(new THREE.PlaneGeometry(0.005,0.05),new THREE.MeshBasicMaterial({color:0x29b6f6,transparent:true,opacity:0.5,side:THREE.DoubleSide}));
    throttlemesh.position.x = -0.045;
    throttlemesh.position.z = -0.1;*/
    shipMesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        color: 0xaaaaaa,
        shading: THREE.SmoothShading,
        metalness: 1
    }));
    //shipMesh.add(throttlemesh);
    //shipMesh.add(throttleoutline);
    shipLight = new THREE.PointLight(0xffffff, 1, 0.5);
    /*reticlemap = new THREE.ImageUtils.loadTexture("media/reticle.png");
    reticlemat = new THREE.SpriteMaterial({map:reticlemap,color:0x29b6f6});
    reticle = new THREE.Sprite(reticlemat);
    reticle.position.z = -10;
    targetmap = new THREE.ImageUtils.loadTexture("media/target.png");
    targetmat = new THREE.SpriteMaterial({map:targetmap,color:0x29b6f6});
    targetobj = new THREE.Sprite(targetmat);
    accelmap = new THREE.ImageUtils.loadTexture("media/accel.png");
    accelmat = new THREE.SpriteMaterial({map:accelmap,color:0xffffff,transparent:true});
    accel = new THREE.Sprite(accelmat);
    accel.position.z = -11;
    shipMesh.add(reticle);
    shipMesh.add(accel);*/
    shipMesh.add(shipLight);
    return shipMesh;
}