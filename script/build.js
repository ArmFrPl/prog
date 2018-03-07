//alert("hello")
function buildArea(){
	area = $("<div/>").addClass("container");
	$("body").append(area);
}


function buildMenu(){
	//startBtn
	var start = $("<div/>").addClass("menuBtnMouseOver").attr("id","startBtn");
	$(".container").append(start);
	start.append($("<p/>").text("Start The Game"));
	start.click(function(){
		$(".menuBtnMouseOver").remove();
		buildSelect();
	});
	//levelBtn
	var levels= $("<div/>").addClass("menuBtnMouseOver").attr("id","levelBtn");
	$(".container").append(levels);
	levels.append($("<p/>").text("Levels"));
	//editorBtn
	var editor= $("<div/>").addClass("menuBtnMouseOver").attr("id","editorBtn");
	$(".container").append(editor);
	editor.append($("<p/>").text("Editor"));
	//quitBtn
	var quit =$("<div/>").addClass("menuBtnMouseOver").attr("id","quitBtn");
	$(".container").append(quit);
	quit.append($("<p/>").text("Quit"));
	quit.click(function(){
		window.close();
	});
}
function buildSelect(){
	var header = $("<p/>").attr("id","selHeader").text("Select One of This Boards");
	$(".container").append(header);
	var long = $("<div/>").addClass("board").attr("id","long").text("Long");
	$(".container").append(long);
	var fast = $("<div/>").addClass("board").attr("id","fast").text("Fast");
	$(".container").append(fast);
	var magic = $("<div/>").addClass("board").attr("id","magic").text("Magic");
	$(".container").append(magic);
	long.click(function(){
		isSelected=1;
		$("#pFast").remove();
		$("#pMagic").remove();
		var pLong= $("<div/>").addClass("pForType").attr("id","pLong");
		pLong.append($("<p/>").text("This is text for Long Board"))
		$(".container").append(pLong);
	});
	fast.click(function(){
		isSelected=2;
		$("#pLong").remove();
		$("#pMagic").remove();
		var pFast= $("<div/>").addClass("pForType").attr("id","pFast");
		pFast.append($("<p/>").text("This is text for Fast Board"))
		$(".container").append(pFast);
	});
	magic.click(function(){
		isSelected=3;
		$("#pLong").remove();
		$("#pFast").remove();
		var pMagic= $("<div/>").addClass("pForType").attr("id","pMagic");
		pMagic.append($("<p/>").text("This is text for Magic Board"))
		$(".container").append(pMagic);
	});
	var start = $("<div/>").addClass("selBtn").attr("id","start").append($("<p/>").text("Start"));
	$(".container").append(start);
	var back = $("<div/>").addClass("selBtn").attr("id","back").append($("<p/>").text("Return to Menu"));
	$(".container").append(back);
	back.click(function(){
		$(".board").remove();
		$("#selHeader").remove();
		$(".pForType").remove();
		$(".selBtn").remove();
		buildMenu();
	});
	start.click(function(){
		if(isSelected){
			$(".container").empty();
			gameStart(isSelected);
		}
		else alert("Select the Board");
	});
}
function buildLevel(type){
	$(".container").css("background-color", "rgb(100,100,100)");
	boardJQ = $("<div/>").addClass("gameBoard").attr("id","board"+type);
	$(".container").append(boardJQ);
	ballJQ= $("<div/>").addClass("ball").attr("id","ball");
	$(".container").append(ballJQ);

}


function buildLevelOne(){
	
	for(i=0; i<=77;++i){
		dest[i]= $("<div/>").addClass("dest").attr("id",i);
		dest[i].css("left",12+((i%13)*52)+"px").css("top",50+(~~(i/13)*27)+"px");
		$(".container").append(dest[i]);

	}
	for(i=0;i<13;i++){
	coll[i]=dest[65+i];
}

}