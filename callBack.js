function makeUpper(value) {
  console.log(value.toUpperCase())
}
// makes upper case value
function handleName(name, cb) {
  const fullName = `${name} jons`
  cb(fullName)
}

handleName('james', makeUpper)
//array method,setTimeout,event listerners etc

//call back hell
//after 1sec text1 red;
//after 3sec text2 blue;
//after 2sec text3 green

// in sequence!!!

const first = document.querySelector('.text1')
const second = document.querySelector('.text2')
const third = document.querySelector('.text3')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  setTimeout(() => {
    first.style.color = 'red'
    setTimeout(() => {
      second.style.color = 'blue'
      setTimeout(() => {
        third.style.color = 'green'
      }, 2000)
    }, 3000)
  }, 1000)
})
