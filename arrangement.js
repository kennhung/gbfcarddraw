
function arrangement(){
	document.getElementById('calc').innerHTML = '<h1>Hello World!</h1><p>Have a nice day!</p>';
	
}

function calculation(){
	var f = document.getElementById("slt_dMethod2");
	var elementUp2 = f.options[f.selectedIndex].value;
	
	if (elementUp2 == 1){
		var upSelected = 0;
		for (var x=1; x<25; x++){
			if (svar[x] == 1){
				upSelected++;
			}
		}
		for (var x=1; x<9; x++){
			if (avar[x] == 1){
				upSelected++;
			}
		}
		
		var selectedvar = 0;
		for (var x=1; x<15; x++){
			if (wvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (ivar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<11; x++){
			if (kvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<11; x++){
			if (bvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<13; x++){
			if (nvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (gvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<13; x++){
			if (pvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<13; x++){
			if (xvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<48; x++){
			if (mvar[x] == 1){
				selectedvar++;
			}
		}
		var ans = (1.5 / 32 * upSelected) + (1.5 / 133 * selectedvar);
		var ansRB = (50 / 32 * upSelected) + (50 / 133 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}
	else if (elementUp2 == 2){
		var upSelected = 0;
		for (var x=1; x<15; x++){
			if (wvar[x] == 1){
				upSelected++;
			}
		}
		for (var x=1; x<9; x++){
			if (ivar[x] == 1){
				upSelected++;
			}
		}
		
		
		var selectedvar = 0;
		for (var x=1; x<25; x++){
			if (svar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (avar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<11; x++){
			if (kvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<11; x++){
			if (bvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<13; x++){
			if (nvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (gvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<13; x++){
			if (pvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<13; x++){
			if (xvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<48; x++){
			if (mvar[x] == 1){
				selectedvar++;
			}
		}
		
		var ans = (1.5 / 22 * upSelected) + (1.5 / 143 * selectedvar);
		var ansRB = (50 / 22 * upSelected) + (50 / 143 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}
	else if (elementUp2 == 3){
		var upSelected = 0;
		for (var x=1; x<11; x++){
			if (kvar[x] == 1){
				upSelected++;
			}
		}
		for (var x=1; x<11; x++){
			if (bvar[x] == 1){
				upSelected++;
			}
		}
		
		
		var selectedvar = 0;
		for (var x=1; x<25; x++){
			if (svar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (avar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (wvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (ivar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<13; x++){
			if (nvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (gvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<13; x++){
			if (pvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<13; x++){
			if (xvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<48; x++){
			if (mvar[x] == 1){
				selectedvar++;
			}
		}
		var ans = (1.5 / 20 * upSelected) + (1.5 / 145 * selectedvar);
		var ansRB = (50 / 20 * upSelected) + (50 / 145 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}
	else if (elementUp2 == 4){
		var upSelected = 0;
		for (var x=1; x<13; x++){
			if (nvar[x] == 1){
				upSelected++;
			}
		}
		for (var x=1; x<9; x++){
			if (gvar[x] == 1){
				upSelected++;
			}
		}
		
		
		var selectedvar = 0;
		for (var x=1; x<25; x++){
			if (svar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (avar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (wvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (ivar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<11; x++){
			if (kvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<11; x++){
			if (bvar[x] == 1){
				selectedvar++;
			}
		}
		
		for (var x=1; x<13; x++){
			if (pvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<13; x++){
			if (xvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<48; x++){
			if (mvar[x] == 1){
				selectedvar++;
			}
		}
		var ans = (1.5 / 20 * upSelected) + (1.5 / 145 * selectedvar);
		var ansRB = (50 / 20 * upSelected) + (50 / 145 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}
	else if (elementUp2 == 5){
		var upSelected = 0;
		for (var x=1; x<13; x++){
			if (pvar[x] == 1){
				upSelected++;
			}
		}
		for (var x=1; x<13; x++){
			if (xvar[x] == 1){
				upSelected++;
			}
		}
		
		
		var selectedvar = 0;
		for (var x=1; x<25; x++){
			if (svar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (avar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (wvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (ivar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<11; x++){
			if (kvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<11; x++){
			if (bvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<13; x++){
			if (nvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<9; x++){
			if (gvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<48; x++){
			if (mvar[x] == 1){
				selectedvar++;
			}
		}
		var ans = (1.5 / 24 * upSelected) + (1.5 / 145 * selectedvar);
		var ansRB = (50 / 24 * upSelected) + (50 / 145 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}
	else {
	document.getElementById('calcResult').innerHTML = '<p class="cText">請重新選擇武器up的種類</p>';
	}
}


//sword click
function s1click(){
	if (svar[1] == 1){
		document.getElementById('s1').innerHTML = '<img src="SSR/s1.jpg" /><img class="overlayImage2" src="characters/SSR/w1.png"/>';
		svar[1] = 0;
		svar[2] = 0;
	} else {
		document.getElementById('s1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		svar[1] = 1;
		svar[2] = 1;
	}
}

function s3click(){
	if (svar[3] == 1){
		document.getElementById('s3').innerHTML = '<img src="SSR/s3.jpg" /><img class="overlayImage2" src="characters/SSR/f1.png"/>';
		svar[3] = 0;
		svar[4] = 0;
	} else {
		document.getElementById('s3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		svar[3] = 1;
		svar[4] = 1;
	}
}

function s5click(){
	if (svar[5] == 1){
		document.getElementById('s5').innerHTML = '<img src="SSR/s5.jpg" />';
		svar[5] = 0;
		svar[6] = 0;
	} else {
		document.getElementById('s5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		svar[5] = 1;
		svar[6] = 1;
	}
}

function s7click(){
	if (svar[7] == 1){
		document.getElementById('s7').innerHTML = '<img src="SSR/s7.jpg" /><img class="overlayImage2" src="characters/SSR/w5.png"/>';
		svar[7] = 0;
		svar[8] = 0;
	} else {
		document.getElementById('s7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		svar[7] = 1;
		svar[8] = 1;
	}
}

function s9click(){
	if (svar[9] == 1){
		document.getElementById('s9').innerHTML = '<img src="SSR/s9.jpg" /><img class="overlayImage2" src="characters/SSR/e2.png"/>';
		svar[9] = 0;
		svar[10] = 0;
	} else {
		document.getElementById('s9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		svar[9] = 1;
		svar[10] = 1;
	}
}

function s11click(){
	if (svar[11] == 1){
		document.getElementById('s11').innerHTML = '<img src="SSR/s11.jpg" /><img class="overlayImage2" src="characters/SSR/e1.png"/>';
		svar[11] = 0;
		svar[12] = 0;
	} else {
		document.getElementById('s11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		svar[11] = 1;
		svar[12] = 1;
	}
}

function s13click(){
	if (svar[13] == 1){
		document.getElementById('s13').innerHTML = '<img src="SSR/s13.jpg" />';
		svar[13] = 0;
		svar[14] = 0;
	} else {
		document.getElementById('s13').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		svar[13] = 1;
		svar[14] = 1;
	}
}

function s15click(){
	if (svar[15] == 1){
		document.getElementById('s15').innerHTML = '<img src="SSR/s15.jpg" /><img class="overlayImage2" src="characters/SSR/l4.png"/>';
		svar[15] = 0;
		svar[16] = 0;
	} else {
		document.getElementById('s15').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		svar[15] = 1;
		svar[16] = 1;
	}
}

function s17click(){
	if (svar[17] == 1){
		document.getElementById('s17').innerHTML = '<img src="SSR/s17.jpg" /><img class="overlayImage2" src="characters/SSR/l1.png"/>';
		svar[17] = 0;
		svar[18] = 0;
	} else {
		document.getElementById('s17').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		svar[17] = 1;
		svar[18] = 1;
	}
}

function s19click(){
	if (svar[19] == 1){
		document.getElementById('s19').innerHTML = '<img src="SSR/s19.jpg" /><img class="overlayImage2" src="characters/SSR/l6.png"/>';
		svar[19] = 0;
		svar[20] = 0;
	} else {
		document.getElementById('s19').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		svar[19] = 1;
		svar[20] = 1;
	}
}

function s21click(){
	if (svar[21] == 1){
		document.getElementById('s21').innerHTML = '<img src="SSR/s21.jpg" /><img class="overlayImage2" src="characters/SSR/d4.png"/>';
		svar[21] = 0;
		svar[22] = 0;
	} else {
		document.getElementById('s21').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		svar[21] = 1;
		svar[22] = 1;
	}
}

function s23click(){
	if (svar[23] == 1){
		document.getElementById('s23').innerHTML = '<img src="SSR/s23.jpg" /><img class="overlayImage2" src="characters/SSR/d2.png"/>';
		svar[23] = 0;
		svar[24] = 0;
	} else {
		document.getElementById('s23').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		svar[23] = 1;
		svar[24] = 1;
	}
}






//katana click
function a1click(){
	if (avar[1] == 1){
		document.getElementById('a1').innerHTML = '<img src="SSR/a1.jpg" />';
		avar[1] = 0;
		avar[2] = 0;
	} else {
		document.getElementById('a1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		avar[1] = 1;
		avar[2] = 1;
	}
}
function a3click(){
	if (avar[3] == 1){
		document.getElementById('a3').innerHTML = '<img src="SSR/a3.jpg" />';
		avar[3] = 0;
		avar[4] = 0;
	} else {
		document.getElementById('a3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		avar[3] = 1;
		avar[4] = 1;
	}
}
function a5click(){
	if (avar[5] == 1){
		document.getElementById('a5').innerHTML = '<img src="SSR/a5.jpg" />';
		avar[5] = 0;
		avar[6] = 0;
	} else {
		document.getElementById('a5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		avar[5] = 1;
		avar[6] = 1;
	}
}
function a7click(){
	if (avar[7] == 1){
		document.getElementById('a7').innerHTML = '<img src="SSR/a7.jpg" /><img class="overlayImage2" src="characters/SSR/l7.png"/>';
		avar[7] = 0;
		avar[8] = 0;
	} else {
		document.getElementById('a7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		avar[7] = 1;
		avar[8] = 1;
	}
}




//wand click
function w1click(){
	if (wvar[1] == 1){
		document.getElementById('w1').innerHTML = '<img src="SSR/w1.jpg" /><img class="overlayImage2" src="characters/SSR/f2.png"/>';
		wvar[1] = 0;
		wvar[2] = 0;
	} else {
		document.getElementById('w1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		wvar[1] = 1;
		wvar[2] = 1;
	}
}

function w3click(){
	if (wvar[3] == 1){
		document.getElementById('w3').innerHTML = '<img src="SSR/w3.jpg" /><img class="overlayImage2" src="characters/SSR/w3.png"/>';
		wvar[3] = 0;
		wvar[4] = 0;
	} else {
		document.getElementById('w3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		wvar[3] = 1;
		wvar[4] = 1;
	}
}

function w5click(){
	if (wvar[5] == 1){
		document.getElementById('w5').innerHTML = '<img src="SSR/w5.jpg" /><img class="overlayImage2" src="characters/SSR/e3.png"/>';
		avar[5] = 0;
		avar[6] = 0;
	} else {
		document.getElementById('w5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		wvar[5] = 1;
		wvar[6] = 1;
	}
}

function w7click(){
	if (wvar[7] == 1){
		document.getElementById('w7').innerHTML = '<img src="SSR/w7.jpg" /><img class="overlayImage2" src="characters/SSR/l2.png"/>';
		wvar[7] = 0;
		wvar[8] = 0;
	} else {
		document.getElementById('w7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		wvar[7] = 1;
		wvar[8] = 1;
	}
}

function w9click(){
	if (wvar[9] == 1){
		document.getElementById('w9').innerHTML = '<img src="SSR/w9.jpg" />';
		wvar[9] = 0;
		wvar[10] = 0;
	} else {
		document.getElementById('w9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		wvar[9] = 1;
		wvar[10] = 1;
	}
}

function w11click(){
	if (wvar[11] == 1){
		document.getElementById('w11').innerHTML = '<img src="SSR/w11.jpg" /><img class="overlayImage2" src="characters/SSR/l5.png"/>';
		wvar[11] = 0;
		wvar[12] = 0;
	} else {
		document.getElementById('w11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		wvar[11] = 1;
		wvar[12] = 1;
	}
}

function w13click(){
	if (wvar[13] == 1){
		document.getElementById('w13').innerHTML = '<img src="SSR/w13.jpg" /><img class="overlayImage2" src="characters/SSR/d3.png"/>';
		wvar[13] = 0;
		wvar[14] = 0;
	} else {
		document.getElementById('w13').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		wvar[13] = 1;
		wvar[14] = 1;
	}
}




//instrument click
function i1click(){
	if (ivar[1] == 1){
		document.getElementById('i1').innerHTML = '<img src="SSR/i1.jpg" /><img class="overlayImage2" src="characters/SSR/f4.png"/>';
		ivar[1] = 0;
		ivar[2] = 0;
	} else {
		document.getElementById('i1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		ivar[1] = 1;
		ivar[2] = 1;
	}
}

function i3click(){
	if (ivar[3] == 1){
		document.getElementById('i3').innerHTML = '<img src="SSR/i3.jpg" /><img class="overlayImage2" src="characters/SSR/l3.png"/>';
		ivar[3] = 0;
		ivar[4] = 0;
	} else {
		document.getElementById('i3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		ivar[3] = 1;
		ivar[4] = 1;
	}
}

function i5click(){
	if (ivar[5] == 1){
		document.getElementById('i5').innerHTML = '<img src="SSR/i5.jpg" /><img class="overlayImage2" src="characters/SSR/e4.png"/>';
		ivar[5] = 0;
		ivar[6] = 0;
	} else {
		document.getElementById('i5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		ivar[5] = 1;
		ivar[6] = 1;
	}
}

function i7click(){
	if (ivar[7] == 1){
		document.getElementById('i7').innerHTML = '<img src="SSR/i7.jpg" /><img class="overlayImage2" src="characters/SSR/i7.png"/>';
		ivar[7] = 0;
		ivar[8] = 0;
	} else {
		document.getElementById('i7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		ivar[7] = 1;
		ivar[8] = 1;
	}
}

//knuckle click
function k1click(){
	if (kvar[1] == 1){
		document.getElementById('k1').innerHTML = '<img src="SSR/k1.jpg" />';
		kvar[1] = 0;
		kvar[2] = 0;
	} else {
		document.getElementById('k1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		kvar[1] = 1;
		kvar[2] = 1;
	}
}

function k3click(){
	if (kvar[3] == 1){
		document.getElementById('k3').innerHTML = '<img src="SSR/k3.jpg" /><img class="overlayImage2" src="characters/SSR/f7.png"/>';
		kvar[3] = 0;
		kvar[4] = 0;
	} else {
		document.getElementById('k3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		kvar[3] = 1;
		kvar[4] = 1;
	}
}

function k5click(){
	if (kvar[5] == 1){
		document.getElementById('k5').innerHTML = '<img src="SSR/k5.jpg" /><img class="overlayImage2" src="characters/SSR/w6.png"/>';
		kvar[5] = 0;
		kvar[6] = 0;
	} else {
		document.getElementById('k5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		kvar[5] = 1;
		kvar[6] = 1;
	}
}

function k7click(){
	if (kvar[7] == 1){
		document.getElementById('k7').innerHTML = '<img src="SSR/k7.jpg" />';
		kvar[7] = 0;
		kvar[8] = 0;
	} else {
		document.getElementById('k7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		kvar[7] = 1;
		kvar[8] = 1;
	}
}

function k9click(){
	if (kvar[9] == 1){
		document.getElementById('k9').innerHTML = '<img src="SSR/k9.jpg" /><img class="overlayImage2" src="characters/SSR/d5.png"/>';
		kvar[9] = 0;
		kvar[10] = 0;
	} else {
		document.getElementById('k9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		kvar[9] = 1;
		kvar[10] = 1;
	}
}





//bow click
function b1click(){
	if (bvar[1] == 1){
		document.getElementById('b1').innerHTML = '<img src="SSR/b1.jpg" />';
		bvar[1] = 0;
		bvar[2] = 0;
	} else {
		document.getElementById('b1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		bvar[1] = 1;
		bvar[2] = 1;
	}
}

function b3click(){
	if (bvar[3] == 1){
		document.getElementById('b3').innerHTML = '<img src="SSR/b3.jpg" />';
		bvar[3] = 0;
		bvar[4] = 0;
	} else {
		document.getElementById('b3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		bvar[3] = 1;
		bvar[4] = 1;
	}
}

function b5click(){
	if (bvar[5] == 1){
		document.getElementById('b5').innerHTML = '<img src="SSR/b5.jpg" />';
		bvar[5] = 0;
		bvar[6] = 0;
	} else {
		document.getElementById('b5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		bvar[5] = 1;
		bvar[6] = 1;
	}
}

function b7click(){
	if (bvar[7] == 1){
		document.getElementById('b7').innerHTML = '<img src="SSR/b7.jpg" />';
		bvar[7] = 0;
		bvar[8] = 0;
	} else {
		document.getElementById('b7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		bvar[7] = 1;
		bvar[8] = 1;
	}
}

function b9click(){
	if (bvar[9] == 1){
		document.getElementById('b9').innerHTML = '<img src="SSR/b9.jpg" /><img class="overlayImage2" src="characters/SSR/i5.png"/>';
		bvar[9] = 0;
		bvar[10] = 0;
	} else {
		document.getElementById('b9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		bvar[9] = 1;
		bvar[10] = 1;
	}
}





//knife click
function n1click(){
	if (nvar[1] == 1){
		document.getElementById('n1').innerHTML = '<img src="SSR/n1.jpg" /><img class="overlayImage2" src="characters/SSR/w2.png"/>';
		nvar[1] = 0;
		nvar[2] = 0;
	} else {
		document.getElementById('n1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		nvar[1] = 1;
		nvar[2] = 1;
	}
}
function n3click(){
	if (nvar[3] == 1){
		document.getElementById('n3').innerHTML = '<img src="SSR/n3.jpg" />';
		nvar[3] = 0;
		nvar[4] = 0;
	} else {
		document.getElementById('n3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		nvar[3] = 1;
		nvar[4] = 1;
	}
}

function n5click(){
	if (nvar[5] == 1){
		document.getElementById('n5').innerHTML = '<img src="SSR/n5.jpg" /><img class="overlayImage2" src="characters/SSR/i4.png"/>';
		nvar[5] = 0;
		nvar[6] = 0;
	} else {
		document.getElementById('n5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		nvar[5] = 1;
		nvar[6] = 1;
	}
}

function n7click(){
	if (nvar[7] == 1){
		document.getElementById('n7').innerHTML = '<img src="SSR/n7.jpg" /><img class="overlayImage2" src="characters/SSR/f6.png"/>';
		nvar[7] = 0;
		nvar[8] = 0;
	} else {
		document.getElementById('n7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		nvar[7] = 1;
		nvar[8] = 1;
	}
}

function n9click(){
	if (nvar[9] == 1){
		document.getElementById('n9').innerHTML = '<img src="SSR/n9.jpg" /><img class="overlayImage2" src="characters/SSR/d6.png"/>';
		nvar[9] = 0;
		nvar[10] = 0;
	} else {
		document.getElementById('n9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		nvar[9] = 1;
		nvar[10] = 1;
	}
}

function n11click(){
	if (nvar[11] == 1){
		document.getElementById('n11').innerHTML = '<img src="SSR/n11.jpg" />';
		nvar[11] = 0;
		nvar[12] = 0;
	} else {
		document.getElementById('n11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		nvar[11] = 1;
		nvar[12] = 1;
	}
}






//gun click
function g1click(){
	if (gvar[1] == 1){
		document.getElementById('g1').innerHTML = '<img src="SSR/g1.jpg" />';
		gvar[1] = 0;
		gvar[2] = 0;
	} else {
		document.getElementById('g1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		gvar[1] = 1;
		gvar[2] = 1;
	}
}
function g3click(){
	if (gvar[3] == 1){
		document.getElementById('g3').innerHTML = '<img src="SSR/g3.jpg" /><img class="overlayImage2" src="characters/SSR/w4.png"/>';
		gvar[3] = 0;
		gvar[4] = 0;
	} else {
		document.getElementById('g3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		gvar[3] = 1;
		gvar[4] = 1;
	}
}
function g5click(){
	if (gvar[5] == 1){
		document.getElementById('g5').innerHTML = '<img src="SSR/g5.jpg" />';
		gvar[5] = 0;
		gvar[6] = 0;
	} else {
		document.getElementById('g5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		gvar[5] = 1;
		gvar[6] = 1;
	}
}
function g7click(){
	if (gvar[7] == 1){
		document.getElementById('g7').innerHTML = '<img src="SSR/g7.jpg" /><img class="overlayImage2" src="characters/SSR/i3.png"/>';
		gvar[7] = 0;
		gvar[8] = 0;
	} else {
		document.getElementById('g7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		gvar[7] = 1;
		gvar[8] = 1;
	}
}






//spear click
function p1click(){
	if (pvar[1] == 1){
		document.getElementById('p1').innerHTML = '<img src="SSR/p1.jpg" /><img class="overlayImage2" src="characters/SSR/i1.png"/>';
		pvar[1] = 0;
		pvar[2] = 0;
	} else {
		document.getElementById('p1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		pvar[1] = 1;
		pvar[2] = 1;
	}
}

function p3click(){
	if (pvar[3] == 1){
		document.getElementById('p3').innerHTML = '<img src="SSR/p3.jpg" /><img class="overlayImage2" src="characters/SSR/f3.png"/>';
		pvar[3] = 0;
		pvar[4] = 0;
	} else {
		document.getElementById('p3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		pvar[3] = 1;
		pvar[4] = 1;
	}
}

function p5click(){
	if (pvar[5] == 1){
		document.getElementById('p5').innerHTML = '<img src="SSR/p5.jpg" /><img class="overlayImage2" src="characters/SSR/e6.png"/>';
		pvar[5] = 0;
		pvar[6] = 0;
	} else {
		document.getElementById('p5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		pvar[5] = 1;
		pvar[6] = 1;
	}
}

function p7click(){
	if (pvar[7] == 1){
		document.getElementById('p7').innerHTML = '<img src="SSR/p7.jpg" /><img class="overlayImage2" src="characters/SSR/i6.png"/>';
		pvar[7] = 0;
		pvar[8] = 0;
	} else {
		document.getElementById('p7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		pvar[7] = 1;
		pvar[8] = 1;
	}
}

function p9click(){
	if (pvar[9] == 1){
		document.getElementById('p9').innerHTML = '<img src="SSR/p9.jpg" />';
		pvar[9] = 0;
		pvar[10] = 0;
	} else {
		document.getElementById('p9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		pvar[9] = 1;
		pvar[10] = 1;
	}
}

function p11click(){
	if (pvar[11] == 1){
		document.getElementById('p11').innerHTML = '<img src="SSR/p11.jpg" /><img class="overlayImage2" src="characters/SSR/f8.png"/>';
		pvar[11] = 0;
		pvar[12] = 0;
	} else {
		document.getElementById('p11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		pvar[11] = 1;
		pvar[12] = 1;
	}
}



//axe click
function x1click(){
	if (xvar[1] == 1){
		document.getElementById('x1').innerHTML = '<img src="SSR/x1.jpg" /><img class="overlayImage2" src="characters/SSR/f5.png"/>';
		xvar[1] = 0;
		xvar[2] = 0;
	} else {
		document.getElementById('x1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		xvar[1] = 1;
		xvar[2] = 1;
	}
}
function x3click(){
	if (xvar[3] == 1){
		document.getElementById('x3').innerHTML = '<img src="SSR/x3.jpg" />';
		xvar[3] = 0;
		xvar[4] = 0;
	} else {
		document.getElementById('x3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		xvar[3] = 1;
		xvar[4] = 1;
	}
}
function x5click(){
	if (xvar[5] == 1){
		document.getElementById('x5').innerHTML = '<img src="SSR/x5.jpg" />';
		xvar[5] = 0;
		xvar[6] = 0;
	} else {
		document.getElementById('x5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		xvar[5] = 1;
		xvar[6] = 1;
	}
}
function x7click(){
	if (xvar[7] == 1){
		document.getElementById('x7').innerHTML = '<img src="SSR/x7.jpg" /><img class="overlayImage2" src="characters/SSR/i2.png"/>';
		xvar[7] = 0;
		xvar[8] = 0;
	} else {
		document.getElementById('x7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		xvar[7] = 1;
		xvar[8] = 1;
	}
}
function x9click(){
	if (xvar[9] == 1){
		document.getElementById('x9').innerHTML = '<img src="SSR/x9.jpg" /><img class="overlayImage2" src="characters/SSR/d1.png"/>';
		xvar[9] = 0;
		xvar[10] = 0;
	} else {
		document.getElementById('x9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		xvar[9] = 1;
		xvar[10] = 1;
	}
}
function x11click(){
	if (xvar[11] == 1){
		document.getElementById('x11').innerHTML = '<img src="SSR/x11.jpg" /><img class="overlayImage2" src="characters/SSR/e5.png"/>';
		xvar[11] = 0;
		xvar[12] = 0;
	} else {
		document.getElementById('x11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		xvar[11] = 1;
		xvar[12] = 1;
	}
}





//summon click
function m1click(){
	if (mvar[1] == 1){
		document.getElementById('m1').innerHTML = '<img src="SSR/m1.jpg" />';
		mvar[1] = 0;
		mvar[2] = 0;
	} else {
		document.getElementById('m1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[1] = 1;
		mvar[2] = 1;
	}
}
function m3click(){
	if (mvar[3] == 1){
		document.getElementById('m3').innerHTML = '<img src="SSR/m3.jpg" />';
		mvar[3] = 0;
		mvar[4] = 0;
	} else {
		document.getElementById('m3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[3] = 1;
		mvar[4] = 1;
	}
}
function m5click(){
	if (mvar[5] == 1){
		document.getElementById('m5').innerHTML = '<img src="SSR/m5.jpg" />';
		mvar[5] = 0;
		mvar[6] = 0;
	} else {
		document.getElementById('m5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[5] = 1;
		mvar[6] = 1;
	}
}
function m7click(){
	if (mvar[7] == 1){
		document.getElementById('m7').innerHTML = '<img src="SSR/m7.jpg" />';
		mvar[7] = 0;
		mvar[8] = 0;
	} else {
		document.getElementById('m7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[7] = 1;
		mvar[8] = 1;
	}
}
function m9click(){
	if (mvar[9] == 1){
		document.getElementById('m9').innerHTML = '<img src="SSR/m9.jpg" />';
		mvar[9] = 0;
		mvar[10] = 0;
	} else {
		document.getElementById('m9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[9] = 1;
		mvar[10] = 1;
	}
}
function m11click(){
	if (mvar[11] == 1){
		document.getElementById('m11').innerHTML = '<img src="SSR/m11.jpg" />';
		mvar[11] = 0;
		mvar[12] = 0;
	} else {
		document.getElementById('m11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[11] = 1;
		mvar[12] = 1;
	}
}
function m13click(){
	if (mvar[13] == 1){
		document.getElementById('m13').innerHTML = '<img src="SSR/m13.jpg" />';
		mvar[13] = 0;
		mvar[14] = 0;
	} else {
		document.getElementById('m13').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[13] = 1;
		mvar[14] = 1;
	}
}
function m15click(){
	if (mvar[15] == 1){
		document.getElementById('m15').innerHTML = '<img src="SSR/m15.jpg" />';
		mvar[15] = 0;
		mvar[16] = 0;
	} else {
		document.getElementById('m15').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[15] = 1;
		mvar[16] = 1;
	}
}
function m17click(){
	if (mvar[17] == 1){
		document.getElementById('m17').innerHTML = '<img src="SSR/m17.jpg" />';
		mvar[17] = 0;
		mvar[18] = 0;
	} else {
		document.getElementById('m17').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[17] = 1;
		mvar[18] = 1;
	}
}
function m19click(){
	if (mvar[19] == 1){
		document.getElementById('m19').innerHTML = '<img src="SSR/m19.jpg" />';
		mvar[19] = 0;
		mvar[20] = 0;
	} else {
		document.getElementById('m19').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[19] = 1;
		mvar[20] = 1;
	}
}
function m21click(){
	if (mvar[21] == 1){
		document.getElementById('m21').innerHTML = '<img src="SSR/m21.jpg" />';
		mvar[21] = 0;
	} else {
		document.getElementById('m21').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[21] = 1;
	}
}
function m22click(){
	if (mvar[22] == 1){
		document.getElementById('m22').innerHTML = '<img src="SSR/m22.jpg" />';
		mvar[22] = 0;
		mvar[23] = 0;
	} else {
		document.getElementById('m22').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[22] = 1;
		mvar[23] = 1;
	}
}
function m24click(){
	if (mvar[24] == 1){
		document.getElementById('m24').innerHTML = '<img src="SSR/m24.jpg" />';
		mvar[24] = 0;
		mvar[25] = 0;
	} else {
		document.getElementById('m24').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[24] = 1;
		mvar[25] = 1;
	}
}
function m26click(){
	if (mvar[26] == 1){
		document.getElementById('m26').innerHTML = '<img src="SSR/m26.jpg" />';
		mvar[26] = 0;
		mvar[27] = 0;
	} else {
		document.getElementById('m26').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[26] = 1;
		mvar[27] = 1;
	}
}
function m28click(){
	if (mvar[28] == 1){
		document.getElementById('m28').innerHTML = '<img src="SSR/m28.jpg" />';
		mvar[28] = 0;
		mvar[29] = 0;
	} else {
		document.getElementById('m28').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[28] = 1;
		mvar[29] = 1;
	}
}
function m30click(){
	if (mvar[30] == 1){
		document.getElementById('m30').innerHTML = '<img src="SSR/m30.jpg" />';
		mvar[30] = 0;
		mvar[31] = 0;
	} else {
		document.getElementById('m30').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[30] = 1;
		mvar[31] = 1;
	}
}
function m32click(){
	if (mvar[32] == 1){
		document.getElementById('m32').innerHTML = '<img src="SSR/m32.jpg" />';
		mvar[32] = 0;
		mvar[33] = 0;
	} else {
		document.getElementById('m32').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[32] = 1;
		mvar[33] = 1;
	}
}
function m34click(){
	if (mvar[34] == 1){
		document.getElementById('m34').innerHTML = '<img src="SSR/m34.jpg" />';
		mvar[34] = 0;
		mvar[35] = 0;
	} else {
		document.getElementById('m34').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[34] = 1;
		mvar[35] = 1;
	}
}
function m36click(){
	if (mvar[36] == 1){
		document.getElementById('m36').innerHTML = '<img src="SSR/m36.jpg" />';
		mvar[36] = 0;
	} else {
		document.getElementById('m36').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[36] = 1;
	}
}
function m37click(){
	if (mvar[37] == 1){
		document.getElementById('m37').innerHTML = '<img src="SSR/m37.jpg" />';
		mvar[37] = 0;
	} else {
		document.getElementById('m37').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[37] = 1;
	}
}
function m38click(){
	if (mvar[38] == 1){
		document.getElementById('m38').innerHTML = '<img src="SSR/m38.jpg" />';
		mvar[38] = 0;
	} else {
		document.getElementById('m38').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[38] = 1;
	}
}
function m39click(){
	if (mvar[39] == 1){
		document.getElementById('m39').innerHTML = '<img src="SSR/m39.jpg" />';
		mvar[39] = 0;
		mvar[40] = 0;
	} else {
		document.getElementById('m39').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[39] = 1;
		mvar[40] = 1;
	}
}
function m41click(){
	if (mvar[41] == 1){
		document.getElementById('m41').innerHTML = '<img src="SSR/m41.jpg" />';
		mvar[41] = 0;
	} else {
		document.getElementById('m41').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[41] = 1;
	}
}
function m42click(){
	if (mvar[42] == 1){
		document.getElementById('m42').innerHTML = '<img src="SSR/m42.jpg" />';
		mvar[42] = 0;
		mvar[43] = 0;
	} else {
		document.getElementById('m42').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[42] = 1;
		mvar[43] = 1;
	}
}
function m44click(){
	if (mvar[44] == 1){
		document.getElementById('m44').innerHTML = '<img src="SSR/m44.jpg" />';
		mvar[44] = 0;
		mvar[45] = 0;
	} else {
		document.getElementById('m44').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[44] = 1;
		mvar[45] = 1;
	}
}
function m46click(){
	if (mvar[46] == 1){
		document.getElementById('m46').innerHTML = '<img src="SSR/m46.jpg" />';
		mvar[46] = 0;
	} else {
		document.getElementById('m46').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[46] = 1;
	}
}
function m47click(){
	if (mvar[47] == 1){
		document.getElementById('m47').innerHTML = '<img src="SSR/m47.jpg" />';
		mvar[47] = 0;
	} else {
		document.getElementById('m47').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		
		mvar[47] = 1;
	}
}