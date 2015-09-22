function bannerChange() {
	var e = document.getElementById("slt_dMethod");
	var elementUp = e.options[e.selectedIndex].value;
	if(elementUp == 8) {
		document.getElementById('cotentbanner').innerHTML = '<img src="images/banner_21341_4y0znfsl.png"/>';
	} else {
		document.getElementById('cotentbanner').innerHTML = '<img src="images/banner_21331_3nfedxu2.png"/>';
	}
}