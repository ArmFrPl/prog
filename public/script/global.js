var area;
var isSelected=0;
var boardJQ;
var board;
var dir ={};
var dest= new Array();
var intervalMain;
//var intervalBall;
var ballJQ;
var ball;
var x=5;
var y=-7; 
var first=true;
var coll= new Array();


for(i=0;i<13;i++){
	coll[i]=dest[54+i];
}

function gameStart(type){
	buildLevel(type);
	buildLevelOne();
	board = new Board(type);
	ball = new Ball();
	$("html").keyup(stop).keydown(movement);
	intervalMain = setInterval(move, 40);

}
function movement(evt){
	if(ball.move && evt.which==32);
	else dir[evt.which]=true;
	dir[1555]=true;
	
}
function stop(evt){
	delete dir[evt.which];
}


function move(evt){
	for (var i in dir) 
		{

			if (!dir.hasOwnProperty(i) && ball.move) continue;
			if(boardJQ.position().left > 0 && i == 37)
			{
				if(!ball.move)ballJQ.css("left",ballJQ.position().left - board.speed+"px");
				boardJQ.css("left", (boardJQ.position().left - board.speed) + "px");
			}

			if(boardJQ.position().left < ($(".container").width() - boardJQ.width()) && i == 39)
			{
				if(!ball.move)ballJQ.css("left",ballJQ.position().left + board.speed+"px");
				boardJQ.css("left", (boardJQ.position().left + board.speed) + "px");
			}
			if(!ball.move && i==32){
				ball.move=true;
				//ball.speed=10;
			}
			
			/*
			if(boardJQ.position().top > 0 && i == 38)
			{
				
			}

			if(boardJQ.position().top < ($(".container").height() - boardJQ.height()) && i == 40)
			{
				
			}*/
		}

		if(ball.move){

				if(ballJQ.position().top<0){
					
					y=-y;
					console.log("top")
				}
				else if(ballJQ.position().left+ballJQ.width()>=700){
					console.log("right");
					x=-x;
				}
				else if(ballJQ.position().left<=0){
					console.log("left");
					x=-x;
				}
				else if(ballJQ.position().top+ballJQ.height()==boardJQ.position().top  && !first &&
						(ballJQ.position().left+ballJQ.width()-1>=boardJQ.position().left && ballJQ.position().left<= boardJQ.position().left+boardJQ.width()-1)){
						y=-y;

						console.log("board");
					// board collision
				}
				else if(ballJQ.position().top+ballJQ.height()>=700)
				{
					clearInterval(intervalMain);
					console.log("bot")
				}
				else if(ballJQ.position().top<215){//collision with level
					for(i=0;i<13;i++){
						if(coll[i]){
						if(ballJQ.position().top<=coll[i].position().top+coll[i].height()
							&& (ballJQ.position().left+ballJQ.width()+1>=coll[i].position().left
								&& ballJQ.position().left-1<=coll[i].position().left+coll[i].width()))
						{
							y=-y;
							coll[i].remove();
							coll[i]=coll[i].attr("id")-13>=0?dest[coll[i].attr("id")-13]:0;
						}
					}
				}
				}

			
				
				ballJQ.css("left",ballJQ.position().left + ball.speed*x);
				ballJQ.css("top",ballJQ.position().top+ ball.speed*y);
				if(first)first=!first;
			
				
			}
    }
