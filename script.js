const sr = ScrollReveal({
  duration: 1000,
  reset: true
})

sr.reveal('h1', {
  origin: 'top',
  distance: '50px',
  duration: '2000',
  scale: 0.5
})

sr.reveal('h2', {
  delay: 500
})

sr.reveal(
  'p',
  {
    delay: 1000
  },
  50
)

let popupBox = document.querySelector('.popup')
function popUp() {
  popupBox.classList.toggle('popup-btn')
}
