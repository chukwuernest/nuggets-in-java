//three method to convert objects into array
// Object.key() - convert property names into array
//Object.value() - convert property value into array
// Object.entries() - convert both

const person = {
  name: 'john',
  age: 27,
  status: 'student',
}

const keys = Object.keys(person)
console.log(keys)

const values = Object.values(person)
console.log(values)

const entries = Object.entries(person)
console.log(entries)

//map method

const result = entries.map((item) => {
  const [first, second] = item
  // console.log(first, second)
  return first
})
console.log(result)
