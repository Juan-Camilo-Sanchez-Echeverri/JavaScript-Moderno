

const superHeroes = [
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman',
  },
  {
    id: 3,
    name: 'Flash'
  },
  {
    id: 4,
    name: 'Aquaman'
  },
]

const superHeroesCoy = structuredClone(superHeroes)

superHeroesCoy[0].name = 'Ironman'

console.table(superHeroes)
console.table(superHeroesCoy)