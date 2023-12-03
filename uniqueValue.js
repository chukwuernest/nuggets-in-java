const work = [
  {
    name: 'john',
    age: '25',
    position: 'baba boy',
  },
  {
    name: 'job',
    age: '27',
    position: 'baba boy',
  },
  {
    name: 'matt',
    age: '35',
    position: 'front desk',
  },
  {
    name: 'simi',
    age: '25',
    position: 'accountant',
  },
  {
    name: 'mark',
    age: '29',
    position: 'accountant',
  },
]

const job = ['all', ...new Set(work.map((item) => item.position))]
console.log(job)

const result = document.querySelector('#result')
result.innerHTML = job
  .map((postion) => {
    return `<button>${postion}<button/>`
  })
  .join('')

// this is for seleting unique value
