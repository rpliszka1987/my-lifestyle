var taskList = [];


$(".tasks-save-btn").on("click", function (e) {
    e.preventDefault()
    var parent = $(this).closest(".modal");
    var text = parent.children(".tasks-text").val().trim();
    const newTask = {
        task_text: text
    }
    saveTaskItem(newTask)
    createTaskItem(newTask);
});

var createTaskItem = function (task) {
    var list = $("<li>").addClass("columns task-list-item");
    var checkDiv = $("<div>").addClass("column is-one-fifth tasks-check-box").html("<button class='tasks-btn-check check-no-color'><i class='fa-solid fa-check fa-lg'></i></button>");
    var taskDiv = $("<div>").addClass("column is-four-fifths task-box").html("<p class='task'>" + task.task_text + "</p>");

    list.append(checkDiv);
    list.append(taskDiv);
    $(".tasks-list").append(list);
};

var saveTaskItem = function (task) {
    taskList.push(task);
    console.log(taskList);
    localStorage.setItem('taskStorage', JSON.stringify(taskList));
};

function getStoredTasks() {
    var storedTasks = localStorage.getItem('taskStorage');
    if (storedTasks) {
        taskList = JSON.parse(storedTasks);
    }
    console.log(taskList);
    taskList.forEach(task => {
        createTaskItem(task);
    });
};

getStoredTasks();

// Clear textarea after modale closes
$(".tasks-btn-create").on("click", function () {
    $("textarea").val("");
});


// Display a green check when checkbox is clicked
$("ul").on("click", ".tasks-btn-check", function(){
    $(this).removeClass("check-no-color").addClass("check-color");
    var list = $(this).parent(".tasks-check-box");
    var taskIndex = $(this).closest(".task-list-item").index();

    setTimeout(function () {
        list.parent(".task-list-item").remove();
        taskList.splice(taskIndex, 1);
        localStorage.setItem('taskStorage', JSON.stringify(taskList));
    }, 280);
});