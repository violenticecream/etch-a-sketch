
var boxInt = 16;
var boxNum = 256;
var boxSize = 50;

function genBoxes(boxInt) {
	boxSize = 800 / boxInt;
	boxNum = boxInt * boxInt;
	cont = [];
	console.log(boxNum);

// New method to generate grid from js - way better (duh).

	$('#boxWrap').empty();
	for (var i = 0; i < boxNum; i++) {
		$('#boxWrap').append('<div class="box"></div>');
	};

// Old method, too resource-intensive to generate more than 32x32

	// for (var i = 0; i < boxNum; i++) {
	// 	cont.push('<div class="box"></div>');
	// 	$('#boxWrap').html(cont.join(''));
	// };

	$('.box').height(boxSize);
	$('.box').width(boxSize);

	$('.box').hover(function() {
		$(this).addClass('boxHover');
	}, function() {
		
	});
};


function clearScreen() {
	boxInt = prompt("How many dots per side?", '16');
	genBoxes(boxInt);
};

$(document).ready(function() {
	$("#createButton").click(function() {
		genBoxes(16);
		$("#createButton").text('Start Over!');
	});	

	$("#clearButton").click(function() {
		clearScreen();
	});
});

