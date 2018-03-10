function Board(type){
	this.type=type;
	this.health=3;
	switch(type){
		case 1: {this.speed = 4;break;}
		case 2: {this.speed = 9;break;}
		case 3: {this.speed = 6;break;}
		default: alert("Something has gone wrong , please Reload !!!");
	}


}


function Ball(){
	this.speed=1;
	this.angle = 270;
	this.move=false;
	this.regen=function(){
		this.angle=(Math.abs(this.angle)%360);
	}

}