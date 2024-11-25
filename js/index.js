window.onload = function() {
	let user = document.querySelector('.header .user'),
		h3 = document.querySelector('.content div:last-child div h3');

	user.onclick = function() {
		let div = document.querySelector('.header .user ~ div');
		if (div.style.display == 'none') {
			div.style.display = 'flex';
		} else {
			div.style.display = 'none';
		}
	}
	
	// document.onclick=function () {
	// 	let div = document.querySelector('.header .user ~ div');
	// 	if (div.style.display != 'none') {
	// 		div.style.display = 'none';
	// 	}
	// }
	
	document.querySelector('.header .search').onclick = function () {
		window.open('../search.html');
	}

	h3.onclick = function() {
		let p = document.querySelector('.content div:last-child div p'),
			div = document.querySelector('.content div:last-child div'),
			i = document.querySelector('.content div:last-child div h3 i');
		if (p.style.display == 'none') {
			p.style.display = 'block';
			div.style.height = '120px';
			i.style.transform = 'rotate(45deg)';
			i.style.color = '#01a2ff';
		} else {
			p.style.display = 'none';
			div.style.height = '68px';
			i.style.transform = 'rotate(-45deg)';
			i.style.color = '#999';
		}
	}
}
