// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));


var saveButtonE1 = $('.saveBtn');

$(document).ready(function() {
  var currentHour = dayjs().hour()
  var timeBlock = $(".time-block")

  timeBlock.each(function() {
    var hourValue = $(this).attr("id")
    if(hourValue < currentHour) {
      $(this).children(".col-8").attr("class", "past col-8 col-md-10 description")
    } else if(hourValue > currentHour) {
      $(this).children(".col-8").attr("class", "future col-8 col-md-10 description")
    } else {
      $(this).children(".col-8").attr("class", "present col-8 col-md-10 description")
    }
  })


 // saves localstorage
  $(saveButtonE1).on('click',function(event) {
    event.preventDefault()
      var value = $(this).siblings(".col-8").val().replace(key)
      var key = $(this).parent().attr("id")

      localStorage.setItem(key, JSON.stringify(value))
      console.log(key, value)
  })

  // gets localstorage 
  for(let i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
  }

});


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  

