var listRByAttr = {
	'fire': [],
	'earth': [],
	'water': [],
	'wind': [],
	'DL': []
	}
var listSRByAttr = {
	'fire': [],
	'earth': [],
	'water': [],
	'wind': [],
	'DL': []
	}
var listSSRByAttr = {
	'fire': [],
	'earth': [],
	'water': [],
	'wind': [],
	'DL': []
	}
var listSSRlimitedByAttr = {
	'fire': [],
	'earth': [],
	'water': [],
	'wind': [],
	'DL': []
	}
var listRByClass = {
	'sword': [],
	'knife': [],
	'spear': [],
	'axe': [],
	'wand': [],
	'gun': [],
	'knuckle': [],
	'bow': [],
	'instrument': [],
	'katana': [],
	'summon': []
	}
var listSRByClass = {
	'sword': [],
	'knife': [],
	'spear': [],
	'axe': [],
	'wand': [],
	'gun': [],
	'knuckle': [],
	'bow': [],
	'instrument': [],
	'katana': [],
	'summon': []
	}
var listSSRByClass = {
	'sword': [],
	'knife': [],
	'spear': [],
	'axe': [],
	'wand': [],
	'gun': [],
	'knuckle': [],
	'bow': [],
	'instrument': [],
	'katana': [],
	'summon': []
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
ssrListLimited.forEach(function(ssrl) { listSSRlimitedByAttr[ssrl[2]].push(ssrl);
	});
	
function pickSSRlimitedByAttr(attr) {    
	return listSSRlimitedByAttr[attr][Math.floor(Math.random() * listSSRlimitedByAttr[attr].length)];
}
function pickSSRlimitedAll() {    
	return ssrListLimited[Math.floor(Math.random() * ssrListLimited.length)];
}

//class section

rList.forEach(function(r) { listRByClass[r[1]].push(r);
	});
	
function pickRByClass(attr) {    
	return listRByClass[attr][Math.floor(Math.random() * listRByClass[attr].length)];
}

function pickRAll() {    
	return rList[Math.floor(Math.random() * rList.length)];
}

srList.forEach(function(sr) { listSRByClass[sr[1]].push(sr);
	});
	
function pickSRByClass(attr) {    
	return listSRByClass[attr][Math.floor(Math.random() * listSRByClass[attr].length)];
}
function pickSRAll() {    
	return srList[Math.floor(Math.random() * srList.length)];
}

ssrList.forEach(function(ssr) { listSSRByClass[ssr[1]].push(ssr);
	});
	
function pickSSRByClass(attr) {    
	return listSSRByClass[attr][Math.floor(Math.random() * listSSRByClass[attr].length)];
}
function pickSSRAll() {    
	return srList[Math.floor(Math.random() * ssrList.length)];
}


var svar = [];
var avar = [];
var wvar = [];
var ivar = [];
var kvar = [];
var bvar = [];
var nvar = [];
var gvar = [];
var pvar = [];
var xvar = [];
var mvar = [];