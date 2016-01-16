function bannerChange() {
	var e = document.getElementById("slt_dMethod");
	var elementUp = e.options[e.selectedIndex].value;
	if (elementUp == 5){
		document.getElementById('cotentbanner').innerHTML = '<img src="images/banner_21810_0e1tibka.png"/>';
	}
	else if (elementUp == 6){
		document.getElementById('cotentbanner').innerHTML = '<img src="images/banner_21321_8r8r3ana.png"/>';
	}
	else if (elementUp == 9){
		document.getElementById('cotentbanner').innerHTML = '<img src="images/banner_21890_9efscgin.png"/>';
	}
	else {
		document.getElementById('cotentbanner').innerHTML = '<img src="images/banner_21331_3nfedxu2.png"/>';
	}
}