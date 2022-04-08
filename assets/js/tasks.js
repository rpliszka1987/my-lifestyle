

// Display a green check when checkbox is clicked
$(".btn-check").on("click", function(){
    $(this).removeClass("check-no-color").addClass("check-color");
    var taskIndex = $(this).closest(".task-list-item").index();
    console.log(taskIndex);
    var taskList = $(this).parent(".check-box");
    var taskText = taskList.siblings(".task-box").children(".task").text();
    console.log(taskText);

    localStorage.setItem(taskIndex, JSON.stringify(taskText));    
});

// Get the task from modal
$(".save-btn").on("click", function() {
    var parent = $(this).closest(".modal");
    var text = parent.children(".textarea").val();
    console.log(text);
});




// Clear textarea after modale closes
$(".btn-create").on("click", function (){
    $(".textarea").val("");
});


