function onLoad() {
	loadInitialProf();
}

function loadInitialProf() {
	var tr = document.createElement("tr");
	tr.appendChild(createProfession(1));
	document.getElementById("skills-container").appendChild(tr);
}

function createProfession(index) {
	var th = document.createElement("th");
	var select = document.createElement("select");
	select.setAttribute("name", "prof" + index);
	select.setAttribute("id", "prof" + index);
	select.setAttribute("index", index);
	select.onchange = function() {
		changedProfession(select);
	};
	var professions = getProfessions();
	var optionNill = document.createElement("option");
	optionNill.setAttribute("value", "-");
	var textNill = document.createTextNode("-");
	optionNill.appendChild(textNill);
	select.appendChild(optionNill);
	for (prof of professions) {
		var option = document.createElement("option");
		option.setAttribute("value", prof);
		var text = document.createTextNode(prof);
		option.appendChild(text);
		select.appendChild(option);
	}
	th.appendChild(select);
	return th;
}

function getProfessions() {
	return professions = ["Carpenter", "Miner"];
}

function addSkill(index, prof) {
	var table = document.getElementById("skills-container");
	if (table.childElementCount == 1) {
		var tr = document.createElement("tr");
		for (i = 0; i < index-1; i++) {
			tr.appendChild(document.createElement("th"));
		}
		tr.appendChild(createSkill(prof, index, 1));
		table.appendChild(tr);
	} else {
		for (trIndex in table.childNodes) {
			tr = table.childNodes[trIndex];
			if (tr.childElementCount < index || tr.childNodes[index].innerHTML == "") {
				for (i = tr.childElementCount; i <= index-1; i++) {
					tr.appendChild(document.createElement("th"));
				}
				tr.appendChild(createSkill(prof, index, trIndex));
			}
		}
	}
}

function createSkill(prof, xIndex, yIndex) {
	var th = document.createElement("th");
	var select = document.createElement("select");
	select.setAttribute("name", "skill" + xIndex + "-" + yIndex);
	select.setAttribute("id", "skill" + xIndex + "-" + yIndex);
	select.onchange = function() {
		changedSkill(select);
	};
	var skills = getSkills(prof);
	var optionNill = document.createElement("option");
	optionNill.setAttribute("value", "-");
	var textNill = document.createTextNode("-");
	optionNill.appendChild(textNill);
	select.appendChild(optionNill);
	for (skill of skills) {
		var option = document.createElement("option");
		option.setAttribute("value", skill);
		var text = document.createTextNode(skill);
		option.appendChild(text);
		select.appendChild(option);
	}
	th.appendChild(select);
	return th;
}

function getSkills(prof) {
	if (prof == "Carpenter") return ["Logging", "Carpentry"];
	if (prof == "Miner") return ["Mining"];
}

function changedProfession(select) {
	console.log(select.value);
	if (select.value != "-") {
		console.log("CHANGED PROF");
		addSkill(select.index, select.value);
	} else {
		console.log("REMOVED PROF");
	}
}

function changedSkill(select) {
	console.log(select.value);
}
