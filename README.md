# Spark Code Highlighter

Easily highlight static code snippets using the wonderful
[CodeMirror](https://codemirror.net/). This wraps the CodeMirror run mode
feature and adds language aliases, and DOM interaction.

[![Build Status](http://img.shields.io/travis/spark-engine/spark-code-highlighter.svg?style=flat-square)](https://travis-ci.org/spark-engine/spark-code-highlighter)

## Setup:

When requiring this module, be sure to also require the CodeMirror
language modes for the languages you'll be working with. For example if
you are going to highlight HTML, Javascript, and CSS, you might add this:

```javascript
var Highlighter = require( 'spark-code-highlighter' )

// Require highlighter modes
require( 'codemirror/mode/htmlmixed/htmlmixed' )
require( 'codemirror/mode/javascript/javascript' )
require( 'codemirror/mode/css/css' )
```

See [CodeMirror's mode documentation](https://codemirror.net/mode/) for a complete list of supported languages.

## Usage

Code snippets can be any element (not just a `<pre>` block) with `data-lang` attribute to set the language.

For example:

```html
<pre data-lang='css'>
body {
  background: #c0ffee;
}
</pre>

<div data-lang='ruby'>
puts 'hello world'
</div>
```

Then to highlight all code snippets on the page:

```javascript
Highlighter.highlight([selector])
```

Pass a selector to only highlight code snippets which match that selector. The default selector is `data-lang`.

## Alias languages

If your language doesn't seem to be highlighting properly, you can specify
the mimetype that CodeMirror is using to identify your language. For SCSS, you'd use `data-lang="text/x-scss"`. That's kind of verbose so this library adds some aliases so you can go on using `data-lang="scss"` and it is converted before invoking CodeMirror.

```
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
```

To add an alias of your own, pass an object to `aliasLang`.

```js
Highlighter.aliasLang({
  'less': 'text/x-less'
})
```

And of course, remember to require the appropriate CodeMirror modes for your lanugages.
