var CodeMirror = require('codemirror')
require( 'codemirror/addon/runmode/runmode' )

// Use CodeMirror to render static code higlighting
//
// Example:
//
//   <pre data-lang="ruby">
//     puts @awesome if true
//   </pre>
//


var aliases = {
  'html'  : 'text/html',
  'slim'  : 'text/slim',
  'js'    : 'text/javascript',
  'json'  : 'application/json',
  'sass'  : 'text/x-sass',
  'scss'  : 'text/x-scss',
  'bash'  : 'text/x-sh',
  'sh'    : 'text/x-sh'
}

// Process code through CodeMirror which injects highlighted code into element
function process(code, lang, el) {
  if (!lang) return
  var options = {'json': lang == 'json'}
  CodeMirror.runMode(code, getAlias(lang), el, options)
}

function highlight(el) {
  var lang = el.dataset.lang || 'plain'
  el.classList.add('highlighted', 'lang-'+lang)
  process(el.textContent.trim(), lang, el)
  el.innerHTML = "<code class='highlighted-code static-code cm-s-default'>" + el.innerHTML + "</code>"
}

function highlightAll(selector) {
  selector = selector || '[data-lang]:not(.highlighted)'
  Array.prototype.forEach.call(document.querySelectorAll(selector), highlight)
}

function aliasLang(newAliases) {
  for (var key in newAliases) {
    aliases[key] = newAliases[key]
  }
}

function getAlias(lang) {
  return(aliases[lang] || lang)
}

module.exports = {
  aliasLang: aliasLang,
  highlight: highlight,
  highlightAll: highlightAll
}
