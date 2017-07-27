


function genBoxes(boxInt) {
	var boxSize = 800 / boxInt;
	var boxNum = boxInt * boxInt;
	var boxInt = 16;
	var cont = [];
	console.log(boxNum);
	for (var i = 0; i < boxNum; i++) {
		cont.push('<div class="box"></div>');
		$('#boxWrap').html(cont.join(''));
	};

	$('.box').css({
		height: boxSize + 'px',
		width: boxSize + 'px'
	});

	$('.box').hover(function() {
		$(this).addClass('boxHover');
	}, function() {
		
	});
};


function clearScreen() {
	boxInt = prompt("How many boxes per side?", '16');
	genBoxes(boxInt);
};

$(document).ready(function() {
	$("#createButton").click(function() {
		genBoxes(boxInt);
	});	

	$("#clearButton").click(function() {
		clearScreen();
	});
});

