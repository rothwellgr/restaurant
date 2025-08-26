
function renderMenu() {

	const divContent = document.getElementById('content');
	divContent.innerHTML = "";
	divContent.removeAttribute('style');
	console.log('document cleared');

	divContent.style.display = 'grid';
	divContent.style.gridTemplateColumns = 'repeat(2, 1fr)';

    for (let i = 0; i < 8; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.style.padding = '10px';
        gridItem.style.textAlign = 'left';
        divContent.appendChild(gridItem);
    }

    const gridItem = document.getElementsByClassName('gridItem');
    gridItem[0].textContent += 'Item 1';
    gridItem[1].textContent += '$0.00';
    gridItem[2].textContent += 'Item 2';
    gridItem[3].textContent += '$0.00';
    gridItem[4].textContent += 'Item 3';
    gridItem[5].textContent += '$0.00';

	document.body.append(divContent);
}

export { renderMenu };