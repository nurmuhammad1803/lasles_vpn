window.addEventListener('load', function (e) {
  var bigNav = document.querySelector('.navbar__collapse')
  var button = document.querySelector('.nav__btn')
  var headerContent = document.querySelectorAll('.headerContent')

  function navBar() {
    bigNav.classList.toggle('show'),
      headerContent[0].classList.toggle('hidden')
    headerContent[1].classList.toggle('hidden')
    button.classList.toggle('checked')
  }
  button.addEventListener('click', navBar)
})