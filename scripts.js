//Task 1 variables
let taskTitle1 = "";
let taskDescription1 = "";
let taskStatus1 = "";
//Task 2 variables
let tasktitle2 = "";
let taskDescription2 = "";
let taskStatus2 = "";

//Task 1 Function
function firstTask() {
    //Task 1 title loop
    while (taskTitle1 === ""){
        taskTitle1 = prompt("Enter Task 1 Title")
    }
    //Task 1 description loop
    while (taskDescription1 === ""){
        taskDescription1 = prompt("Enter Task 1 Discription")
    }
    //Task 1 status loop
    while (taskStatus1 === ""){
        taskStatus1 = prompt("Enter Task 1 Status")
    }
    //Task 1 Status Error catching loop
    if (taskStatus1 !== "Todo" && taskStatus1 !== "Doing" && taskStatus1 !== "Done"){
        alert("Invalid status: Please enter 'Todo', 'Doing' or 'Done'")
        taskStatus1 = prompt("Enter Task 1 status")
    }
    console.log(`Title: ${taskTitle1.toLocaleLowerCase()}, Status: ${taskStatus1.toLocaleLowerCase()}`);
};

//Task 2 function
function secondTask(){
    //Task 2 title loop
     while (tasktitle2 === ""){
        tasktitle2 = prompt("Enter Task 2 Title")
    }
    //Task 2 description loop
    while (taskDescription2 === ""){
        taskDescription2 = prompt("Enter Task Discription")
    }
    //Task 2 status loop
    while (taskStatus2 === ""){
        taskStatus2 = prompt("Enter Task 2 Status")
    }
    //Task 2 status error catching loop
    if (taskStatus2 !== "Todo" && taskStatus2 !== "Doing" && taskStatus2 !== "Done"){
        alert("Invalid status: Please enter 'Todo', 'Doing' or 'Done'")
        taskStatus2 = prompt("Enter task 2 status")
    }
    console.log(`Title: ${tasktitle2.toLocaleLowerCase()}, Status: ${taskStatus2.toLocaleLowerCase()}`);
}

firstTask();
secondTask();








