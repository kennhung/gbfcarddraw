function drawSR(){
	var srGate = Math.floor((Math.random() * 95) + 1);
	var image = document.getElementById('item1');
	if (srGate <= 12) {
		var dNum = srGate;
		image.innerHTML = '<img src="SR/s' + dNum + '.jpg" width="150"/>';
	} else if (srGate >= 13 && srGate <= 20) {
		var dNum = srGate - 12;
		image.innerHTML = '<img src="SR/n' + dNum + '.jpg" width="150"/>';
	} else if (srGate >= 21 && srGate <= 28) {
		var dNum = srGate - 20;
		image.innerHTML = '<img src="SR/p' + dNum + '.jpg" width="150"/>';
	} else if (srGate >= 29 && srGate <= 32) {
		var dNum = srGate - 28;
		image.innerHTML = '<img src="SR/x' + dNum + '.jpg" width="150"/>';
	} else if (srGate >= 33 && srGate <= 42) {
		var dNum = srGate - 32;
		image.innerHTML = '<img src="SR/w' + dNum + '.jpg" width="150"/>';
	} else if (srGate >= 43 && srGate <= 49) {
		var dNum = srGate - 42;
		image.innerHTML = '<img src="SR/g' + dNum + '.jpg" width="150"/>';
	} else if (srGate >= 50 && srGate <= 61) {
		var dNum = srGate - 49;
		image.innerHTML = '<img src="SR/k' + dNum + '.jpg" width="150"/>';
	} else if (srGate >= 62 && srGate <= 68) {
		var dNum = srGate - 61;
		image.innerHTML = '<img src="SR/b' + dNum + '.jpg" width="150"/>';
	} else if (srGate >= 69 && srGate <= 72) {
		var dNum = srGate - 68;
		image.innerHTML = '<img src="SR/i' + dNum + '.jpg" width="150"/>';
	} else if (srGate >= 73 && srGate <= 75) {
		var dNum = srGate - 68;
		image.innerHTML = '<img src="SR/a' + dNum + '.jpg" width="150"/>';
	} else if (srGate >= 76 && srGate <= 95) {
		var dNum = srGate - 75;
		image.innerHTML = '<img src="SR/m' + dNum + '.jpg" width="150"/>';
	}
	
}	
function drawSSR(){
	var ssrGate = Math.floor((Math.random() * 160) + 1);
	var image = document.getElementById('item1');
	if (ssrGate <= 24) {
		var dNum = ssrGate;
		image.innerHTML = '<img src="SSR/s' + dNum + '.jpg" width="150"/>';
	} else if (ssrGate >= 25 && ssrGate <= 36) {
		var dNum = ssrGate - 24;
		image.innerHTML = '<img src="SSR/n' + dNum + '.jpg" width="150"/>';
	} else if (ssrGate >= 37 && ssrGate <= 46) {
		var dNum = ssrGate - 36;
		image.innerHTML = '<img src="SSR/p' + dNum + '.jpg" width="150"/>';
	} else if (ssrGate >= 47 && ssrGate <= 58) {
		var dNum = ssrGate - 46;
		image.innerHTML = '<img src="SSR/x' + dNum + '.jpg" width="150"/>';
	} else if (ssrGate >= 59 && ssrGate <= 72) {
		var dNum = ssrGate - 58;
		image.innerHTML = '<img src="SSR/w' + dNum + '.jpg" width="150"/>';
	} else if (ssrGate >= 73 && ssrGate <= 80) {
		var dNum = ssrGate - 72;
		image.innerHTML = '<img src="SSR/g' + dNum + '.jpg" width="150"/>';
	} else if (ssrGate >= 81 && ssrGate <= 90) {
		var dNum = ssrGate - 80;
		image.innerHTML = '<img src="SSR/k' + dNum + '.jpg" width="150"/>';
	} else if (ssrGate >= 91 && ssrGate <= 100) {
		var dNum = ssrGate - 90;
		image.innerHTML = '<img src="SSR/b' + dNum + '.jpg" width="150"/>';
	}  else if (ssrGate >= 101 && ssrGate <= 106) {
		var dNum = ssrGate - 100;
		image.innerHTML = '<img src="SSR/i' + dNum + '.jpg" width="150"/>';
	}  else if (ssrGate >= 107 && ssrGate <= 114) {
		var dNum = ssrGate - 106;
		image.innerHTML = '<img src="SSR/a' + dNum + '.jpg" width="150"/>';
	}  else if (ssrGate >= 115 && ssrGate <= 160) {
		var dNum = ssrGate - 114;
		image.innerHTML = '<img src="SSR/m' + dNum + '.jpg" width="150"/>';
	} 
}	