// Set the default landing page to the round tables link
if (!location.hash) {
	location.hash = "#round";
}

updateContent();

// Updates content dynamically based on the fragment identifier
function updateContent() {
	const tableSizeContainer = document.getElementById("table-size-container");
	var fragmentId = location.hash.substr(1);
	tableSizeContainer.innerHTML = getContent(fragmentId);
	setActiveLink(fragmentId);
};

// Returns content depending on the current fragment identifier
function getContent(fragmentId) {
	var content = {
		round: "This is the round tables page",
		square: "This is the square tables page",
		rectangle: "This is the rectangle tables page"
	};
	return content[fragmentId];
}


// Sets the "active" class on the active navigation link
function setActiveLink(fragmentId) {
	const tableShapeLinks = document.getElementById("navbar").children;
	for (var i = 0; i < tableShapeLinks.length; i++) {
		var link = tableShapeLinks[i];
		var pageName = link.getAttribute("href").substr(1);
		if (pageName === fragmentId) {
			link.setAttribute("class", "active");
		}
		else {
			link.removeAttribute("class", "active");
		}
		console.log(link);
	}
}

window.addEventListener("hashchange", updateContent);