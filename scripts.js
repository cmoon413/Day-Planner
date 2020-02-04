//Retrieve current date and diplay to page.
$('#currentDay').text(moment().format('dddd, MMMM Do'))

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

setPlanner()