$(function () {
  const dayJsObject = dayjs();
  console.log(dayJsObject.format("M/D/YYYY ddd h:mm A"));


  const displayTime = document.getElementById('currentDay');


  displayTime.innerHTML = dayJsObject.format("M/D/YYYY ddd h:mm A");


  var hour09 = document.getElementById('hour-09')
  var hour10 = document.getElementById('hour-10')
  var hour11 = document.getElementById('hour-11')
  var hour12 = document.getElementById('hour-12')
  var hour13 = document.getElementById('hour-13')
  var hour14 = document.getElementById('hour-14')
  var hour15 = document.getElementById('hour-15')
  var hour16 = document.getElementById('hour-16')
  var hour17 = document.getElementById('hour-17')

  
    
    function timeDay() {
      var hour = dayjs().hour()
      $(".time-div").each(function () {  
        var timeDiv = $(this).attr('id')

      if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
      } else if (currentHour < timeDiv) {
         $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    })
  };
 

  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
    console.log
  });

  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
});
