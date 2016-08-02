var CodeMirror = require('codemirror')
require('codemirror/addon/runmode/runmode.js')

// Use CodeMirror to render static code higlighting
//
// Example:
//
//   <pre class="lang-ruby">
//     puts 'awesome' if true
//   </pre>
//


var Highlighter = {

  aliases: {
    'markup': 'htmlmixed',
    'html'  : 'htmlmixed',
    'json'  : 'javascript',
    'java'  : 'clike',
    'bash'  : 'shell',
    'sh'    : 'shell',
    'sass'  : 'css',
    'scss'  : 'css'
  },

  addAlias: function(newAliases) {
    for (var key in newAliases) {
      self.aliases[key] = newAliases[key]
    }
  },

  aliasLang: function(lang) {
    return(self.aliases[lang] || lang)
  },

  process: function(code, lang, output) {
    var options = {'json': false}

    if(lang == 'json') {
      options.json = true 
    }

    CodeMirror.runMode(code, self.aliasLang(lang), output, options)
  },

  highlightEl: function(element) {
    var lang = element.dataset.lang || element.dataset.language

    if (!lang) {
      classMatch = element.className.match(/lang.*?-(\S+)/)
      if (classMatch){
        lang = classMatch[1]
      } else {
        // If we can't determine language, skip it.
        return
      }
    }

    // Standardize classes: lang-[language]
    if (element.classList.contains('language-'+lang)) {
      element.classList.remove('language-'+lang)
    }

    element.classList.add('lang-'+lang)
    element.classList.add('highlighted')

    var code = element.textContent.trim()

    self.process(code, lang, element)
    element.innerHTML = "<code class='highlighted-code static-code cm-s-default'>" + element.innerHTML + "</code>"
  },

  highlight: function(selector) {
    selector = selector || '[class*="language-"], [class*="lang-"], [data-lang], [data-language]'

    var elements = document.querySelectorAll(selector);
    Array.prototype.forEach.call(elements, function(element) {
      self.highlightEl(element)
    })
  }
}

module.exports = self = Highlighter
