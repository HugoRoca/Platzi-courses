const messages = [
  "hugo", "jehidi", "fiorella", "samuel", "gian", "candy", "lucas", "capitan", "tobias", "cutu"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }