function hover(item){
	let src = item.getAttribute('src');
	let newsrc = src.replace("default","hover");
	item.setAttribute('src', newsrc);
}
function unhover(item){
	let src = item.getAttribute('src');
	let newsrc = src.replace("hover","default");
	item.setAttribute('src', newsrc);
}