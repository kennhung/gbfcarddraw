var listRByAttr = {
	'fire': [],
	'earth': [],
	'water': [],
	'wind': [],
	'light': [],
	'dark': []
	}
var listSRByAttr = {
	'fire': [],
	'earth': [],
	'water': [],
	'wind': [],
	'light': [],
	'dark': []
	}
var listSSRByAttr = {
	'fire': [],
	'earth': [],
	'water': [],
	'wind': [],
	'light': [],
	'dark': []
	}
	

var listSSRlimitedByAttr = {
	'release': [],
	'': []
	}
	
var listSSRlimitedNYByAttr = {
	'release': [],
	'': []
	}

	
var cardIMG;

//element section

rList.forEach(function(r) { listRByAttr[r[2]].push(r);
	});
	
function pickRByAttr(attr) {    
	return listRByAttr[attr][Math.floor(Math.random() * listRByAttr[attr].length)];
}

function pickRAll() {    
	return rList[Math.floor(Math.random() * rList.length)];
}

srList.forEach(function(sr) { listSRByAttr[sr[2]].push(sr);
	});
	
function pickSRByAttr(attr) {    
	return listSRByAttr[attr][Math.floor(Math.random() * listSRByAttr[attr].length)];
}
function pickSRAll() {    
	return srList[Math.floor(Math.random() * srList.length)];
}

ssrList.forEach(function(ssr) { listSSRByAttr[ssr[2]].push(ssr);
	});
	
function pickSSRByAttr(attr) {    
	return listSSRByAttr[attr][Math.floor(Math.random() * listSSRByAttr[attr].length)];
}
function pickSSRAll() {    
	return ssrList[Math.floor(Math.random() * ssrList.length)];
}

ssrListLimited.forEach(function(ssrl) { listSSRlimitedByAttr[ssrl[7]].push(ssrl);
	});
	
function pickSSRlimitedByAttr(attr) {    
	return listSSRlimitedByAttr[attr][Math.floor(Math.random() * listSSRlimitedByAttr[attr].length)];
}
function pickSSRlimitedAll() {    
	return ssrListLimited[Math.floor(Math.random() * ssrListLimited.length)];
}

ssrListLimitedNY.forEach(function(ssrl) { listSSRlimitedByAttr[ssrl[7]].push(ssrl);
	});
	
function pickSSRlimitedNYByAttr(attr) {    
	return listSSRlimitedByAttr[attr][Math.floor(Math.random() * listSSRlimitedByAttr[attr].length)];
}
function pickSSRlimitedNYAll() {    
	return ssrListLimited[Math.floor(Math.random() * ssrListLimited.length)];
}



var fvar = [];
var wvar = [];
var evar = [];
var ivar = [];
var lvar = [];
var dvar = [];
var limitedvar = [];