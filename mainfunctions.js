/***Range Slider functions***/

$(function() {
    var $document   = $(document),
        $inputRange = $('input[type="range"]');
    
    // Example functionality to demonstrate a value feedback
    function valueOutput(element) {
        var value = element.value,
            output = element.parentNode.getElementsByTagName('output')[0];
        output.innerHTML = value;
    }
    for (var i = $inputRange.length - 1; i >= 0; i--) {
        valueOutput($inputRange[i]);
    };
    $document.on('input', 'input[type="range"]', function(e) {
        valueOutput(e.target);
    });
    // end
  
    $inputRange.rangeslider({
      polyfill: false 
    });
});

/***Range Slider functions***/



$("#submit-button").click( function() { 
    var a1 = $('#question1').val();
    var a2 = $('#question2 input:checked').val();
    var a3 = $('#question3 input:checked').val();
    var a4 = $('#question4 input:checked').val();
    var a5 = $('#question5 input:checked').val();
    var calculation = (a1 * 30) * a2 * a3 * a4 * a5 * 12;
    $(".results-container h2").text("$" + calculation);
    $("#quiz").addClass('hidden');
    $(".spinner-container").addClass('temp-visible');
    $(".results-container").addClass('perm-visible');
});