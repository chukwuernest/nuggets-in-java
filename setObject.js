// set object
// it stores a collections of unique va;ues of any type
//new Set ()
// add(value)
// detele(value)
//has(value)

//iteration
//entries(),keys(),value(),forEach()

const unique = new Set()
const random = 'third'
// add method
unique.add('first')
unique.add('second')
unique.add(random)
unique.add(6)

console.log(unique)

//delete method
const result = unique.delete('third')
console.log(result)
//detele returns true or false which show if the element is in the set
console.log(unique)

//has
//also return true oe false

//new Set examples
const products = [
  { title: 'high-back bench', company: 'lekki' },
  { title: 'albany table', company: 'mainland' },
  { title: 'oud al matt', company: 'surulere' },
  { title: 'wounder air back', company: 'mainland' },
]

const companies = products.map((item) => item.company)
console.log(companies)

const unquieCompanies = new Set(companies)
console.log(unquieCompanies)
//to turn into an array
const finalcompanies = [...unquieCompanies]
console.log(finalcompanies)
//if we want to add any new values
const addcompanies = ['all', ...unquieCompanies]
console.log(addcompanies)

// we can do the above with a single liner

const Result = ['all', ...new Set(products.map((item) => item.company))]
console.log(Result)
