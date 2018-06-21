// Set the default landing page to the round tables link
if (!location.hash) {
	location.hash = "#round";
}

updateContent();

// Updates content dynamically based on the fragment identifier
function updateContent() {
	const tableSizeContainer = document.getElementById("table-size-container");
	var fragmentId = location.hash.substr(1);

	/* Call getContent() asynchronously. This means that 
	function(content) will be called later on rather than now. */
	getContent(fragmentId, function(content) {
		tableSizeContainer.innerHTML = content;
	});
	setActiveLink(fragmentId);
};

// Gets the appropriate content for the given fragment identifier
function getContent(fragmentId, callback) {
	fetchFile(fragmentId + ".html", callback);
}

/*
* Encapsulates an HTTP GET request using XMLHttpRequest.
* Fetches the file at the given path and then calls 
* the callback with the text content of the file.
*/
function fetchFile(filepath, callback) {

	// Create a new AJAX request for fetching the partial HTML file
	var request = new XMLHttpRequest();

	// Call the callback with the content loaded from the file
	request.onload = function() {
		callback(request.responseText);
	}

	// Fetch the partial HTML file for the given fragment ID
	request.open("GET", filepath);
	request.send(null);
}


// Sets the "active" class on the active navigation link
function setActiveLink(fragmentId) {
	const navbar = document.getElementById("navbar").children;
	for (var i = 0; i < navbar.length; i++) {
		var link = navbar[i];
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