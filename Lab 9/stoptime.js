var startDate = new Date();
var startTime = startDate.getTime();

function stopTime() {
var date_now = new Date()
var time_now = date_now.getTime();
var time_diff = time_now - startTime;
var seconds_elapsed = Math.floor(time_diff/600);
alert('You have been on this site for: ' + seconds_elapsed + " seconds!");
}
