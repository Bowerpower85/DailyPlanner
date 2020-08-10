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
    
    // Variables to pull saved tasks from local Storage.
    const toDo9 = localStorage.getItem("9amToDo");
    const toDo10 = localStorage.getItem("10amToDo");
    const toDo11 = localStorage.getItem("11amToDo");
    const toDo12 = localStorage.getItem("12pmToDo");
    const toDo1 = localStorage.getItem("1pmToDo");
    const toDo2 = localStorage.getItem("2pmToDo");
    const toDo3 = localStorage.getItem("3pmToDo");
    const toDo4 = localStorage.getItem("4pmToDo");
    const toDo5 = localStorage.getItem("5pmToDo");
    
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

    if (toDo9 !== null) {
      $("#9amToDo").val(toDo9);
    }

    if (toDo10 !== null) {
      $("#10amToDo").val(toDo10);
    }

    if (toDo11 !== null) {
      $("#11amToDo").val(toDo11);
    }

    if (toDo12 !== null) {
      $("#12pmToDo").val(toDo12);
    }

    if (toDo1 !== null) {
      $("#1pmToDo").val(toDo1);
    }

    if (toDo2 !== null) {
      $("#2pmToDo").val(toDo2);
    }

    if (toDo3 !== null) {
      $("#3pmToDo").val(toDo3);
    }

    if (toDo4 !== null) {
      $("#4pmToDo").val(toDo4);
    }

    if (toDo5 !== null) {
      $("#5pmToDo").val(toDo5);
    }
})



