

//Task constructor
export class Task {
    constructor(title, desc, priority, due, isComplete, checklist, notes) {
        this.title = title;
        this.desc = desc;
        this.priority = priority;
        this.due = due;
        this.isComplete = isComplete;
        this.checklist = checklist;
        this.notes = notes;
        this.id = Math.floor(Math.random() * 100000000)
    };
};



/**
 * Selects a single element based on a CSS selector.
 * @param {string} selector - The CSS selector string.
 * @returns {Element | null} The first matching element or null.
 */
export function select(selector) {
  return document.querySelector(selector);
}

/**
 * Selects all elements based on a CSS selector.
 * @param {string} selector - The CSS selector string.
 * @returns {NodeList} A NodeList of matching elements.
 */
export function selectAll(selector) {
  return document.querySelectorAll(selector);
}

/**
 * Creates a new HTML element of a specified tag name.
 * @param {string} tagName - The name of the tag to create (e.g., 'div', 'p').
 * @returns {HTMLElement} The newly created element.
 */
export function createElement(tagName) {
  return document.createElement(tagName);
}

/**
 * Sets the text content of an element.
 * @param {Element} element - The target element.
 * @param {string} text - The text to set.
 */
export function setText(element, text) {
  if (element) {
    element.textContent = text;
  }
}

/**
 * Appends a child element to a parent element.
 * @param {Element} parent - The parent element.
 * @param {Element} child - The child element to append.
 */
export function appendChild(parent, child) {
  if (parent && child) {
    parent.appendChild(child);
  }
}

/**
 * Adds a CSS class to an element.
 * @param {Element} element - The target element.
 * @param {string} className - The class name to add.
 */
export function addClass(element, className) {
  if (element) {
    element.classList.add(className);
  }
}



//Func to create all the task content on the task card
export function createTaskItem (task, index) {
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

    //this part has to be handled by the function that calls this task create func
    taskArea.insertAdjacentElement("afterbegin", taskItem);
    //look here - problem...
};


// also a problem - the list wil lbe handled i nthe calling function...
export function addTaskToList(title, desc, priority, due, isComplete, checklist, notes) {
    myList.push(new Task(title, desc, priority, due, isComplete, checklist, notes));
    saveAndRenderTasks();
};
