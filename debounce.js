const btn = document.querySelector('.btn')

const debounce = () => {
  let timeoutID
  return () => {
    console.log(timeoutID)
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      console.log('you don click me')
    }, 3000)
  }
}

btn.addEventListener('click', debounce())
