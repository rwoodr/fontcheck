/**
  * Test if one or more fonts are available in users browser
  * https://github.com/rwoodr/fontcheck
  * @author Robert Woodruff
  * @version 2.0.0
  * @license Apache-2.0
*/
export default class {

    /**
     * Initialize variables and measure widths of base fonts
    */
    constructor() {
        // Base fonts from which to compare widths against test font
        // Specify generic font and let the browser choose the exact font
        // These will be measured alone and set as a fallback to the test font
        // If test font not present tests will use fallback and have same widths
        // Five generic fonts: serif, sans-serif, monospace, cursive, and fantasy
        this.baseFonts = ['serif', 'sans-serif', 'monospace'];

        // Text to use for all measurments
        this.testString = 'abcdefghijklmnopqrstuvwxyz& #0123456789';

        // Font size for all measurments
        this.fontSize = '32px';

        // Canvas context
        this.context = document.createElement('canvas').getContext('2d');

        // A place to store base font measurments
        this.baseWidths = {};

        // Measure base font widths once at object creation
        this.baseFonts.forEach(baseFont => {
            this.context.font = this.fontSize + ' ' + baseFont;
            this.baseWidths[baseFont] = this.context.measureText(this.testString).width;
        });
    }

    /**
     * Filter list of fonts, fonts not available are removed
     * @param {Array} fontList - Array of fonts to check for
     * @returns {Promise} - Resolves with array of found fonts
    */
    filterFonts(fontList) {
        return new Promise((resolve, reject) => {
            // Accept only array input
            if ( ! Array.isArray(fontList)) reject('Input must be array');
            // Return array containing detected fonts
            resolve(fontList.filter(testFont => this.isUsable(testFont)));
        });
    }

    /**
     * Check if test font is available
     * @param {string} testFont - The font to check for
     * @returns {boolean} - Font detected or not
    */
    isUsable(testFont) {
        // Return result of comparing test font to base fonts
        return this.baseFonts.some(baseFont => {
            // Measure test font, include base font fallback
            this.context.font = this.fontSize + ' ' + testFont + ',' + baseFont;
            let testFontWidth = this.context.measureText(this.testString).width;

            // Return true immediately if the widths are different (font available)
            // Or return false after all base fonts checked (font not available)
            return (this.baseWidths[baseFont] !== testFontWidth);
        });
    }

}
