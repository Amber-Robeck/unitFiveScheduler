

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