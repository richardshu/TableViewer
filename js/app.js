// Set the default landing page to the round table
if (!location.hash) {
	location.hash = "#round";
}

updateContent();

// Updates content dynamically based on the fragment identifier
function updateContent() {
	const tableSizeContainer = document.getElementById("table-size-container");
	var fragmentId = location.hash.substr(1);
	tableSizeContainer.innerHTML = getContent(fragmentId);
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

window.addEventListener("hashchange", updateContent);