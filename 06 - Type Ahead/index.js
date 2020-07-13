var endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
var searchInput = document.querySelector('.search');
var suggestions = document.querySelector('.suggestions');
var places = [];
fetch(endpoint).then(function (blob) { return blob.json(); }).then(function (data) { return places.push.apply(places, data); });
// return number with commas at thousand
function formatNumber(population) {
    return population.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}
// return places that match search query
function findMatches(regex, places) {
    return places.filter(function (place) { return place.city.match(regex) || place.state.match(regex); });
}
// append matches to suggestions list
function filterSuggestions() {
    var query = this.value;
    var regex = new RegExp(query, 'gi');
    var matches = findMatches(regex, places);
    suggestions.innerHTML = matches
        .map(function (place) {
        var population = formatNumber(place.population);
        var city = place.city.replace(regex, "<span class='hl'>$&</span>");
        var state = place.state.replace(regex, "<span class='hl'>$&</span>");
        return "<li><span>" + city + ", " + state + "</span><span>" + population + "</span></li>";
    })
        .join('');
}
searchInput.addEventListener('input', filterSuggestions);
//# sourceMappingURL=index.js.map