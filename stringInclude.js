//string includes()
// its used to check if strings contains another strings
// we can use it for text search

const products = [
  { title: 'modern poster' },
  { title: 'bar stool' },
  { title: 'chair' },
  { title: 'round table' },
]

const text = 'a'
const filterProduct = products.filter((product) =>
  product.title.toLowerCase().includes(text)
)

console.log(filterProduct)
// const product = {
//   title: 'modern poster',
// }
// const result = product.title.includes('mo')
// console.log(result)

//array includes()

const goods = ['milk', 'meat', 'fish', 'apple']

let other = 'milk'

const isIncluded = goods.includes(other)
console.log(isIncluded)

if (goods.includes(other)) {
  console.log(`e dey inside`)
}
