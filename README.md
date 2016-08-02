# Compose Code Highlighter

Easily highlight static code snippets using the wonderful
[CodeMirror](https://codemirror.net/). This wraps the CodeMirror run mode
feature and adds language aliases, and DOM interaction.

[![Build Status](http://img.shields.io/travis/compose-ui/code-highlighter.svg?style=flat-square)](https://travis-ci.org/compose-ui/code-highlighter)

### Setup:

When requiring this module, be sure to also require the CodeMirror
language modes for the languages you'll be working with. For example if
you are going to use Ruby, C, and CSS, you might add this:

```javascript
require('codemirror')
require('codemirror/mode/ruby/ruby')
require('codemirror/mode/clike/clike')
require('codemirror/mode/css/css')
```

See [CodeMirror's mode documentation](https://codemirror.net/mode/) for a complete list of supported languages.

### Usage

Code snippets can be any element (not just a `<pre>` block) but should either have a
`data-lang` attribute to set the language or should have a classname matching matching `lang-[language]`.

For example:

```html
<pre data-lang='css'>
body {
  background: #c0ffee;
}
</pre>

<div class='lang-ruby'>
puts 'hello world'
</div>
```

Then to highlight all code snippets on the page:

```javascript
Highlighter.highlight()
```

### Alias languages

If your language doesn't seem to be highlighting properly, you can specify
the mimetype that CodeMirror is using to identify your language. For Scss, you'd use `data-lang="text/x-scss"`. That's kind of verbose so this library adds some aliases so you can go on using `data-lang="scss"` and it is converted before invoking CodeMirror.

```
aliases: {
  'bash'  : 'text/x-sh',
  'c'     : 'text/x-csrc',
  'html'  : 'text/html',
  'js'    : 'text/javascript',
  'json'  : 'application/json',
  'java'  : 'text/x-java',
  'markup': 'text/html',
  'sass'  : 'text/x-sass',
  'scss'  : 'text/x-scss',
  'sh'    : 'text/x-sh'
},
```

If you want to add aliases you can do so like this:

```js
var Highlighter = require('compose-code-highlighter')
Highlighter.addAlias({
  'less': 'text/x-less'
})
```

I'm happy to accept pullrequests for adding aliases to the default list.
