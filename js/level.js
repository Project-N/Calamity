function Level(name){
	this.name = name;
	this.objects = [];
	this.objectives = [];
	this.currentobjective = -1;
	this.update = function(){
		if(this.currentobjective == -1){
			this.objectives[0].before();
			this.currentobjective = 0;
		}
		if(this.objectives[this.currentobjective].done()){
			this.objectives[this.currentobjective].after();
			this.objectives[++this.currentobjective].before();
		}
	};
	this.load = function(){};
	this.unload = function(){};
}
function Objective(name){
	this.name = name;
	this.before = function(){};
	this.done = function(){return false};
	this.after = function(){};
}