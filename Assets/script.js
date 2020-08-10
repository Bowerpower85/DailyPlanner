$(document).ready(function() {
    const currentDay = moment().format("dddd, MMMM Do YYYY h:mm A");
    console.log(currentDay)
    $("#currentDay").append(currentDay);

    // Variables for time
    const current = moment();
    const nineAM = moment("9:00", ["h:mm a"]);
    const tenAM = moment("10:00", ["h:mm a"]);
    const elevenAM = moment("11:00", ["h:mm a"]);
    const twelvePM = moment("12:00", ["h:mm A"]);
    const onePM = moment("13:00", ["HH:mm A"]);
    const twoPM = moment("14:00", ["HH:mm"]);
    const threePM = moment("15:00", ["HH:mm"]);
    const fourPM = moment("16:00", ["HH:mm A"]);
    const fivePM = moment("17:00", ["HH:mm A"]);
    const sixPM = moment("18:00", ["HH:mm A"]);

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

    if (nineAM.isAfter(current)) {
      $(nine).addClass("future");
    } else if (current.isAfter(nineAM) && current.isBefore(tenAM) || nineAM === current) {
      $(nine).addClass("present");
    } else{
      $(nine).addClass("past");
    }

    if (tenAM.isAfter(current)) {
      $(ten).addClass("future");
    } else if (current.isAfter(tenAM) && current.isBefore(elevenAM) || tenAM === current) {
      $(ten).addClass("present");
    } else{
      $(ten).addClass("past");
    }

    if (elevenAM.isAfter(current)) {
      $(eleven).addClass("future");
    } else if (current.isAfter(elevenAM) && current.isBefore(twelvePM) || tenAM === current) {
      $(eleven).addClass("present");
    } else{
      $(eleven).addClass("past");
    }

    if (twelvePM.isAfter(current)) {
      $(twelve).addClass("future");
    } else if (current.isAfter(twelvePM) && current.isBefore(onePM) || twelvePM === current) {
      $(twelve).addClass("present");
    } else{
      $(twelve).addClass("past");
    }

    if (onePM.isAfter(current)) {
      $(one).addClass("future");
    } else if (current.isAfter(onePM) && current.isBefore(twoPM) || onePM === current) {
      $(one).addClass("present");
    } else{
      $(one).addClass("past");
    }

    if (twoPM.isAfter(current)) {
      $(two).addClass("future");
    } else if (current.isAfter(twoPM) && current.isBefore(threePM) || twoPM === current) {
      $(two).addClass("present");
    } else{
      $(two).addClass("past");
    }

    if (threePM.isAfter(current)) {
      (three).addClass("future");
    } else if (current.isAfter(threePM) && current.isBefore(fourPM) || threePM === current) {
      $(three).addClass("present");
    } else{
      $(three).addClass("past")
    }

    if (fourPM.isAfter(current)) {
      $(four).addClass("future");
    } else if (current.isAfter(fourPM) && current.isBefore(fivePM) || fourPM === current) {
      $(four).addClass("present");
    } else{
      $(four).addClass("past");
    }
    
    if (fivePM.isBefore(current)) {
      $(five).addClass("past");
    } else if (current.isAfter(fivePM) && current.isBefore(sixPM) || fivePM === current) {
      $(five).addClass("present");
    } else{
      $(five).addClass("future");
    }
})



