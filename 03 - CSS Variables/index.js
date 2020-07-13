var inputs = document.querySelectorAll('input');
function changeValue() {
    var root = document.documentElement;
    var sizing = this.dataset.sizing || '';
    root.style.setProperty("--" + this.id, "" + this.value + sizing);
}
inputs.forEach(function (input) { return input.addEventListener('change', changeValue); });
//# sourceMappingURL=index.js.map