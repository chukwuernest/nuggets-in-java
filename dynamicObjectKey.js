const state = { loading: true, name: '', job: '' }
function upDateState(key, value) {
  state[key] = value
}

upDateState('name', 'john')
upDateState('job', 'teacher')
upDateState('Age', 20)
upDateState('loading', 'false')
console.log(state)

// how to dynamically update values
