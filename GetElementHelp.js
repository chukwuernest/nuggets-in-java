// this will help you to debug easily
const text1 = document.querySelector('.text1')

const getElement = (selector) => {
  const el = document.querySelector(selector)
  if (el) return el
  throw new Error(`please check your code : ${selector}`)
}

console.log(getElement('.text1'))
