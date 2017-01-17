var maxId = 0;
//FOR EVERY THREE.JS OBJECT, THE FOLLOWING MUST BE ADDED.
//type - Type of the object. Projectile, Ship, Immovable, None
//static - Whether or not the object is outside the scene container.
//moving - Whether or not the object has a velocity attribute that needs to be added to the position each frame.
//FOR ALL SHIPS:
function setupShip(object){
  object.velocity = new THREE.Vector3(0,0,0);
  object.moving = true;
  object.throttle = 0; 
  object.throttleUp = 0; //Affected by Controls
  object.throttleDown = 0; //Affected by Controls
  object.retroThruster = 0; 
  object.mainThruster = 0;
  object.this.leftThruster = 0;
  object.rightThruster = 0;
  object.topThruster = 0;
  object.bottomThruster = 0;
  object.retroThrusterOn = -1;
  object.mainThrusterOn = -1;
  object.this.leftThrusterOn = -1;
  object.rightThrusterOn = -1;
  object.topThrusterOn = -1;
  object.bottomThrusterOn = -1;
  object.rollLeft = 0; //Affected by Controls
  object.rollRight = 0; //Affected by Controls
  object.movementX = 0; //Affected by Controls
  object.movementY = 0; //Affected by Controls
  object.rollSpeed = 0;
  object.turnSpeed = 0;
  object.mainSpeed = 0;
  object.turnHavocSpeed = 0;
  object.rollHavocSpeed = 0;
  object.throttleSpeed = 0;
  object.thrustSpeed = 0;
  object.mainChangeSpeed = 0;
  object.thrustChangeSpeed = 0;
  object.movementChangeSpeed = 0;
  object.rollChangeSpeed = 0;
  object.throttleChangeSpeed = 0;
  object.straightenSpeed = 0;
  object.cameracontainer = new THREE.Object3D();
  object.tX = 0;
  object.tY = 0;
  object.tZ = 0;
  object.add(object.cameracontainer);
  object.update = function(delta){
    this.throttle += this.throttleChangeSpeed*delta*(this.throttleUp-this.throttleDown);
    if(this.throttle < 0){
      this.throttle = 0;
    }
    if(this.throttle > 100){
      this.throttle = 100;
    }
    this.tX += this.movementX;
    this.tY += this.movementY;
    this.tZ += (this.rollRight-this.rollLeft)*delta;
    this.cameracontainer.rotateX(this.movementY * -1*this.turnHavocSpeed*delta);
    this.cameracontainer.rotateY(this.movementX * -1*this.turnHavocSpeed*delta);
    this.cameracontainer.rotateZ((this.rollRight-this.rollLeft)*-1*this.rollHavocSpeed*delta);
    this.cameracontainer.rotation.x /= this.straightenSpeed*delta;
    this.cameracontainer.rotation.y /= this.straightenSpeed*delta;
    this.cameracontainer.rotation.z /= this.straightenSpeed*delta;
    this.tX /= this.movementChangeSpeed*delta;
    this.tY /= this.movementChangeSpeed*delta;
    this.tZ /= this.rollChangeSpeed*delta;
    this.rotateX(this.tX * this.turnSpeed*delta);
    this.rotateY(this.tY * this.turnSpeed*delta);
    this.rotateZ(this.tZ * this.rollSpeed*delta);
    var target = new THREE.Vector3(0,0,-this.throttle);
        var actual = new THREE.Vector3();
        //console.log(velocity.z);
        actual.copy(testmesh.velocity);
        //console.log(actual.z);
        testmesh.worldToLocal(actual);
        //console.log(actual.z);
        this.position.add(testmesh.velocity.multiplyScalar(this.throttleSpeed));
        ////console.log(actual.x);
        var targetX = target.x - actual.x;
        var targetY = target.y - actual.y;
        var targetZ = target.z - actual.z;
        //console.log(actual.z);
        actual.x+=(this.this.leftThruster*delta*0.25)-(rightThruster*delta*0.25);
        ////console.log(actual.x);
        actual.y+=(bottomThruster*delta*0.25)-(topThruster*delta*0.25);
        actual.z+=(retroThruster*delta*0.5)-(mainThruster*delta*0.5);
        //console.log(actual.z);
        retroThruster += retroThrusterOn*20*delta;
        mainThruster += mainThrusterOn*20*delta;
        this.leftThruster += this.leftThrusterOn*1000*delta;
        rightThruster += rightThrusterOn*1000*delta;
        topThruster += topThrusterOn*1000*delta;
        bottomThruster += bottomThrusterOn*1000*delta;
        if(retroThruster < 0){
            retroThruster = 0;
        }
        if(retroThruster > 100){
            retroThruster = 100;
        }
        if(mainThruster < 0){
            mainThruster = 0;
        }
        if(mainThruster > 100){
            mainThruster = 100;
        }
        if(this.leftThruster < 0){
            this.leftThruster = 0;
        }
        if(this.leftThruster > 100){
            this.leftThruster = 100;
        }
        if(rightThruster < 0){
            rightThruster = 0;
        }
        if(rightThruster > 100){
            rightThruster = 100;
        }
        if(topThruster < 0){
            topThruster = 0;
        }
        if(topThruster > 100){
            topThruster = 100;
        }
        if(bottomThruster < 0){
            bottomThruster = 0;
        }
        if(bottomThruster > 100){
            bottomThruster = 100;
        }
        if(actual.x == 0){
            ////console.log("we're good!");
        }
        else{
            if(Math.abs(actual.x) < delta*0.25*(100/3)){
                ////console.log("within 1/30 of target");
                rightThrusterOn = -1;
                this.leftThrusterOn = -1;
                if(actual.x > 0 && rightThruster == 0){
                    rightThruster = actual.x/(0.25*delta);
                }
                else if(this.leftThruster == 0){
                    this.leftThruster = -actual.x/(0.25*delta);
                }
            }
            else{
                //if "areas" of both, powered off, is within 1/30, then turn both OFF.
                if(Math.abs(rightarea()+leftarea()+actual.x) < delta*0.25*(100/3)){
                    this.leftThrusterOn = -1;
                    this.rightThrusterOn = -1;
                }
                else{
                    direction = Math.abs(actual.x)/actual.x;
                    if(direction == 1){
                        if(rightonemore()+leftarea()+actual.x < 0){
                            this.leftThrusterOn = -1;
                            rightThrusterOn = -1;
                        }
                        else{
                            this.leftThrusterOn = -1;
                            rightThrusterOn = 1;
                        }
                    }
                    if(direction == -1){
                        if(rightarea()+leftonemore()+actual.x > 0){
                            this.leftThrusterOn = -1;
                            rightThrusterOn = -1;
                        }
                        else{
                            this.leftThrusterOn = 1;
                            rightThrusterOn = -1;
                        }
                    }
                }
            }
        }



        //Top and Bottom
        if(actual.y == 0){
            ////console.log("we're good!");
        }
        else{
            if(Math.abs(actual.y) < delta*0.25*(100/3)){
                ////console.log("within 1/30 of target");
                topThrusterOn = -1;
                bottomThrusterOn = -1;
                if(actual.y > 0 && topThruster == 0){
                    topThruster = actual.y/(0.25*delta);
                }
                else if(bottomThruster == 0){
                    bottomThruster = -actual.y/(0.25*delta);
                }
            }
            else{
                //if "areas" of both, powered off, is within 1/30, then turn both OFF.
                if(Math.abs(bottomarea()+toparea()+actual.y) < delta*0.25*(100/3)){
                    bottomThrusterOn = -1;
                    topThrusterOn = -1;
                }
                else{
                    direction = Math.abs(actual.y)/actual.y;
                    if(direction == 1){
                        if(toponemore()+bottomarea()+actual.y < 0){
                            bottomThrusterOn = -1;
                            topThrusterOn = -1;
                        }
                        else{
                            bottomThrusterOn = -1;
                            topThrusterOn = 1;
                        }
                    }
                    if(direction == -1){
                        if(toparea()+bottomonemore()+actual.y > 0){
                            bottomThrusterOn = -1;
                            topThrusterOn = -1;
                        }
                        else{
                            bottomThrusterOn = 1;
                            topThrusterOn = -1;
                        }
                    }
                }
            }
        }

        //console.log(actual.z);
        //Main and Retro
        if(actual.z == target.z){
            //console.log("we're good!");
        }
        else{
            if(Math.abs(actual.z-target.z) < delta*0.5*(2/3)){
                //console.log("within 1/30 of target");
                mainThrusterOn = -1;
                retroThrusterOn = -1;
                if(-targetZ > 0 && mainThruster == 0){
                    mainThruster = -targetZ/(0.5*delta);
                }
                else if(retroThruster == 0){
                    retroThruster = targetZ/(0.5*delta);
                }
            }
            else{
                //if "areas" of both, powered off, is within 1/30, then turn both OFF.
                if(Math.abs(mainarea()+retroarea()+actual.z-target.z) < delta*0.5*(2/3)){
                    retroThrusterOn = -1;
                    mainThrusterOn = -1;
                }
                else{
                    direction = Math.abs(actual.z-target.z)/(actual.z-target.z);
                    if(direction == 1){
                        if(mainonemore()+retroarea()+actual.z < target.z){
                            //console.log("whaaaa");
                            retroThrusterOn = -1;
                            mainThrusterOn = -1;
                        }
                        else{
                            retroThrusterOn = -1;
                            mainThrusterOn = 1;
                        }
                    }
                    if(direction == -1){
                        if(mainarea()+retroonemore()+actual.z > target.z){
                            //console.log("whaaaa");
                            retroThrusterOn = -1;
                            mainThrusterOn = -1;
                        }
                        else{
                            retroThrusterOn = 1;
                            mainThrusterOn = -1;
                        }
                    }
                }
            }
        }
        //console.log(actual.z);
        ////console.log(actual.x);
        testmesh.localToWorld(actual);
        //console.log(actual.z);
        ////console.log(actual.x);
        testmesh.velocity.copy(actual);
  }
}
function HIDControls(){

}

/*function Thing() {
  this.id = maxId++;
  this.velocity = new THREE.Vector3( 0, 0, 0 );
  this.position = new THREE.Vector3( 0, 0, 0 );
  this.hull = 1000;
}

Thing.prototype.update = function(){};

function Ship() {
  Thing.call(this);
}

Ship.prototype = Object.create(Thing.prototype);
Ship.prototype.fireProjectile = function(){
    console.log("fired a torpedo at Trevor's face.");
};
Ship.prototype.constructor = Ship;

function Projectile(velocity) {
  Thing.call(this);
}

Projectile.prototype = Object.create(Thing.prototype);
Projectile.prototype.constructor = Projectile;

function Box() {
    Thing.call(this);
}

Box.prototype = Object.create(Thing.prototype);
Box.prototype.constructor = Box;*/