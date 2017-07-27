// Button to generate new divs


$(document).ready(function() {
	$("#createButton").click(function() {
		genBoxes();
	});	

	$("#clearButton").click(function() {
		clearScreen();
	});
});

function genBoxes() {
	var boxInt = 16;
	var boxNum = boxInt * boxInt;
	var cont = [];
	for (var i = 0; i < boxNum; i++) {
		cont.push('<div class="box"></div>');
		$('#boxWrap').html(cont.join(''));
	};
	$('.box').hover(function() {
		$(this).addClass('boxHover');
	}, function() {
		
	});
};


function clearScreen() {
	boxInt = prompt("How many boxes per side?", '16');
	boxSize = 800 / boxInt;
	cont = [];

	$('.box').css({
		height: boxSize + 'px',
		width: boxSize + 'px'
	});
	
	
};