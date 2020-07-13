const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const searchInput: HTMLInputElement = document.querySelector('.search')
const suggestions: HTMLUListElement = document.querySelector('.suggestions')

interface Place {
  city: string
  growth_from_2000_to_2013: string
  latitude: number
  longitude: number
  population: string
  rank: string
  state: string
}

let places: Place[] = []

fetch(endpoint).then(blob => blob.json()).then(data => places.push(...data))

// return number with commas at thousand
function formatNumber(population: string) {
  return population.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}

// return places that match search query
function findMatches(regex: any, places: Place[]) {
  return places.filter(place => place.city.match(regex) || place.state.match(regex))
}

// append matches to suggestions list
function filterSuggestions() {
  const query = this.value
  const regex = new RegExp(query, 'gi')
  const matches = findMatches(regex, places)
  suggestions.innerHTML = matches
    .map(place => {
      const population = formatNumber(place.population)
      const city = place.city.replace(regex, `<span class='hl'>$&</span>`)
      const state = place.state.replace(regex, `<span class='hl'>$&</span>`)

      return `<li><span>${city}, ${state}</span><span>${population}</span></li>`
    })
    .join('')
}

searchInput.addEventListener('input', filterSuggestions)
