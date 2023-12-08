// at() - takes integer and returns the item at the index - string,array
//Top level Await - Basic Example

const scores = [90, 80, 100, 20]

const oldScore = scores[scores.length - 1]
console.log(oldScore)

const newLast = scores.at(-1)
console.log(newLast)

const channel = 'mike Ernest'
console.log(channel.at(0))
