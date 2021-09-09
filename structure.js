var today = new Date();
var time = "";

var colors = ['red' , 'yellow' , 'blue' , 'green' , 'orange' , 'lightgreen' , 'lightorange' , 'orangeyellow' , 'lightblue' , 'cyan' , 'whitesmoke' , 'black'];
var months = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];
var daysOfWeek = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];

setInterval(function () { 
    today = new Date(); 
    time = today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear() + " | " +  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " | " + daysOfWeek[today.getDay()];
    document.getElementById('currentTime').innerText = time;
} , 1);

