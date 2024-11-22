window.onload = function () {
    let menu = document.querySelector('.content .menu>ul'),
        pev = document.querySelector('.content .menu>.pve'),
        next = document.querySelector('.content .menu>.next'),
        x = 0;

    pev.onclick = function () {
        x += 50;
        menu.style.transform = `translateX(${x}px)`;
        console.log(menu.style.transform);
        if (x == 0) {
            pev.style.display = 'none';
        }

        if (x <= 0) {
            next.style.display = 'block';
        }
    }

    next.onclick = function () {
        x -= 50;
        menu.style.transform = `translateX(${x}px)`;
        if (x != 0) {
            pev.style.display = 'block';
            next.style.display = 'block';
        }
        if (x < -150) {
            next.style.display = 'none';
        }
    }

    // menu.onmousedown = function (event) {
    //     let mouseX = event.clientX;
    //     // console.log(mouseX)
    //     this.addEventListener('mousemove' , function (e) {
    //         x = e.clientX - mouseX;
    //         menu.style.transform = `translateX(${x}px)`;
    //     })
    // }

    // menu.onmouseup = function () {
    //     this.removeEventListener('mousemove', function (e) {
    //         x = e.clientX - mouseX;
    //         menu.style.transform = `translateX(${x}px)`;
    //     })
    // }
}