/**
  * Test if a font is available in users browser
  * https://github.com/rwoodr/fontcheck
  * @author Robert Woodruff
  * @version 1.0.0
  * @license Apache-2.0
  * @function fontCheck
  * @param {string} testFont - The font to check for
  * @returns {boolean} - Font detected or not
  * @example
  * // Log true if font Consolas is available
  * console.log(fontCheck('Consolas'));
*/
function fontCheck(testFont) {
    "use strict";

    // Base fonts from which to compare widths against test font
    // Specify generic font and let the browser choose the exact font
    // These will be measured alone and set as a fallback to the test font
    // If test font not present tests will use fallback and have same widths
    // Five generic fonts: serif, sans-serif, monospace, cursive, and fantasy
    let baseFonts = ['serif', 'sans-serif', 'monospace'];

    // Text to use for all measurments
    let testString = 'abcdefghijklmnopqrstuvwxyz& #0123456789';

    // Font size for all measurments
    let fontSize = '32px';

    // Canvas context
    let context = document.createElement('canvas').getContext('2d');

    // Return result of comparing test font to base fonts
    return baseFonts.some(baseFont => {
        // Measure base font
        context.font = fontSize + ' ' + baseFont;
        let baseFontWidth = context.measureText(testString).width;

        // Measure test font, include base font fallback
        context.font = fontSize + ' ' + testFont + ',' + baseFont;
        let testFontWidth = context.measureText(testString).width;

        // Return true immediately if the widths are different (font available)
        // Or return false after all base fonts checked (font not available)
        return (baseFontWidth !== testFontWidth);
    });
}
