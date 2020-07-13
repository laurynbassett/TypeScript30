const panels: NodeList = document.querySelectorAll('.panel')

function toggleOpen() {
  this.classList.toggle('open')
}

function toggleActive(e: TransitionEvent) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen)
  panel.addEventListener('transitionend', toggleActive)
})
