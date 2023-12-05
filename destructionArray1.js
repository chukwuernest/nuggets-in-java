const names = ['john', 'mark', 'simi', 'joe', 'matt', 'grace']
const fruits = ['mango', 'orange', 'apple', 'lime', 'grape']

const [john, , simi, joe] = names
console.log(john, simi, joe)

//if i want to change the array
let person = 'john'
let fruit = 'mango'
//let name = fruit
;[person, fruit] = [fruit, person]
console.log(person, fruit)
