//variables init
var appointments = []



//Retrieve current date and diplay to page.
$('#currentDay').text(moment().format('dddd, MMMM Do'))

//setter to save data


//checks time against data-* and adds appropriate class for display
function setPlanner() {
    $("textarea").each(function() {
        if ($(this).data("time") < parseInt(moment().format('HH'))) {
            $(this).addClass('past')
        }
        if ($(this).data("time") === parseInt(moment().format('HH'))) {
            $(this).addClass('present')
        }
        if ($(this).data("time") > parseInt(moment().format('HH'))) {
            $(this).addClass('future')
        }
    })



}


//adds a click event to store time and data from each appointment
$(document).on("click", ".saveBtn", function(e) {
    if ($(this).prev().val() !== '') {
        var meeting = { time: $(this).prev().data('time'), info: $(this).prev().val() }
        appointments.push(meeting)
    }


});





setPlanner()