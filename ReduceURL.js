const Url = 'http://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepos = async () => {
  const response = await fetch(Url)
  const data = await response.json()
  console.log(data)
  const newData = data.reduce((total, repo) => {
    const { language } = repo
    if (language) {
      total[language] = total[language] + 1 || 1
    }
    return total
  }, {})
  console.log(newData)
}
fetchRepos()
