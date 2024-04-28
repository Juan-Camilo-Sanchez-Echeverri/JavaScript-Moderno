

const state = [
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



const index = 1;
const newName = 'Green Lantern';  

const newState = state.with(index,{
  ...state.at(index),
  name: newName
})

state[0].name = 'Robin';

console.table(newState)

console.log('El ultimo elemento es: ', state.at(-1))