

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


function workDayHours() {
    var hour = moment().hour();
    console.log(hour)//logs as 17 @ 5/Military time 24 hour maybe add class to time blocks of 13++
}
workDayHours();//REMEMBER TO CALL FUNCTIONS


//Need to get number out of string ex..hour8 to equal 8
// function getNumFromStr () {
//     var tName = 'arun_4874_541';
//     alert(tName.match(/\d+/g));
// }

blockTime = "hour8".match(/\d+/)[0] //converting to just number [0] returns string without [0] returns object
console.log(parseInt(blockTime));
console.log(typeof blockTime);
console.log(typeof parseInt(blockTime));