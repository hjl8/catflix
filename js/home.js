function moveBox(direction) {
    var box = document.getElementById('box');
    if (direction === 'left') {
      box.style.transform = 'translateX(638px)';
    } else if (direction === 'right') {
      box.style.transform = 'translateX(-638px)';
    }
  }