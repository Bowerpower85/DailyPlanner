// $(document).ready(funtion()) {
//     const currentDay = moment();
//     console.log(currentDay)


// // // Display the current day at the top using moment.js
//     // $("#currentDay").text(moment()).format("");

// // Add click event to save description to localStorage
//     $(".saveBtn").on("click", function() {
//         event.preventDefault();
//         const task = $(this).siblings(".task").val();
//         const time = $(this).parent().attr("id");
//         localStorage.setItem(time, task);
//     });

// })

$(document).ready(function() {
    const currentDay = moment().format("dddd, MMMM Do YYYY h:mm A");
    console.log(currentDay)
    $("#currentDay").append(currentDay);


    
})



