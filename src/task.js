 
 
 
 //Task constructor
    function Task(title, desc, priority, due, isComplete, checklist, notes) {
        this.title = title;
        this.desc = desc;
        this.priority = priority;
        this.due = due;
        this.isComplete = isComplete;
        this.checklist = checklist;
        this.notes = notes;
        this.id = Math.floor(Math.random() * 100000000)
    };

    function addTaskToList(title, desc, priority, due, isComplete, checklist, notes) {
        myList.push(new Task(title, desc, priority, due, isComplete, checklist, notes));
        //saveAndRenderTasks();
    };