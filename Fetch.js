// fetch API - Brower API for HTTP(AJAX) Requests
// default -Get requests, support other methods as well
// return promise

const url = 'https://www.course-api.com/react-tours-project'

fetch(url)
  .then((item) => item.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

// if we want to write the above using async

const getTour = async () => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getTour()

//FETCH ERRORS
const getTour1 = async () => {
  try {
    const resp = await fetch(url)
    if (!resp.ok) {
      const msg = `there was an error "${resp.status}${resp.statusText}"`
      throw new Error(msg)
    }
    const tour = await resp.json()
    console.log(tour)
  } catch (error) {
    console.log(error)
  }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', getTour1)
