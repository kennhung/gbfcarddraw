function drawR(){
	var rGate = Math.floor((Math.random() * 125) + 1);
	var image = document.getElementById('item1');
	if (rGate <= 16) {
		var dNum = rGate;
		image.innerHTML = '<img src="R/s' + dNum + '.jpg" width="150"/>';
	}
	else if (rGate >= 17 && rGate <= 29) {
		var dNum = rGate - 16;
		image.innerHTML = '<img src="R/n' + dNum + '.jpg" width="150"/>';
	} else if (rGate >= 30 && rGate <= 39) {
		var dNum = rGate - 29;
		image.innerHTML = '<img src="R/p' + dNum + '.jpg" width="150"/>';
	} else if (rGate >= 40 && rGate <= 51) {
		var dNum = rGate - 39;
		image.innerHTML = '<img src="R/x' + dNum + '.jpg" width="150"/>';
	} else if (rGate >= 52 && rGate <= 67) {
		var dNum = rGate - 51;
		image.innerHTML = '<img src="R/w' + dNum + '.jpg" width="150"/>';
	} else if (rGate >= 68 && rGate <= 78) {
		var dNum = rGate - 67;
		image.innerHTML = '<img src="R/g' + dNum + '.jpg" width="150"/>';
	} else if (rGate >= 79 && rGate <= 91) {
		var dNum = rGate - 78;
		image.innerHTML = '<img src="R/k' + dNum + '.jpg" width="150"/>';
	} else if (rGate >= 92 && rGate <= 98) {
		var dNum = rGate - 91;
		image.innerHTML = '<img src="R/b' + dNum + '.jpg" width="150"/>';
	} else if (rGate >= 99 && rGate <= 99) {
		var dNum = rGate - 98;
		image.innerHTML = '<img src="R/i' + dNum + '.jpg" width="150"/>';
	} else if (rGate >= 100 && rGate <= 101) {
		var dNum = rGate - 99;
		image.innerHTML = '<img src="R/a' + dNum + '.jpg" width="150"/>';
	} else if (rGate >= 102 && rGate <= 125) {
		var dNum = rGate - 101;
		image.innerHTML = '<img src="R/m' + dNum + '.jpg" width="150"/>';
	}
	
}	

exports.drawR = drawR;