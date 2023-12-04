const people = [
  {
    name: 'john',
    age: 25,
    position: 'baba boy',
  },
  {
    name: 'job',
    age: 27,
    position: 'baba boy',
  },
  {
    name: 'matt',
    age: 35,
    position: 'jim front desk',
  },
  {
    name: 'simi',
    age: 25,
    position: 'accountant',
  },
  {
    name: 'mark',
    age: 29,
    position: 'accountant',
  },
]

//filter
const youngPeople = people.filter((item) => {
  // if (item.age <= 27) {
  //   return item
  // } or
  return item.age <= 27
})
console.log(youngPeople)
// to get position of an item
const accountants = people.filter((item) => item.position === 'accountant')
console.log(accountants)

//to find
const john = people.find((item) => item.name === 'john')
console.log(john)

// note if you have multiple output when using FIND you will get only the first value
