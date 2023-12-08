//async/await
//async must be present,always return a promise
//await waits till promise is settled
//error handling - try/catch block

// const example = async () => {
//   return 'hello mike'
// }

// once we use a async we can use await
// async function some() {
//   const result = await example()
//   console.log(result)
// }
//console.log(example())
// some()

const users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'max' },
  ,
  { id: 3, name: 'ana' },
  { id: 4, name: 'susan' },
]

const articles = [
  { userId: 1, article: ['one', 'two', 'three'] },
  { userId: 2, article: ['four', 'five'] },
  { userId: 3, article: ['six', 'seven', 'eight', 'nine'] },
  { userId: 4, article: ['ten', 'eleven', 'twelve'] },
]

const getData = async () => {
  const user = await getUser('john')
  if (user) {
    const articles = await getArticle(user.id)
  }
  console.log(articles)
}

getData()

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name)

    if (user) {
      return resolve(user)
    } else {
      reject(`no such user: ${name}`)
    }
  })
}
function getArticle(userId) {
  return new Promise((resolve, reject) => {
    const userArticle = articles.find((user) => user.userId === userId)

    if (userArticle) {
      return resolve(userArticle.article)
    } else {
      reject(`wrong ID`)
    }
  })
}
