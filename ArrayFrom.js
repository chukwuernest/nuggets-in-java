//Array.from - NOT ON PROTOTYPE

// from - returns array object from an objectr
//with a lenth properity or iteratiable object
//from - turns array-like/ish into array-string,nodeList,Set

const udemy = 'udemy'
console.log(Array.from(udemy))

const text = document.querySelectorAll('.text')
console.log(text)

//the above will give us a node list so to change to an array

const newText = Array.from(text)
console.log(newText)
// we can now add what ever function or effect we want

const item = Array.from({ length: 120 }, (_, index) => {
  return index
})
console.log(item)

const perPage = 8
const eachPage = Math.ceil(item.length / perPage)

const newItem = Array.from({ length: eachPage }, (_, index) => {
  const start = index * perPage
  const temp = item.slice(start, start + perPage)
  return temp
})
console.log(newItem)
