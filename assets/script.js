//displays the date and time and updates by the second from moment.js
var dateTime = null,
    todayDate = null;
var keepTime = function () {
    todayDate = moment(new Date())//Date method returns date as string
    dateTime.html(todayDate.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};
$(document).ready(function () {
    dateTime = $('#currentDay')
    keepTime();
    setInterval(keepTime, 1000);
});//end of time/keepTime functions

//This was created to test logic at all hours of the day adding 12 hours to current time
//Simply change number after add and then replace hour with testHour 
// var testHour = moment().add(12, 'hours').hour();
// console.log(testHour);

var hour;
function workDayHours() {
    hour = moment().hour(); //hour logs in 24 hours 1pm == 13
}
workDayHours();//REMEMBER TO CALL FUNCTIONS

//for each time-block check to see if it is < > === to hour
$(".time-block").each(function () {
    //blockHour = return as number, not string time-blocks id only numbers (.match is extracting number from hour8, hour9)
    var blockHour = parseInt($(this).attr("id").match(/\d+/)[0]);
    if (blockHour < hour) {
        $(this).addClass("past")
    }
    else if (blockHour === hour) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }
})

//when clicking on save button, saving input along with time block number to local storage
$(".saveBtn").on("click", function () {
    var userInput = $(this).siblings(".description").val();
    var userTime = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(userTime, userInput);
})

//getting local storage and displaying on page
//could not figure out how to loop to collect all storage values
if (localStorage.val == "") {

} else {
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
}


//Creating reset button and appending to container
$('<button/>', {
    text: 'Reset all fields',
    class: 'resetBtn'
}).appendTo('#container');

$(".resetBtn").click(function () {
    localStorage.clear()//clears local storage on click
    $('.description').val('');//clears display on click
})