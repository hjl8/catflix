window.onload = function () {
	let pev = document.querySelector('.content div:last-child .pve'),
		next = document.querySelector('.content div:last-child .next'),
		ul = document.querySelector('.content div:last-child ul'),
		x=0;
		
	pev.onclick = function () {
	    x += 100;
	    ul.style.transform = `translateX(${x}px)`;
	    if (x == 0) {
	        pev.style.display = 'none';
	    }
	
	    if (x <= 0) {
	        next.style.display = 'block';
	    }
	}
	
	next.onclick = function () {
	    x -= 100;
	    ul.style.transform = `translateX(${x}px)`;
	    if (x != 0) {
	        pev.style.display = 'block';
	        next.style.display = 'block';
	    }
	    /* if (x < -150) {
	        next.style.display = 'none';
	    } */
	}
}