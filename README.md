# fontcheck.js
 Test if a font or list of fonts is available in users browser


## Versions
There are two versions available: fontcheck.js (1.x.x) and fontcheck-module.js (2.x.x). The first is a simple function, easy to copy and paste and a simple way to check a few fonts (one at a time). The module version is a better choice if you need to check a large number of fonts, it accepts an array of font names and returns a promise. The promise will resolve to an array of fonts that were detected.


## Demo
Check out [the example](https://rwoodr.github.io/fontcheck/) to see it in action


## Usage - simple function version (fontcheck.min.js)
```javascript
// Log true if font Consolas is available
console.log(fontCheck('Consolas'));
```


## Usage - module version (fontcheck-module.min.js)
```javascript
import FontCheckModule from './fontcheck-module.min.js';

let fontCheck = new FontCheckModule();

// Check single font
console.log(fontCheck.isUsable('Arial'));

// Check array of fonts
fontCheck.filterFonts(['Consolas', 'Menlo', 'Times New Roman'])
    .then(result => console.log(result));
    .catch(error => console.log(error));
```


## Install
`Simple function version`:
Copy and paste the contents of fontcheck.min.js into your code
*or*
Save a copy of fontcheck.min.js and reference it in a `<script>` tag


`Module version`:
Save a copy of fontcheck-module.min.js and use `import` in your code.


## Yarn install module version
```
$ yarn add fontcheck
```


## License
Copyright 2018 Robert Woodruff

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


## Alternatives

Here are the alternatives I tested before doing it myself:

* [available-fonts](https://github.com/orleika/available-fonts)
* [Detecting System Fonts Without Flash](https://www.bramstein.com/writing/detecting-system-fonts-without-flash.html)
* [doesFontExist](https://www.kirupa.com/html5/detect_whether_font_is_installed.htm)
* [font.js](https://remysharp.com/2008/07/08/how-to-detect-if-a-font-is-installed-only-using-javascript)
* [isFontAvailable](https://www.samclarke.com/javascript-is-font-available/)
* [JavaScript/CSS Font Detector](http://www.lalit.org/lab/javascript-css-font-detect/) - [archive](https://web.archive.org/web/20180103203605/http://www.lalit.org/lab/javascript-css-font-detect/)
* [jFont-Checker](https://github.com/derek1906/jFont-Checker/)


## test-fonts.json

The test-fonts.json file I am using for the demo page came from [orleika](https://github.com/orleika)/[available-fonts](https://github.com/orleika/available-fonts) which is published under the MIT License.
