$(document).ready(function() {
    const currentDay = moment().format("dddd, MMMM Do YYYY h:mm A");
    console.log(currentDay)
    $("#currentDay").append(currentDay);

    // Variables for time
    const nineAM = moment("9:00", ["h:mm"]);
    const tenAM = moment("10:00", ["h:mm"]);
    const elevenAM = moment("11:00", ["h:mm"]);
    const twelvePM = moment("12:00", ["h:mm"]);
    const onePM = moment("1:00", ["h:mm"]);
    const twoPM = moment("2:00", ["h:mm"]);
    const threePM = moment("3:00", ["h:mm"]);
    const fourPM = moment("4:00", ["h:mm"]);
    const fivePM = moment("5:00", ["h:mm"]);

    // Variables to change color as timeblocks change from past to presrnt to future.
    const nine = $(".nine");
    const ten = $(".ten");
    const eleven = $(".eleven");
    const twelve = $(".twelve");
    const one = $(".one");
    const two = $(".two");
    const three = $(".three");
    const four = $(".four");
    const five = $(".five");  
    
    $(".saveBtn").on("click", function(event) {
      event.preventDefault();
      localStorage.setItem("9amToDo", $("#9amToDo").val());
      localStorage.setItem("10amToDo", $("#10amToDo").val());
      localStorage.setItem("11amToDo", $("#11amToDo").val());
      localStorage.setItem("12pmToDo", $("#12pmToDo").val());
      localStorage.setItem("1pmToDo", $("#1pmToDo").val());
      localStorage.setItem("2pmToDo", $("#2pmToDo").val());
      localStorage.setItem("3pmToDo", $("#3pmToDo").val());
      localStorage.setItem("4pmToDo", $("#4pmToDo").val());
      localStorage.setItem("5pmToDo", $("#5pmToDo").val());
    })
})



