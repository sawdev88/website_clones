
var
    show = true,
    thButton = document.querySelector('.th'),
    thToolTip = document.querySelector('.thToolTip'),
    bellButton = document.querySelector('.bell'),
    bellToolTip = document.querySelector('.bellToolTip');

thButton.addEventListener('click', function () {



  if (show) {
    bellToolTip.style.display = 'none';
    thToolTip.style.display = 'block';
    show = false;
  } else {
    thToolTip.style.display = 'none';
    show = true;
  }

})

bellButton.addEventListener('click', function () {

  show = true;

  if (show) {
    thToolTip.style.display = 'none';
    bellToolTip.style.display = 'block';
    show = false;
  } else {
    bellToolTip.style.display = 'none';
    show = true;
  }

})

window.addEventListener('click', function () {

  if (show){
    thToolTip.style.display = 'none';
    bellToolTip.style.display = 'none';
  }

})
