const inputs: NodeList = document.querySelectorAll('input')

function changeValue() {
  const root = document.documentElement
  const sizing = this.dataset.sizing || ''
  root.style.setProperty(`--${this.id}`, `${this.value}${sizing}`)
}

inputs.forEach(input => input.addEventListener('change', changeValue))
