const people = [
  {
    name: 'john',
    age: '25',
    position: 'baba boy',
  },
  {
    name: 'job',
    age: '27',
    position: 'baba boy',
  },
  {
    name: 'matt',
    age: '35',
    position: 'jim front desk',
  },
  {
    name: 'simi',
    age: '25',
    position: 'accountant',
  },
  {
    name: 'mark',
    age: '29',
    position: 'accountant',
  },
]

const ages = people.map((items) => `<h1>${items.name}<h1/>`)
const newAges = document.querySelector('#result')
newAges.innerHTML = ages.join('')

// this is for mapping through values
