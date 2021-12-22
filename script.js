

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