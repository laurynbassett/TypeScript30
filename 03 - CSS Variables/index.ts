const inputs: NodeList = document.querySelectorAll('input')

function updateValue() {
  const root = document.documentElement
  const sizing = this.dataset.sizing || ''
  root.style.setProperty(`--${this.id}`, `${this.value}${sizing}`)
}

inputs.forEach(input => {
  input.addEventListener('change', updateValue)
  input.addEventListener('mousemove', updateValue)
})
