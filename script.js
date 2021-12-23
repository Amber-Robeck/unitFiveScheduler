

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
$(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").match(/\d+/)[0]);
    console.log(blockHour)
})
// .match(/\d+/)[0]