
function arrangement(){
	document.getElementById('calc').innerHTML = '<h1>Hello World!</h1><p>Have a nice day!</p>';
	
}

function calculation(){
	var f = document.getElementById("slt_dMethod");
	var elementUp = f.options[f.selectedIndex].value;
	
	if (elementUp == 1){
		var upSelected = 0;
		for (var x=1; x<17; x++){
			if (fvar[x] == 1){
				upSelected++;
			}
		}
		
		var selectedvar = 0;
		for (var x=1; x<18; x++){
			if (wvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (evar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (ivar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<16; x++){
			if (lvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (dvar[x] == 1){
				selectedvar++;
			}
		}
		var ans = (1.5 / 16 * upSelected) + (1.5 / 76 * selectedvar);
		var ansRB = (50 / 16 * upSelected) + (50 / 76 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你現在選擇的是火Up卡包</p><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}
	else if (elementUp == 2){
		var upSelected = 0;
		for (var x=1; x<18; x++){
			if (wvar[x] == 1){
				upSelected++;
			}
		}
		
		var selectedvar = 0;
		for (var x=1; x<17; x++){
			if (fvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (evar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (ivar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<16; x++){
			if (lvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (dvar[x] == 1){
				selectedvar++;
			}
		}
		var ans = (1.5 / 17 * upSelected) + (1.5 / 75 * selectedvar);
		var ansRB = (50 / 17 * upSelected) + (50 / 75 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你現在選擇的是水Up卡包</p><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}else if (elementUp == 3){
		var upSelected = 0;
		for (var x=1; x<15; x++){
			if (evar[x] == 1){
				upSelected++;
			}
		}
		
		var selectedvar = 0;
		for (var x=1; x<18; x++){
			if (wvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (fvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (ivar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<16; x++){
			if (lvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (dvar[x] == 1){
				selectedvar++;
			}
		}
		var ans = (1.5 / 14 * upSelected) + (1.5 / 78 * selectedvar);
		var ansRB = (50 / 14 * upSelected) + (50 / 78 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你現在選擇的是土Up卡包</p><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}
	else if (elementUp == 4){
		var upSelected = 0;
		for (var x=1; x<17; x++){
			if (ivar[x] == 1){
				upSelected++;
			}
		}
		
		var selectedvar = 0;
		for (var x=1; x<18; x++){
			if (wvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (evar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (fvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<16; x++){
			if (lvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (dvar[x] == 1){
				selectedvar++;
			}
		}
		var ans = (1.5 / 16 * upSelected) + (1.5 / 76 * selectedvar);
		var ansRB = (50 / 16 * upSelected) + (50 / 76 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你現在選擇的是風Up卡包</p><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}
	else if (elementUp == 5){
		var upSelected = 0;
		for (var x=1; x<16; x++){
			if (lvar[x] == 1){
				upSelected++;
			}
		}
		
		var selectedvar = 0;
		for (var x=1; x<18; x++){
			if (wvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (evar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (ivar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (fvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (dvar[x] == 1){
				selectedvar++;
			}
		}
		var ans = (1.5 / 15 * upSelected) + (1.5 / 77 * selectedvar);
		var ansRB = (50 / 15 * upSelected) + (50 / 77 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你現在選擇的是光Up卡包</p><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}
	else if (elementUp == 6){
		var upSelected = 0;
		for (var x=1; x<15; x++){
			if (dvar[x] == 1){
				upSelected++;
			}
		}
		
		var selectedvar = 0;
		for (var x=1; x<18; x++){
			if (wvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (evar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (ivar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (fvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (fvar[x] == 1){
				selectedvar++;
			}
		}
		var ans = (1.5 / 14 * upSelected) + (1.5 / 78 * selectedvar);
		var ansRB = (50 / 14 * upSelected) + (50 / 78 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你現在選擇的是闇Up卡包</p><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}
	else if (elementUp == 7){
		var upSelected = 0;
		
		var selectedvar = 0;
		for (var x=1; x<18; x++){
			if (fvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<18; x++){
			if (wvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (evar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (ivar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<17; x++){
			if (fvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<15; x++){
			if (dvar[x] == 1){
				selectedvar++;
			}
		}
		for (var x=1; x<5; x++){
			if (limitedvar[x] == 1){
				selectedvar++;
			}
		}
		var ans = (6 / 96 * selectedvar);
		var ansRB = (100 / 96 * selectedvar);
		var drawAns = 100 / ans;
		var drawAnsRB = 100 / ansRB;
		document.getElementById('calcResult').innerHTML = upSelected + '<form name="resultbox"><div class="numFont"><p>你現在選擇的是6%卡包，目前6%幾率計算並不是真正的"角色Up"幾率，"角色Up6%"的正確幾率還在研發中</p><p>你普抽抽卡達到期望值的幾率是<input type="text" name="Display" size="6" value="'
		+ ans +'"  disabled>%<br/>相等於你運氣好的話需要<input type="text" name="Display" size="4" value="' 
		+ drawAns + '"  disabled>抽之前就可以抽到目標<br />你抽到SSR的時候抽到目標的幾率是<input type="text" name="Display" size="6" value="'
		+ ansRB + '"  disabled>%<br/>相等於你運氣好的話共見過<input type="text" name="Display" size="2" value="' 
		+ drawAnsRB + '"  disabled>次或之前的彩虹就可以抽到目標。<br />反之運氣差的話可能要抽<input type="text" name="Display" size="4" value="' 
		+ drawAns*2 + '"  disabled>次或以上，見過<input type="text" name="Display" size="2" value="'
		+ drawAnsRB*2 +'"  disabled>次或以上的彩虹才能抽中目標</p></div></form>';
	}
	else {
	document.getElementById('calcResult').innerHTML = '<p class="cText">請重新選擇屬性up的種類</p>';
	}
}


//fire click
function f1click(){
	if (fvar[1] == 1){
		document.getElementById('f1').innerHTML = '<img src="SSR/Fire/1.jpg" />';
		fvar[1] = 0;
	} else {
		document.getElementById('f1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[1] = 1;
	}
}

function f2click(){
	if (fvar[2] == 1){
		document.getElementById('f2').innerHTML = '<img src="SSR/Fire/2.jpg" />';
		fvar[2] = 0;
	} else {
		document.getElementById('f2').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[2] = 1;
	}
}

function f3click(){
	if (fvar[3] == 1){
		document.getElementById('f3').innerHTML = '<img src="SSR/Fire/3.jpg" />';
		fvar[3] = 0;
	} else {
		document.getElementById('f3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[3] = 1;
	}
}

function f4click(){
	if (fvar[4] == 1){
		document.getElementById('f4').innerHTML = '<img src="SSR/Fire/4.jpg" /><img class="overlayImage2" src="characters/SSR/f4.png"/>';
		fvar[4] = 0;
	} else {
		document.getElementById('f4').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[4] = 1;
	}
}

function f5click(){
	if (fvar[5] == 1){
		document.getElementById('f5').innerHTML = '<img src="SSR/Fire/5.jpg" />';
		fvar[5] = 0;
	} else {
		document.getElementById('f5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[5] = 1;
	}
}

function f6click(){
	if (fvar[6] == 1){
		document.getElementById('f6').innerHTML = '<img src="SSR/Fire/6.jpg" /><img class="overlayImage2" src="characters/SSR/f7.png"/>';
		fvar[6] = 0;
	} else {
		document.getElementById('f6').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[6] = 1;
	}
}

function f7click(){
	if (fvar[7] == 1){
		document.getElementById('f7').innerHTML = '<img src="SSR/Fire/7.jpg" /><img class="overlayImage2" src="characters/SSR/f6.png"/>';
		fvar[7] = 0;
	} else {
		document.getElementById('f7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[7] = 1;
	}
}

function f8click(){
	if (fvar[8] == 1){
		document.getElementById('f8').innerHTML = '<img src="SSR/Fire/8.jpg" /><img class="overlayImage2" src="characters/SSR/f3.png"/>';
		fvar[8] = 0;
	} else {
		document.getElementById('f8').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[8] = 1;
	}
}

function f9click(){
	if (fvar[9] == 1){
		document.getElementById('f9').innerHTML = '<img src="SSR/Fire/9.jpg" /><img class="overlayImage2" src="characters/SSR/f1.png"/>';
		fvar[9] = 0;
	} else {
		document.getElementById('f9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[9] = 1;
	}
}

function f10click(){
	if (fvar[10] == 1){
		document.getElementById('f10').innerHTML = '<img src="SSR/Fire/10.jpg" /><img class="overlayImage2" src="characters/SSR/f2.png"/>';
		fvar[10] = 0;
	} else {
		document.getElementById('f10').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[10] = 1;
	}
}

function f11click(){
	if (fvar[11] == 1){
		document.getElementById('f11').innerHTML = '<img src="SSR/Fire/11.jpg" /><img class="overlayImage2" src="characters/SSR/f5.png"/>';
		fvar[11] = 0;
	} else {
		document.getElementById('f11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[11] = 1;
	}
}

function f12click(){
	if (fvar[12] == 1){
		document.getElementById('f12').innerHTML = '<img src="SSR/Fire/12.jpg" /><img class="overlayImage2" src="characters/SSR/f8.png"/>';
		fvar[12] = 0;
	} else {
		document.getElementById('f12').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[12] = 1;
	}
}

function f13click(){
	if (fvar[13] == 1){
		document.getElementById('f13').innerHTML = '<img src="SSR/Fire/13.jpg" />';
		fvar[13] = 0;
	} else {
		document.getElementById('f13').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[13] = 1;
	}
}

function f14click(){
	if (fvar[14] == 1){
		document.getElementById('f14').innerHTML = '<img src="SSR/Fire/14.jpg" />';
		fvar[14] = 0;
	} else {
		document.getElementById('f14').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[14] = 1;
	}
}

function f15click(){
	if (fvar[15] == 1){
		document.getElementById('f15').innerHTML = '<img src="SSR/Fire/15.jpg" />';
		fvar[15] = 0;
	} else {
		document.getElementById('f15').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[15] = 1;
	}
}

function f16click(){
	if (fvar[16] == 1){
		document.getElementById('f16').innerHTML = '<img src="SSR/Fire/16.jpg" />';
		fvar[16] = 0;
	} else {
		document.getElementById('f16').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		fvar[16] = 1;
	}
}







//water click
function w1click(){
	if (wvar[1] == 1){
		document.getElementById('w1').innerHTML = '<img src="SSR/Water/1.jpg" />';
		wvar[1] = 0;
	} else {
		document.getElementById('w1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[1] = 1;
	}
}

function w2click(){
	if (wvar[2] == 1){
		document.getElementById('w2').innerHTML = '<img src="SSR/Water/2.jpg" />';
		wvar[2] = 0;
	} else {
		document.getElementById('w2').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[2] = 1;
	}
}

function w3click(){
	if (wvar[3] == 1){
		document.getElementById('w3').innerHTML = '<img src="SSR/Water/3.jpg" /><img class="overlayImage2" src="characters/SSR/w4.png"/>';
		wvar[3] = 0;
	} else {
		document.getElementById('w3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[3] = 1;
	}
}

function w4click(){
	if (wvar[4] == 1){
		document.getElementById('w4').innerHTML = '<img src="SSR/Water/4.jpg" /><img class="overlayImage2" src="characters/SSR/w6.png"/>';
		wvar[4] = 0;
	} else {
		document.getElementById('w4').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[4] = 1;
	}
}

function w5click(){
	if (wvar[5] == 1){
		document.getElementById('w5').innerHTML = '<img src="SSR/Water/5.jpg" /><img class="overlayImage2" src="characters/SSR/w2.png"/>';
		wvar[5] = 0;
	} else {
		document.getElementById('w5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[5] = 1;
	}
}

function w6click(){
	if (wvar[6] == 1){
		document.getElementById('w6').innerHTML = '<img src="SSR/Water/6.jpg" /><img class="overlayImage2" src="characters/SSR/w1.png"/>';
		wvar[6] = 0;
	} else {
		document.getElementById('w6').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[6] = 1;
	}
}

function w7click(){
	if (wvar[7] == 1){
		document.getElementById('w7').innerHTML = '<img src="SSR/Water/7.jpg" />';
		wvar[7] = 0;
	} else {
		document.getElementById('w7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[7] = 1;
	}
}

function w8click(){
	if (wvar[8] == 1){
		document.getElementById('w8').innerHTML = '<img src="SSR/Water/8.jpg" /><img class="overlayImage2" src="characters/SSR/w5.png"/>';
		wvar[8] = 0;
	} else {
		document.getElementById('w8').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[8] = 1;
	}
}

function w9click(){
	if (wvar[9] == 1){
		document.getElementById('w9').innerHTML = '<img src="SSR/Water/9.jpg" /><img class="overlayImage2" src="characters/SSR/w3.png"/>';
		wvar[9] = 0;
	} else {
		document.getElementById('w9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[9] = 1;
	}
}

function w10click(){
	if (wvar[10] == 1){
		document.getElementById('w10').innerHTML = '<img src="SSR/Water/10.jpg" />';
		wvar[10] = 0;
	} else {
		document.getElementById('w10').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[10] = 1;
	}
}

function w11click(){
	if (wvar[11] == 1){
		document.getElementById('w11').innerHTML = '<img src="SSR/Water/11.jpg" /><img class="overlayImage2" src="characters/SSR/w7.png"/>';
		wvar[11] = 0;
	} else {
		document.getElementById('w11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[11] = 1;
	}
}

function w12click(){
	if (wvar[12] == 1){
		document.getElementById('w12').innerHTML = '<img src="SSR/Water/12.jpg" /><img class="overlayImage2" src="characters/SSR/w8.png"/>';
		wvar[12] = 0;
	} else {
		document.getElementById('w12').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[12] = 1;
	}
}

function w13click(){
	if (wvar[13] == 1){
		document.getElementById('w13').innerHTML = '<img src="SSR/Water/13.jpg" />';
		wvar[13] = 0;
	} else {
		document.getElementById('w13').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[13] = 1;
	}
}

function w14click(){
	if (wvar[14] == 1){
		document.getElementById('w14').innerHTML = '<img src="SSR/Water/14.jpg" />';
		wvar[14] = 0;
	} else {
		document.getElementById('w14').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[14] = 1;
	}
}

function w15click(){
	if (wvar[15] == 1){
		document.getElementById('w15').innerHTML = '<img src="SSR/Water/15.jpg" />';
		wvar[15] = 0;
	} else {
		document.getElementById('w15').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[15] = 1;
	}
}

function w16click(){
	if (wvar[16] == 1){
		document.getElementById('w16').innerHTML = '<img src="SSR/Water/16.jpg" />';
		wvar[16] = 0;
	} else {
		document.getElementById('w16').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[16] = 1;
	}
}

function w17click(){
	if (wvar[17] == 1){
		document.getElementById('w17').innerHTML = '<img src="SSR/Water/17.jpg" />';
		wvar[17] = 0;
	} else {
		document.getElementById('w17').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		wvar[17] = 1;
	}
}








//earth click
function e1click(){
	if (evar[1] == 1){
		document.getElementById('e1').innerHTML = '<img src="SSR/Earth/1.jpg" />';
		evar[1] = 0;
	} else {
		document.getElementById('e1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[1] = 1;
	}
}

function e2click(){
	if (evar[2] == 1){
		document.getElementById('e2').innerHTML = '<img src="SSR/Earth/2.jpg" />';
		evar[2] = 0;
	} else {
		document.getElementById('e2').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[2] = 1;
	}
}

function e3click(){
	if (evar[3] == 1){
		document.getElementById('e3').innerHTML = '<img src="SSR/Earth/3.jpg" /><img class="overlayImage2" src="characters/SSR/e4.png"/>';
		evar[3] = 0;
	} else {
		document.getElementById('e3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[3] = 1;
	}
}

function e4click(){
	if (evar[4] == 1){
		document.getElementById('e4').innerHTML = '<img src="SSR/Earth/4.jpg" />';
		evar[4] = 0;
	} else {
		document.getElementById('e4').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[4] = 1;
	}
}

function e5click(){
	if (evar[5] == 1){
		document.getElementById('e5').innerHTML = '<img src="SSR/Earth/5.jpg" /><img class="overlayImage2" src="characters/SSR/e6.png"/>';
		evar[5] = 0;
	} else {
		document.getElementById('e5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[5] = 1;
	}
}

function e6click(){
	if (evar[6] == 1){
		document.getElementById('e6').innerHTML = '<img src="SSR/Earth/6.jpg" /><img class="overlayImage2" src="characters/SSR/e2.png"/>';
		evar[6] = 0;
	} else {
		document.getElementById('e6').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[6] = 1;
	}
}

function e7click(){
	if (evar[7] == 1){
		document.getElementById('e7').innerHTML = '<img src="SSR/Earth/7.jpg" /><img class="overlayImage2" src="characters/SSR/e1.png"/>';
		evar[7] = 0;
	} else {
		document.getElementById('e7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[7] = 1;
	}
}

function e8click(){
	if (evar[8] == 1){
		document.getElementById('e8').innerHTML = '<img src="SSR/Earth/8.jpg" /><img class="overlayImage2" src="characters/SSR/e3.png"/>';
		evar[8] = 0;
	} else {
		document.getElementById('e8').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[8] = 1;
	}
}

function e9click(){
	if (evar[9] == 1){
		document.getElementById('e9').innerHTML = '<img src="SSR/Earth/9.jpg" />';
		evar[9] = 0;
	} else {
		document.getElementById('e9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[9] = 1;
	}
}

function e10click(){
	if (evar[10] == 1){
		document.getElementById('e10').innerHTML = '<img src="SSR/Earth/10.jpg" /><img class="overlayImage2" src="characters/SSR/e5.png"/>';
		evar[10] = 0;
	} else {
		document.getElementById('e10').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[10] = 1;
	}
}

function e11click(){
	if (evar[11] == 1){
		document.getElementById('e11').innerHTML = '<img src="SSR/Earth/11.jpg" />';
		evar[11] = 0;
	} else {
		document.getElementById('e11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[11] = 1;
	}
}

function e12click(){
	if (evar[12] == 1){
		document.getElementById('e12').innerHTML = '<img src="SSR/Earth/12.jpg" />';
		evar[12] = 0;
	} else {
		document.getElementById('e12').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[12] = 1;
	}
}

function e13click(){
	if (evar[13] == 1){
		document.getElementById('e13').innerHTML = '<img src="SSR/Earth/13.jpg" />';
		evar[13] = 0;
	} else {
		document.getElementById('e13').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[13] = 1;
	}
}

function e14click(){
	if (evar[14] == 1){
		document.getElementById('e14').innerHTML = '<img src="SSR/Earth/14.jpg" />';
		evar[14] = 0;
	} else {
		document.getElementById('e14').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		evar[14] = 1;
	}
}




//Wind click
function i1click(){
	if (ivar[1] == 1){
		document.getElementById('i1').innerHTML = '<img src="SSR/Wind/1.jpg" />';
		ivar[1] = 0;
	} else {
		document.getElementById('i1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[1] = 1;
	}
}

function i2click(){
	if (ivar[2] == 1){
		document.getElementById('i2').innerHTML = '<img src="SSR/Wind/2.jpg" />';
		ivar[2] = 0;
	} else {
		document.getElementById('i2').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[2] = 1;
	}
}

function i3click(){
	if (ivar[3] == 1){
		document.getElementById('i3').innerHTML = '<img src="SSR/Wind/3.jpg" /><img class="overlayImage2" src="characters/SSR/i5.png"/>';
		ivar[3] = 0;
	} else {
		document.getElementById('i3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[3] = 1;
	}
}

function i4click(){
	if (ivar[4] == 1){
		document.getElementById('i4').innerHTML = '<img src="SSR/Wind/4.jpg" /><img class="overlayImage2" src="characters/SSR/i3.png"/>';
		ivar[4] = 0;
	} else {
		document.getElementById('i4').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[4] = 1;
	}
}

function i5click(){
	if (ivar[5] == 1){
		document.getElementById('i5').innerHTML = '<img src="SSR/Wind/5.jpg" /><img class="overlayImage2" src="characters/SSR/i4.png"/>';
		ivar[5] = 0;
	} else {
		document.getElementById('i5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[5] = 1;
	}
}

function i6click(){
	if (ivar[6] == 1){
		document.getElementById('i6').innerHTML = '<img src="SSR/Wind/6.jpg" /><img class="overlayImage2" src="characters/SSR/i1.png"/>';
		ivar[6] = 0;
	} else {
		document.getElementById('i6').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[6] = 1;
	}
}

function i7click(){
	if (ivar[7] == 1){
		document.getElementById('i7').innerHTML = '<img src="SSR/Wind/7.jpg" /><img class="overlayImage2" src="characters/SSR/i6.png"/>';
		ivar[7] = 0;
	} else {
		document.getElementById('i7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[7] = 1;
	}
}

function i8click(){
	if (ivar[8] == 1){
		document.getElementById('i8').innerHTML = '<img src="SSR/Wind/8.jpg" />';
		ivar[8] = 0;
	} else {
		document.getElementById('i8').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[8] = 1;
	}
}

function i9click(){
	if (ivar[9] == 1){
		document.getElementById('i9').innerHTML = '<img src="SSR/Wind/9.jpg" /><img class="overlayImage2" src="characters/SSR/i2.png"/>';
		ivar[9] = 0;
	} else {
		document.getElementById('i9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[9] = 1;
	}
}

function i10click(){
	if (ivar[10] == 1){
		document.getElementById('i10').innerHTML = '<img src="SSR/Wind/10.jpg" /><img class="overlayImage2" src="characters/SSR/i7.png"/>';
		ivar[10] = 0;
	} else {
		document.getElementById('i10').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[10] = 1;
	}
}

function i11click(){
	if (ivar[11] == 1){
		document.getElementById('i11').innerHTML = '<img src="SSR/Wind/11.jpg" /><img class="overlayImage2" src="characters/SSR/i8.png"/>';
		ivar[11] = 0;
	} else {
		document.getElementById('i11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[11] = 1;
	}
}

function i12click(){
	if (ivar[12] == 1){
		document.getElementById('i12').innerHTML = '<img src="SSR/Wind/12.jpg"/>';
		ivar[12] = 0;
	} else {
		document.getElementById('i12').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[12] = 1;
	}
}

function i13click(){
	if (ivar[13] == 1){
		document.getElementById('i13').innerHTML = '<img src="SSR/Wind/13.jpg"/>';
		ivar[13] = 0;
	} else {
		document.getElementById('i13').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[13] = 1;
	}
}

function i14click(){
	if (ivar[14] == 1){
		document.getElementById('i14').innerHTML = '<img src="SSR/Wind/14.jpg"/>';
		ivar[14] = 0;
	} else {
		document.getElementById('i14').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[14] = 1;
	}
}

function i15click(){
	if (ivar[15] == 1){
		document.getElementById('i15').innerHTML = '<img src="SSR/Wind/15.jpg"/>';
		ivar[15] = 0;
	} else {
		document.getElementById('i15').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[15] = 1;
	}
}

function i16click(){
	if (ivar[16] == 1){
		document.getElementById('i16').innerHTML = '<img src="SSR/Wind/16.jpg"/>';
		ivar[16] = 0;
	} else {
		document.getElementById('i16').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		ivar[16] = 1;
	}
}



//Light click
function l1click(){
	if (lvar[1] == 1){
		document.getElementById('l1').innerHTML = '<img src="SSR/Light/1.jpg"/><img class="overlayImage2" src="characters/SSR/l7.png"/>';
		lvar[1] = 0;
	} else {
		document.getElementById('l1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[1] = 1;
	}
}

function l2click(){
	if (lvar[2] == 1){
		document.getElementById('l2').innerHTML = '<img src="SSR/Light/2.jpg"/><img class="overlayImage2" src="characters/SSR/l3.png"/>';
		lvar[2] = 0;
	} else {
		document.getElementById('l2').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[2] = 1;
	}
}

function l3click(){
	if (lvar[3] == 1){
		document.getElementById('l3').innerHTML = '<img src="SSR/Light/3.jpg"/>';
		lvar[3] = 0;
	} else {
		document.getElementById('l3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[3] = 1;
	}
}

function l4click(){
	if (lvar[4] == 1){
		document.getElementById('l4').innerHTML = '<img src="SSR/Light/4.jpg"/><img class="overlayImage2" src="characters/SSR/l3.png"/>';
		lvar[4] = 0;
	} else {
		document.getElementById('l4').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[4] = 1;
	}
}

function l5click(){
	if (lvar[5] == 1){
		document.getElementById('l5').innerHTML = '<img src="SSR/Light/5.jpg"/><img class="overlayImage2" src="characters/SSR/l1.png"/>';
		lvar[5] = 0;
	} else {
		document.getElementById('l5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[5] = 1;
	}
}

function l6click(){
	if (lvar[6] == 1){
		document.getElementById('l6').innerHTML = '<img src="SSR/Light/6.jpg"/><img class="overlayImage2" src="characters/SSR/l6.png"/>';
		lvar[6] = 0;
	} else {
		document.getElementById('l6').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[6] = 1;
	}
}

function l7click(){
	if (lvar[7] == 1){
		document.getElementById('l7').innerHTML = '<img src="SSR/Light/7.jpg"/><img class="overlayImage2" src="characters/SSR/l2.png"/>';
		lvar[7] = 0;
	} else {
		document.getElementById('l7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[7] = 1;
	}
}

function l8click(){
	if (lvar[8] == 1){
		document.getElementById('l8').innerHTML = '<img src="SSR/Light/8.jpg"/>';
		lvar[8] = 0;
	} else {
		document.getElementById('l8').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[8] = 1;
	}
}

function l9click(){
	if (lvar[9] == 1){
		document.getElementById('l9').innerHTML = '<img src="SSR/Light/9.jpg"/><img class="overlayImage2" src="characters/SSR/l5.png"/>';
		lvar[9] = 0;
	} else {
		document.getElementById('l9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[9] = 1;
	}
}

function l10click(){
	if (lvar[10] == 1){
		document.getElementById('l10').innerHTML = '<img src="SSR/Light/10.jpg"/>';
		lvar[10] = 0;
	} else {
		document.getElementById('l10').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[10] = 1;
	}
}

function l11click(){
	if (lvar[11] == 1){
		document.getElementById('l11').innerHTML = '<img src="SSR/Light/11.jpg"/>';
		lvar[11] = 0;
	} else {
		document.getElementById('l11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[11] = 1;
	}
}

function l12click(){
	if (lvar[12] == 1){
		document.getElementById('l12').innerHTML = '<img src="SSR/Light/12.jpg"/>';
		lvar[12] = 0;
	} else {
		document.getElementById('l12').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[12] = 1;
	}
}

function l13click(){
	if (lvar[13] == 1){
		document.getElementById('l13').innerHTML = '<img src="SSR/Light/13.jpg"/>';
		lvar[13] = 0;
	} else {
		document.getElementById('l13').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[13] = 1;
	}
}

function l14click(){
	if (lvar[14] == 1){
		document.getElementById('l14').innerHTML = '<img src="SSR/Light/14.jpg"/>';
		lvar[14] = 0;
	} else {
		document.getElementById('l14').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[14] = 1;
	}
}

function l15click(){
	if (lvar[15] == 1){
		document.getElementById('l15').innerHTML = '<img src="SSR/Light/15.jpg"/>';
		lvar[15] = 0;
	} else {
		document.getElementById('l15').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		lvar[15] = 1;
	}
}





//Dark click
function d1click(){
	if (dvar[1] == 1){
		document.getElementById('d1').innerHTML = '<img src="SSR/Dark/1.jpg"/><img class="overlayImage2" src="characters/SSR/d5.png"/>';
		dvar[1] = 0;
	} else {
		document.getElementById('d1').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[1] = 1;
	}
}

function d2click(){
	if (dvar[2] == 1){
		document.getElementById('d2').innerHTML = '<img src="SSR/Dark/2.jpg"/><img class="overlayImage2" src="characters/SSR/d6.png"/>';
		dvar[2] = 0;
	} else {
		document.getElementById('d2').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[2] = 1;
	}
}

function d3click(){
	if (dvar[3] == 1){
		document.getElementById('d3').innerHTML = '<img src="SSR/Dark/3.jpg"/>';
		dvar[3] = 0;
	} else {
		document.getElementById('d3').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[3] = 1;
	}
}

function d4click(){
	if (dvar[4] == 1){
		document.getElementById('d4').innerHTML = '<img src="SSR/Dark/4.jpg"/>';
		dvar[4] = 0;
	} else {
		document.getElementById('d4').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[4] = 1;
	}
}

function d5click(){
	if (dvar[5] == 1){
		document.getElementById('d5').innerHTML = '<img src="SSR/Dark/5.jpg" /><img class="overlayImage2" src="characters/SSR/d4.png"/>';
		dvar[5] = 0;
	} else {
		document.getElementById('d5').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[5] = 1;
	}
}

function d6click(){
	if (dvar[6] == 1){
		document.getElementById('d6').innerHTML = '<img src="SSR/Dark/6.jpg" /><img class="overlayImage2" src="characters/SSR/d2.png"/>';
		dvar[6] = 0;
	} else {
		document.getElementById('d6').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[6] = 1;
	}
}

function d7click(){
	if (dvar[7] == 1){
		document.getElementById('d7').innerHTML = '<img src="SSR/Dark/7.jpg" /><img class="overlayImage2" src="characters/SSR/d3.png"/>';
		dvar[7] = 0;
	} else {
		document.getElementById('d7').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[7] = 1;
	}
}

function d8click(){
	if (dvar[8] == 1){
		document.getElementById('d8').innerHTML = '<img src="SSR/Dark/8.jpg" /><img class="overlayImage2" src="characters/SSR/d1.png"/>';
		dvar[8] = 0;
	} else {
		document.getElementById('d8').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[8] = 1;
	}
}

function d9click(){
	if (dvar[9] == 1){
		document.getElementById('d9').innerHTML = '<img src="SSR/Dark/9.jpg" /><img class="overlayImage2" src="characters/SSR/d7.png"/>';
		dvar[9] = 0;
	} else {
		document.getElementById('d9').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[9] = 1;
	}
}

function d10click(){
	if (dvar[10] == 1){
		document.getElementById('d10').innerHTML = '<img src="SSR/Dark/10.jpg"/>';
		dvar[10] = 0;
	} else {
		document.getElementById('d10').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[10] = 1;
	}
}

function d11click(){
	if (dvar[11] == 1){
		document.getElementById('d11').innerHTML = '<img src="SSR/Dark/11.jpg"/>';
		dvar[11] = 0;
	} else {
		document.getElementById('d11').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[11] = 1;
	}
}

function d12click(){
	if (dvar[12] == 1){
		document.getElementById('d12').innerHTML = '<img src="SSR/Dark/12.jpg"/>';
		dvar[12] = 0;
	} else {
		document.getElementById('d12').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[12] = 1;
	}
}

function d13click(){
	if (dvar[13] == 1){
		document.getElementById('d13').innerHTML = '<img src="SSR/Dark/13.jpg"/>';
		dvar[13] = 0;
	} else {
		document.getElementById('d13').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[13] = 1;
	}
}

function d14click(){
	if (dvar[14] == 1){
		document.getElementById('d14').innerHTML = '<img src="SSR/Dark/14.jpg"/>';
		dvar[14] = 0;
	} else {
		document.getElementById('d14').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		dvar[14] = 1;
	}
}





//Limited click
function limited01click(){
	if (limitedvar[1] == 1){
		document.getElementById('limited01').innerHTML = '<img src="SSR/limited01.jpg" /><img class="overlayImage2" src="characters/SSR/limited01.png"/>';
		limitedvar[1] = 0;
	} else {
		document.getElementById('limited01').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		limitedvar[1] = 1;
	}
}

function limited02click(){
	if (limitedvar[2] == 1){
		document.getElementById('limited02').innerHTML = '<img src="SSR/limited02.jpg" /><img class="overlayImage2" src="characters/SSR/limited02.png"/>';
		limitedvar[2] = 0;
	} else {
		document.getElementById('limited02').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		limitedvar[2] = 1;
	}
}

function limited03click(){
	if (limitedvar[3] == 1){
		document.getElementById('limited03').innerHTML = '<img src="SSR/limited03.jpg" /><img class="overlayImage2" src="characters/SSR/limited03.png"/>';
		limitedvar[3] = 0;
	} else {
		document.getElementById('limited03').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		limitedvar[3] = 1;
	}
}

function limited04click(){
	if (limitedvar[4] == 1){
		document.getElementById('limited04').innerHTML = '<img src="SSR/limited04.jpg" /><img class="overlayImage2" src="characters/SSR/limited04.png"/>';
		limitedvar[4] = 0;
	} else {
		document.getElementById('limited04').innerHTML += '<img class="overlayBlue" src="images/selected.png"/>';
		limitedvar[4] = 1;
	}
}