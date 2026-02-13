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
    //Motivation Message
    if (taskTitle1 === "" && taskDescription1 === "" && taskStatus1 === ""){
        console.log("No tasks added, let's get to work!");
        
    }
    //Title1 Loop
    while (taskTitle1 === ""){
        taskTitle1 = prompt("Enter Task 1 Title")
    };
    //Description1 Loop
     while (taskDescription1 === ""){
        taskDescription1 = prompt("Enter Task 1 Description")
    };
    //Status1 Loop
     while (taskStatus1 === ""){
        taskStatus1 = prompt("Enter Task 1 Status")
    };
    //Status1 Error Catching Loop
    while(taskStatus1 !== "Todo" && taskStatus1 !== "Doing" && taskStatus1 !== "Done"){
        alert("Invalid Status: Please enter 'Todo', 'Doing' or 'Done'");
        taskStatus1 = prompt("Enter Task 1 Status")
    }
    console.log(`Title: ${taskTitle1.toLocaleLowerCase()}, Status: ${taskStatus1.toLocaleLowerCase()}`);
};

//Task 2 function
function secondTask(){
    //Title2 Loop
    while (taskTitle2 === ""){
        taskTitle2 = prompt("Enter Task 2 Title")
    };
    //Description2 Loop
     while (taskDescription2 === ""){
        taskDescription2 = prompt("Enter Task 2 Description")
    };
    //Status2 Loop
     while (taskStatus2 === ""){
        taskStatus2 = prompt("Enter Task 2 Status")
    };
    //Status Error Catching Loop
    while(taskStatus2 !== "Todo" && taskStatus2 !== "Doing" && taskStatus2 !== "Done"){
        alert("Invalid Status: Please enter 'Todo', 'Doing' or 'Done'");
        taskStatus2 = prompt("Enter Task 1 Status")
    }
    //Console Messages
    console.log(`Title: ${taskTitle2.toLocaleLowerCase()}, Status: ${taskStatus2.toLocaleLowerCase()}`);
}

firstTask();
secondTask();








