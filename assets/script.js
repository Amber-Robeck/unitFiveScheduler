

//displays the date and time and updates by the second from moment.js
var dateTime = null,
    todayDate = null;
var keepTime = function () {
    todayDate = moment(new Date())
    dateTime.html(todayDate.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};
$(document).ready(function () {
    dateTime = $('#currentDay')
    keepTime();
    setInterval(keepTime, 1000);
});//end of time/keepTime functions
var testHour = moment().add(12, 'hours').hour();
console.log(testHour);

var hour;
function workDayHours() {
    hour = moment().hour();
    console.log(hour)//logs as 17 @ 5/Military time 24 hour maybe add class to time blocks of 13++
}
workDayHours();//REMEMBER TO CALL FUNCTIONS

//hour=blockTime then add class of present
//hour>blockTime then add class of past
//hour<blockTIme then add class of future


//Need to get number out of string ex..hour8 to equal 8
// function getNumFromStr () {
//     var tName = 'arun_4874_541';
//     alert(tName.match(/\d+/g));
// }

// blockTime = "hour8".match(/\d+/)[0] //converting to just number [0] returns string without [0] returns object
// console.log(parseInt(blockTime));
// console.log(typeof blockTime);
// console.log(typeof parseInt(blockTime));

// if (hour < 19) {
//     alert("it is very late")
// }

// $('#container').children('#id').each(function () {
//     alert(this.value); // "this" is the current element in the loop
// });
// var hour8 = $('#hour8');<-----I have created an infinite loop lol

// $(".time-block").each(function () {
//     var blockHour = parseInt($(this).attr("id").split("hour")[1]);
//     console.log(blockHour)
// })
//these two functions do the same exact thing


//for each time-block check to see if it is < > === to hour
$(".time-block").each(function () {
    //blockHour = return as number, not string time-blocks id only numbers (.match is extracting number from hour8, hour9)
    var blockHour = parseInt($(this).attr("id").match(/\d+/)[0]);
    console.log(blockHour)
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

//
// $(".time-block").each(function () {
//     var blockHour = parseInt($(this).attr("id").match(/\d+/)[0]);
//     console.log(blockHour)
//     if (blockHour < testHour) {
//         $(this).addClass("past")
//     }
//     else if (blockHour === testHour) {
//         $(this).addClass("present")
//     }
//     else {
//         $(this).addClass("future")
//     }
// })

//when save button on click save textarea, for each function .description.val

// $(".saveBtn").on("click", function () {
//     var times = [];
//     console.log("working")
//     localStorage.setItem("user", JSON.stringify());
// })

// $(".saveBtn").each(function() {
// $(".saveBtn").on("click", function () {

//     var times = [];
//     console.log("working")
//     localStorage.setItem("user", JSON.stringify());
// })

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

// var button = document.createElement("button")
// button.innerHTML = "Reset all fields"
// document.body.appendChild(button);
// button.addEventListener("click", function () {
//     localStorage.clear()
//     $(this).siblings(".description").val();
// })

// $("#myButton").click(function () {
//     var test = $('<button>Test</button>').click(function () {
//         alert('hi');
//     })

$('<button/>', {
    text: 'Reset all fields',
    class: 'resetBtn'
}).appendTo('#container');

$(".resetBtn").click(function () {
    // alert('working');
    localStorage.clear()
    // document.container.time - block.description.val('');
    // $("input:text").val("");
    $('.description').val('');
})