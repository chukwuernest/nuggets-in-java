const mike = {
  firstName: 'Mike',
  lastName: 'Ernest',
  city: 'Lagos',
  country: 'Nigeria',
  siblings: {
    brother: 'Emma',
    sister: 'mary',
  },
}
const {
  firstName,
  lastName,
  city,
  country,
  siblings: { brother, sister },
} = mike
console.log(firstName, lastName, city, country, brother, sister)

// we can also use a function

function listperson({
  firstName,
  lastName,
  city,
  country,
  siblings: { brother, sister },
}) {
  console.log(firstName, lastName, city, country, brother, sister)
}
listperson(mike)
