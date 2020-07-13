var inputs = document.querySelectorAll('input');
function updateValue() {
    var root = document.documentElement;
    var sizing = this.dataset.sizing || '';
    root.style.setProperty("--" + this.id, "" + this.value + sizing);
}
inputs.forEach(function (input) {
    input.addEventListener('change', updateValue);
    input.addEventListener('mousemove', updateValue);
});
//# sourceMappingURL=index.js.map