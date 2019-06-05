var highlighter = require('../')
var utils = require('./_utils')

require( 'codemirror/mode/css/css' )
require( 'codemirror/mode/ruby/ruby' )

var highlightCode = function(code, lang) {
  return codeEl.firstChild.innerHTML
}

//var code1 = utils.injectCode("scss", "body { background: $fl-blue-500; }")

test('Highlight element', function(){
  var codeEl = utils.injectCode("puts @awesome if cool?", "ruby")
  highlighter.highlight(codeEl)
  expect( codeEl.firstChild.innerHTML ).toBe( '<span class="cm-variable">puts</span> <span class="cm-variable-2">@awesome</span> <span class="cm-keyword">if</span> <span class="cm-variable">cool?</span>' )
})

test('Highlight All', function(){
  var codeEl = utils.injectCode("$bg: #eee; body { background: $bg; }", "scss")
  highlighter.highlightAll()
  expect( codeEl.firstChild.innerHTML ).toBe( '<span class="cm-variable-2">$bg</span>: <span class="cm-atom">#eee</span>; <span class="cm-tag">body</span> { <span class="cm-property">background</span>: <span class="cm-variable-2">$bg</span>; }' )
})

test("Doesn't highlight code with no language", function(){
  var codeEl = utils.injectCode('print("hi")')
  highlighter.highlight(codeEl)
  expect( codeEl.firstChild.innerHTML ).toBe( 'print("hi")' )
})
