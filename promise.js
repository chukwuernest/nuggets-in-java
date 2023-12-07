// promises

//the main reason for using promises to to avoid call back hell

// async await
//consume/use promises
//pending, Reject, Fullfilled
const value = 2

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random * 3)
  if (random === value) {
    resolve('you guess correctly')
  } else {
    reject('wrong number')
  }
  console.log(random)
  // resolve('hello world')
  reject('there was a error')
})
console.log(promise)

// whenn getting the value .then is going to be for resolve
// and .catch is going to be for reject

promise.then((item) => console.log(item)).catch((item) => console.log(item))

// more promises example
//after 1sec text1 red;
//after 3sec text2 blue;
//after 2sec text3 green

// in sequence!!!

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  addColor(1000, '.text1', 'red')
    .then(() => addColor(3000, '.text2', 'blue'))
    .then(() => addColor(2000, '.text3', 'green'))
    .catch((item) => console.log(item))
})

function addColor(time, selector, color) {
  const element = document.querySelector(selector)
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
        resolve()
      }, time)
    } else {
      reject(`no element:"${selector}"`)
    }
  })
}
