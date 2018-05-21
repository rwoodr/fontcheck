// Import module
import FontCheckModule from './fontcheck-module.min.js';

$(function() {
    // Initialize object
    let fontCheck = new FontCheckModule();

    $.getJSON('test-fonts.json', data => {
        let fontList = data.testFonts;

        $("#moduleExample").html('Checking list of ' + fontList.length + ' fonts<br><br>');

        // Check multiple fonts using array
        fontCheck.filterFonts(fontList)
            .then(result => {
                // Check complete, `result` is array of detected fonts
                $("#moduleExample").append('Detected ' + result.length + ' fonts<br>');
                $("#moduleExample").append(JSON.stringify(result, null, 4));
            })
            .catch(error => console.log(error));        
    });



    $('#checkFontBtn').click(event => {
        let testFont = $('#fontInput').val();

        // Check one font using text input
        $('#checkResults').prepend(fontCheck.isUsable(testFont) + '<br>');
        
        $('#checkResults').prepend(testFont + ': ');
        $('#fontInput').val('');
    });

    $("#checkForm").submit(event => false);
});
