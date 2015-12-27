function starLegend() {
	var itemArr = ["item4", "item5", "item6", "item7", "item1", "item2", "item3", "item8", "item9", "item10", ];
	var f = document.getElementById("slt_dMethod2");
	var elementUp2 = f.options[f.selectedIndex].value;
	var ssrRecord = document.getElementById('box' + ssrGet);

	//Sword Katana Up
	if (elementUp2 == 1) {
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 10) + 1);
			//Draw Other
			if (upValue < 7) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} 
			//Draw sword katana
			else {
				var classValue = Math.floor((Math.random() * 2) + 1);
				
				if (classValue == 1){
					var rareGate = Math.floor((Math.random() * 100) + 1);
					//Draw R
					if (rareGate <= 82) {
						cardIMG = pickRByClass('sword');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
						document.rNum.Display.value = eval(rNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					} 
					//Draw SR
					else if (rareGate >=83 && rareGate <=97){
						cardIMG = pickSRByClass('sword');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.srNum.Display.value = eval(srNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					}
					//Draw SSR
					else{
						cardIMG = pickSSRByClass('sword');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
						ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
						ssrGet++;
						ssrRecord = document.getElementById('box' + ssrGet);
					}
				}else if (classValue == 2){
					var rareGate = Math.floor((Math.random() * 100) + 1);
					//Draw R
					if (rareGate <= 82) {
						cardIMG = pickRByClass('katana');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
						document.rNum.Display.value = eval(rNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					} 
					//Draw SR
					else if (rareGate >=83 && rareGate <=97){
						cardIMG = pickSRByClass('katana');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.srNum.Display.value = eval(srNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					}
					//Draw SSR
					else{
						cardIMG = pickSSRByClass('katana');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
						ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
						ssrGet++;
						ssrRecord = document.getElementById('box' + ssrGet);
					}
				}
				
			}
		}
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			//Draw SSR
			cardIMG = pickSSRAll();
			var image = document.getElementById(itemArr[x]);
			image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
			document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
			if (cardIMG[4] != ""){
				image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
				document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
			}
			ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
			ssrGet++;
			ssrRecord = document.getElementById('box' + ssrGet);
		} 
		//Draw wand instrument
		else if (upValue == 2) {
			var classValue = Math.floor((Math.random() * 2) + 1);
			
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw SSR
				cardIMG = pickSSRByClass('katana');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
			}else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw SSR
				cardIMG = pickSSRByClass('sword');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		}
				
		
		
	}
	
	
	//Wand Instrument Up
	else if (elementUp2 == 2) {
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 10) + 1);
			//Draw Other
			if (upValue < 7) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} 
			//Draw wand instrument
			else {
				var classValue = Math.floor((Math.random() * 2) + 1);
				
				if (classValue == 1){
					var rareGate = Math.floor((Math.random() * 100) + 1);
					//Draw R
					if (rareGate <= 82) {
						cardIMG = pickRByClass('wand');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
						document.rNum.Display.value = eval(rNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					} 
					//Draw SR
					else if (rareGate >=83 && rareGate <=97){
						cardIMG = pickSRByClass('wand');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.srNum.Display.value = eval(srNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					}
					//Draw SSR
					else{
						cardIMG = pickSSRByClass('wand');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
						ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
						ssrGet++;
						ssrRecord = document.getElementById('box' + ssrGet);
					}
				}else if (classValue == 2){
					var rareGate = Math.floor((Math.random() * 100) + 1);
					//Draw R
					if (rareGate <= 82) {
						cardIMG = pickRByClass('instrument');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
						document.rNum.Display.value = eval(rNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					} 
					//Draw SR
					else if (rareGate >=83 && rareGate <=97){
						cardIMG = pickSRByClass('instrument');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.srNum.Display.value = eval(srNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					}
					//Draw SSR
					else{
						cardIMG = pickSSRByClass('instrument');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
						ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
						ssrGet++;
						ssrRecord = document.getElementById('box' + ssrGet);
					}
				}
				
			}
		}
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			//Draw SSR
			cardIMG = pickSSRAll();
			var image = document.getElementById('item10');
			image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
			document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
			if (cardIMG[4] != ""){
				image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
				document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
			}
			ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
			ssrGet++;
			ssrRecord = document.getElementById('box' + ssrGet);
		} 
		//Draw wand instrument
		else if (upValue == 2) {
			var classValue = Math.floor((Math.random() * 2) + 1);
			
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw SSR
				cardIMG = pickSSRByClass('wand');
				var image = document.getElementById('item10');
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw SR
				cardIMG = pickSSRByClass('instrument');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);

			}
		}					
	}
	
	//Knuckle Bow Up
	else if (elementUp2 == 3) {
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 10) + 1);
			//Draw Other
			if (upValue < 7) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} 
			//Draw wand instrument
			else {
				var classValue = Math.floor((Math.random() * 2) + 1);
				
				if (classValue == 1){
					var rareGate = Math.floor((Math.random() * 100) + 1);
					//Draw R
					if (rareGate <= 82) {
						cardIMG = pickRByClass('knuckle');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
						document.rNum.Display.value = eval(rNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					} 
					//Draw SR
					else if (rareGate >=83 && rareGate <=97){
						cardIMG = pickSRByClass('knuckle');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.srNum.Display.value = eval(srNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					}
					//Draw SSR
					else{
						cardIMG = pickSSRByClass('knuckle');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
						ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
						ssrGet++;
						ssrRecord = document.getElementById('box' + ssrGet);
					}
				}else if (classValue == 2){
					var rareGate = Math.floor((Math.random() * 100) + 1);
					//Draw R
					if (rareGate <= 82) {
						cardIMG = pickRByClass('bow');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
						document.rNum.Display.value = eval(rNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					} 
					//Draw SR
					else if (rareGate >=83 && rareGate <=97){
						cardIMG = pickSRByClass('bow');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.srNum.Display.value = eval(srNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					}
					//Draw SSR
					else{
						cardIMG = pickSSRByClass('bow');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
						ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
						ssrGet++;
						ssrRecord = document.getElementById('box' + ssrGet);
					}
				}
				
			}
		}
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			//Draw SSR
			cardIMG = pickSSRAll();
			var image = document.getElementById('item10');
			image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
			document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
			if (cardIMG[4] != ""){
				image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
				document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
			}
			ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
			ssrGet++;
			ssrRecord = document.getElementById('box' + ssrGet);
		} 
		//Draw wand instrument
		else if (upValue == 2) {
			var classValue = Math.floor((Math.random() * 2) + 1);
			
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw SSR
				cardIMG = pickSSRByClass('knuckle');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
				}
			}else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw SSR
				cardIMG = pickSSRByClass('bow');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
				
		}
		
	
	//Knife Gun Up
	else if (elementUp2 == 4) {
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 10) + 1);
			//Draw Other
			if (upValue < 7) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} 
			//Draw knife gun
			else {
				var classValue = Math.floor((Math.random() * 2) + 1);
				
				if (classValue == 1){
					var rareGate = Math.floor((Math.random() * 100) + 1);
					//Draw R
					if (rareGate <= 82) {
						cardIMG = pickRByClass('knife');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
						document.rNum.Display.value = eval(rNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					} 
					//Draw SR
					else if (rareGate >=83 && rareGate <=97){
						cardIMG = pickSRByClass('knife');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.srNum.Display.value = eval(srNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					}
					//Draw SSR
					else{
						cardIMG = pickSSRByClass('knife');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
						ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
						ssrGet++;
						ssrRecord = document.getElementById('box' + ssrGet);
					}
				}else if (classValue == 2){
					var rareGate = Math.floor((Math.random() * 100) + 1);
					//Draw R
					if (rareGate <= 82) {
						cardIMG = pickRByClass('gun');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
						document.rNum.Display.value = eval(rNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					} 
					//Draw SR
					else if (rareGate >=83 && rareGate <=97){
						cardIMG = pickSRByClass('gun');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.srNum.Display.value = eval(srNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					}
					//Draw SSR
					else{
						cardIMG = pickSSRByClass('gun');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
						ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
						ssrGet++;
						ssrRecord = document.getElementById('box' + ssrGet);
					}
				}
				
			}
		}
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			//Draw SSR
			cardIMG = pickSSRAll();
				var image = document.getElementById('item10');
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		} 
		//Draw wand instrument
		else if (upValue == 2) {
			var classValue = Math.floor((Math.random() * 2) + 1);
			
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw SSR
				cardIMG = pickSSRByClass('knife');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
			}else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw SSR
				if (rareGate <=97){
					cardIMG = pickSSRByClass('gun');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
				

		}
	}
		
	//Spear Axe Up
	else if (elementUp2 == 5) {
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 10) + 1);
			//Draw Other
			if (upValue < 7) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} 
			//Draw knife gun
			else {
				var classValue = Math.floor((Math.random() * 2) + 1);
				
				if (classValue == 1){
					var rareGate = Math.floor((Math.random() * 100) + 1);
					//Draw R
					if (rareGate <= 82) {
						cardIMG = pickRByClass('spear');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
						document.rNum.Display.value = eval(rNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					} 
					//Draw SR
					else if (rareGate >=83 && rareGate <=97){
						cardIMG = pickSRByClass('spear');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.srNum.Display.value = eval(srNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					}
					//Draw SSR
					else{
						cardIMG = pickSSRByClass('spear');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
						ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
						ssrGet++;
						ssrRecord = document.getElementById('box' + ssrGet);
					}
				}else if (classValue == 2){
					var rareGate = Math.floor((Math.random() * 100) + 1);
					//Draw R
					if (rareGate <= 82) {
						cardIMG = pickRByClass('axe');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
						document.rNum.Display.value = eval(rNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					} 
					//Draw SR
					else if (rareGate >=83 && rareGate <=97){
						cardIMG = pickSRByClass('axe');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.srNum.Display.value = eval(srNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
					}
					//Draw SSR
					else{
						cardIMG = pickSSRByClass('axe');
						var image = document.getElementById(itemArr[x]);
						image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
						document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
						if (cardIMG[4] != ""){
							image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
							document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
						}
						ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
						ssrGet++;
						ssrRecord = document.getElementById('box' + ssrGet);
					}
				}
				
			}
		}
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			//Draw SSR
			cardIMG = pickSSRAll();
				var image = document.getElementById('item10');
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		} 
		//Draw wand instrument
		else if (upValue == 2) {
			var classValue = Math.floor((Math.random() * 2) + 1);
			
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw SSR
				cardIMG = pickSSRByClass('spear');
					var image = document.getElementById('item10');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
			}else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw SSR
				cardIMG = pickSSRByClass('axe');
					var image = document.getElementById('item10');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
			}
				
		}
		
	}
	
	
	document.cash.Display.value = eval(cash.Display.value) +3000;
	document.rNum.Display2.value = eval(rNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	document.srNum.Display2.value = eval(srNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	document.ssrNum.Display2.value = eval(ssrNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	
	
	
	if (ssrGet == 100) {
		ssrGet = 1;
	}
}