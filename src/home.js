
function renderHome() {

	const divContent = document.getElementById("content");
	divContent.innerHTML = "";
	divContent.removeAttribute('style');
	console.log("document cleared");

	const header = document.createElement("h1");
	header.textContent += "Webpack template";

	divContent.append(header);

	const blurb = document.createElement("p");
	blurb.textContent += "This is a template for webpack";

	divContent.append(blurb);

	document.body.append(divContent);
}

export { renderHome };