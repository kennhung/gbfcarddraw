function bannerChange() {
	var e = document.getElementById("slt_dMethod");
	var elementUp = e.options[e.selectedIndex].value;
	if(elementUp == 8) {
		document.getElementById('cotentbanner').innerHTML = '<img src="images/banner_21351_5lwtgff0.png"/>';
	} else if (elementUp == 6){
		document.getElementById('cotentbanner').innerHTML = '<img src="images/banner_21321_8r8r3ana.png"/>';
	}
	else {
		document.getElementById('cotentbanner').innerHTML = '<img src="images/banner_21331_3nfedxu2.png"/>';
	}
	var f = document.getElementById("slt_dMethod2");
	var elementUp2 = f.options[f.selectedIndex].value;
	if(elementUp2 == 1) {
		document.getElementById('cotentbanner2').innerHTML = '<img src="images/banner_21391_9aqkvwtz.png"/>';
	} else if(elementUp2 == 2) {
		document.getElementById('cotentbanner2').innerHTML = '<img src="images/banner_21401_9aqkvwtz.png"/>';
	} else {
		document.getElementById('cotentbanner2').innerHTML = '<img src="images/banner_29360_9aqkvwtz.png"/>';
	}
}