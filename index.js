const beautify = require('pretty')

const isHtmlString = received => received && typeof received === 'string' && received[0] === '<'
const isKduWrapper = received => (
  received &&
  typeof received === 'object' &&
  typeof received.isKduInstance === 'function'
)

module.exports = {
  test (received) {
    return isHtmlString(received) || isKduWrapper(received)
  },
  print (received) {
    const html = (isKduWrapper(received) ? received.html() : received) || ''
    const removedServerRenderedText = html.replace(/ data-server-rendered="true"/, '')
    return beautify(removedServerRenderedText, { indent_size: 2 })
  }
}
