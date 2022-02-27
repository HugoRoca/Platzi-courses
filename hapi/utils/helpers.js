const handlebars = require('handlebars')

function registerHelpers() {
  handlebars.registerHelper("answerNumber", (answers) => {
    const keys = Object.keys(answers);
    return keys.length;
  });

  handlebars.registerHelper('ifEquals', (a, b, options) => {
    if (a === b) return options.fn(this)
    return options.reverse(this)
  })

  return handlebars
}

module.exports = registerHelpers()
