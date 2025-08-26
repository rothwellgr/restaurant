
function renderAbout() {

	const divContent = document.getElementById("content");
	divContent.innerHTML = "";
	divContent.removeAttribute('style');
	console.log("document cleared");

	const p = document.createElement("p");
	p.textContent += "Situated nowhere actual, this is filler to begin work with webpack.";

	divContent.append(p);

	document.body.append(divContent);
}

export { renderAbout };