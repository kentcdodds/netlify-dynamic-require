const thing = 'thing'
const dynamicRequire = `./dynamic/${thing}`

const now = require(dynamicRequire)

exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'
  return {
    statusCode: 200,
    body: `Hello ${subject}! It is ${now()}`,
  }
}
