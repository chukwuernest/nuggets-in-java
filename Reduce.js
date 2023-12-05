const staff = [
  {
    name: 'john',
    age: '25',
    position: 'baba boy',
    salary: 85000,
  },
  {
    name: 'job',
    age: '27',
    position: 'baba boy',
    salary: 85000,
  },
  {
    name: 'matt',
    age: '35',
    position: 'jim front desk',
    salary: 100000,
  },
  {
    name: 'simi',
    age: '25',
    position: 'accountant',
    salary: 115000,
  },
  {
    name: 'mark',
    age: '29',
    position: 'accountant',
    salary: 115000,
  },
]

// i want to calculate whats my total daily

const dailyValue = staff.reduce((total, people) => {
  console.log(total)
  console.log(people.salary)
  total += people.salary
  return total
}, 0)

console.log(dailyValue)
