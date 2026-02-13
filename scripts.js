//Task 1 variables
let taskTitle1 = "";
let taskDescription1 = "";
let taskStatus1 = "";
//Task 2 variables
let taskTitle2 = "";
let taskDescription2 = "";
let taskStatus2 = "";

//Task 1 Function
function firstTask() {
    if (taskTitle1 === "" && taskDescription1 === "" && taskStatus1 === ""){
        console.log("No tasks added, let's get to work!");
        
    }
    while (taskTitle1 === ""){
        taskTitle1 = prompt("Enter Task 1 Title")
    };
     while (taskDescription1 === ""){
        taskDescription1 = prompt("Enter Task 1 Description")
    };
     while (taskStatus1 === ""){
        taskStatus1 = prompt("Enter Task 1 Status")
    };

    while(taskStatus1 !== "Todo" && taskStatus1 !== "Doing" && taskStatus1 !== "Done"){
        alert("Invalid Status: Please enter 'Todo', 'Doing' or 'Done'");
        taskStatus1 = prompt("Enter Task 1 Status")
    }
    console.log(`Title: ${taskTitle1.toLocaleLowerCase()}, Status: ${taskStatus1.toLocaleLowerCase()}`);
};

//Task 2 function
function secondTask(){
    while (taskTitle2 === ""){
        taskTitle2 = prompt("Enter Task 2 Title")
    };
     while (taskDescription2 === ""){
        taskDescription2 = prompt("Enter Task 2 Description")
    };
     while (taskStatus2 === ""){
        taskStatus2 = prompt("Enter Task 2 Status")
    };

    while(taskStatus2 !== "Todo" && taskStatus2 !== "Doing" && taskStatus2 !== "Done"){
        alert("Invalid Status: Please enter 'Todo', 'Doing' or 'Done'");
        taskStatus2 = prompt("Enter Task 1 Status")
    }
    console.log(`Title: ${taskTitle2.toLocaleLowerCase()}, Status: ${taskStatus2.toLocaleLowerCase()}`);
}

firstTask();
secondTask();








