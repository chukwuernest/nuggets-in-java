// spreed Operator
//allows and iteratable to spreed/expand individually inside reciever
// split into single items and Copy them

const udemy = 'udemy'
let letters = [...udemy]
console.log(letters)

const boys = ['john', 'mark', 'matt']

const girls = ['susan', 'anna']

const bestFriend = 'mike'

let people = [...boys, ...girls, bestFriend]
console.log(...people)
//reference
//when we rename or create new reference of value we need to add the ... if not it will affect both new and old values
const newFriends = [...people]
newFriends[0] = 'NANCY'
console.log(...newFriends)
//Copy

//ES2018 ES8 object

const person = { name: 'john', job: 'developer' }
const newperson = { ...person, city: 'lagos' }
console.log(newperson)
