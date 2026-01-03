import { greeting } from "./greeting.js";
console.log(greeting);
import { storageModule } from "./localStorageModule.js";
import { Task } from "./elements.js";


const contentDiv = document.querySelector(".main-content");
const tasks = document.querySelector(".task-area");

let myList = [];

const taskOne = new Task("Func Task 1", "Desc 1", "Pri 1", new Date(2025, 5, 25), false, "checklit 1", "Notes 1");
const taskTwo = new Task("Func Task 2", "Desc 2", "Pri 2", new Date(2025, 7, 4), false, "checklit 2", "Notes 2");
const taskThree = new Task("Func Task 3", "Desc 3", "Pri 3", new Date(2025, 10, 11), false, "checklit 3", "Notes 3");

myList.push(taskOne);
myList.push(taskTwo);
myList.push(taskThree);

storageModule.setItem('testTasks', myList);
console.log(myList);


export default function loadTesting() {

    console.log("In the testing module func now");

    const myIndexList = storageModule.getItem('indexTasks');
    console.log(myIndexList);

    let allTasks = [];

    function addLocalStorage () {
        allTasks = storageModule.getItem('indexTasks');
        saveAndRenderTasks ();
    };

    //helper function to create html elements with textcontent and classes
    function createTaskElement (el, content, className) {
        const element = document.createElement(el);
        element.textContent = content;
        element.setAttribute("class", className);
        return element;
    };

    //helper func to create an imput checkbox for if book is read w/ event listener for if book is read
    function createCompleteElement(taskItem, task) {
        let complete = document.createElement("div");
        read.setAttribute("class", "task-complete");
        read.appendChild(createTaskElement("h1", "Complete?", "task-complete-title"));
        let input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("click", (e) => {
            if (e.target.checked) {
                bookItem.setAttribute("class", "card task complete-checked");
                ttask.complete = true;
                saveAndRenderTaks();
            } else {
                taskItem.setAttribute("class", "card task complete.unchecked");
                task.complete = false;
                saveAndRenderTasks();
            };
        });
        if (task.complete) {
            input.checked = true;
            taskItem.setAttribute("class", "card task complete-checked");
        };
        complete.appendChild(input);
        return complete;
    };

    //Func to create all the task content on the book card
    function createTaskItem (task, index) {
        const taskItem = document.createElement("div");
        taskItem.setAttribute("id", index);
        taskItem.setAttribute("key", index);
        taskItem.setAttribute("class", "card task test-card");
        taskItem.appendChild(
            createTaskElement("h4", `Task: ${task.title}`, "task-title")
        );
        taskItem.appendChild(
            createTaskElement("h5", `Description: ${task.desc}`, "task-desc")
        );
        taskItem.appendChild(
            createTaskElement("h5", `Priority: ${task.priority}`, "task-priority")
        );

        taskArea.insertAdjacentElement("afterbegin", taskItem);
    };



//
// Start page HTML set up area
//
    const container = document.createElement("div");
    container.classList.add("test-container");
    const testHdrDiv = document.createElement('div');
    container.appendChild(testHdrDiv);
    const hdrText = document.createElement("h1");
    hdrText.innerText = "Task List / All Tasks";
    testHdrDiv.appendChild(hdrText);

    const taskArea = document.createElement("div");
    taskArea.classList.add("task-area");
    taskArea.id = taskArea;
    container.appendChild(taskArea);

    const listText = document.createElement("h1");
    listText.innerText = "Current Tasks";
    taskArea.appendChild(listText);

    const card1 = document.createElement('div');
    card1.classList.add('test-card');
    taskArea.appendChild(card1);
 
    const t1Title = document.createElement('h4');
    t1Title.innerText = myIndexList[1].title;    
    card1.appendChild(t1Title);


    const t1Desc = document.createElement('h5');
    const t1pri = document.createElement('h5');
    const t1due = document.createElement('h5');
    const t1isComp = document.createElement('h5');
    t1Desc.innerText = myIndexList[1].desc;    
    t1pri.innerText = myIndexList[1].priority;    
    t1due.innerText = myIndexList[1].due;    
    t1isComp.innerText = myIndexList[1].isComplete;    

    card1.appendChild(t1Desc);
    card1.appendChild(t1pri);
    card1.appendChild(t1due);
    card1.appendChild(t1isComp);


    createTaskItem(myIndexList[1], 1);
    createTaskItem(myIndexList[2], 2);
    createTaskItem(myIndexList[3], 3);


/*

   
    const statContainer = document.createElement("div");
    statContainer.classList.add("stat-container");
    todosApp.appendChild(statContainer);

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");
    statContainer.appendChild(detailsDiv);

    const hdrProgress = document.createElement("h3");
    hdrProgress.innerText = "Progress / Details";
    detailsDiv.appendChild(hdrProgress);

    const progressBarDiv = document.createElement("div");
    progressBarDiv.id = "progressbar";
    detailsDiv.appendChild(progressBarDiv);

    const progress = document.createElement("div");
    progress.id = "progress";
    progressBarDiv.appendChild(progress);

    const statsNumber = document.createElement("div");
    statsNumber.classList.add("stats-number");
    statContainer.appendChild(statsNumber);

    const numbers = document.createElement("p");
    numbers.id = "numbers";
    statsNumber.appendChild(numbers);

    // Create Form for Add Task
    const formArea = document.createElement("form");
    formArea.classList.add("input-area");
    todosApp.appendChild(formArea);

    const inputText = document.createElement("input");
    inputText.id = "task-input";
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', 'Add a New Task');
    
    const inputSubmit = document.createElement("button");
    inputSubmit.id = "add-task-button";
    inputSubmit.setAttribute('type', 'submit');
    const iconElement = document.createElement('i');
    iconElement.className = 'fa-solid fa-plus';
    inputSubmit.appendChild(iconElement);

    formArea.appendChild(inputText);
    formArea.appendChild(inputSubmit);

    const todosCont = document.createElement("div");
    todosCont.classList.add("todos-container");
    todosApp.appendChild(todosCont);

    const list = document.createElement('ul');
    list.id = "task-list";
    todosCont.appendChild(list);

    const empImg = document.createElement("img");
    empImg.src = "../src/images/empty-icon.jpg";
    empImg.classList.add("empty-image");
    empImg.setAttribute('width', "100px");
    empImg.setAttribute('height', '100px');
    todosCont.appendChild(empImg);
*/
    contentDiv.appendChild(container);

    //
    // END HTML set up area
    // ( I think)


   
    //console log the array
    
    //console.log(myList);



}