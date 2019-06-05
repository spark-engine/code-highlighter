// Utlitiy function for easily appending to HTML
function injectHTML(html, parent) {
  parent = parent || document.body
  parent.insertAdjacentHTML('beforeend', html)
  return parent.lastChild
}

function injectCode(code, lang, parent) {
  return injectHTML("<pre data-lang='"+lang+"'>"+code+"</pre>", parent)
}

module.exports = {
  injectHTML: injectHTML,
  injectCode: injectCode
}
