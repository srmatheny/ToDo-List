// src/projects.js
import { greeting } from "./greeting.js";
console.log(greeting);
import { storageModule } from "./localStorageModule.js";

import {
  startOfToday,
  startOfWeek,
  endOfWeek,
  endOfToday,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  maxTime,
  minTime,
} from "date-fns";


const contentDiv = document.querySelector(".main-content");


//function Project(name) {
//}

//Project constructor
export class Project {
    constructor(name) {
        this.name = name;
        this.id = Date.now().toString();
        this.tasks = [];
    };
};

const defaultProject = {
    id: "000",
    name: "Tasks",
    tasks: [
        {
            projectId: "000",
            name: "Low Pri Task",
            desc: "Ex of a low pri task",
            dueDate: "2026-10-04",
            priority: "Low",
            id: "00001",
            checked: false,
        },
        {
            projectId: "000",
            name: "Med Pri Task",
            desc: "Ex of a med pri task",
            dueDate: "2026-10-04",
            priority: "Medium",
            id: "00002",
            checked: false,
        },
        {
            projectId: "000",
            name: "High Pri Task",
            desc: "Ex of a high pri task",
            dueDate: "2026-09-15",
            priority: "High",
            id: "00003",
            checked: false,
        },
        {
            projectId: "000",
            name: "No Pri Task",
            desc: "Ex of a task with no pri",
            dueDate: "2026-12-25",
            priority: "",
            id: "00004",
            checked: false,
        },
        {
            projectId: "000",
            name: "Checked off task",
            desc: "Ex of a task that has been checked",
            dueDate: "2026-12-30",
            priority: "High",
            id: "00005",
            checked: true,
        },
    ],
    isDefault: true,
};

let projects = [defaultProject];


function addProject(name) {
    let project;
    const newProject = new Project(name);

    const dupeProjects = projects.filter(function (project) {
        return project.name.startsWith(name);
    });

    if (dupeProjects.length > 0) {
        const count = dupeProjects.length;
        project = new Project(`${name}${count}`);
    } else {
        project = new Project(name);
    }

    let projectId = project.id;

    projects.push(project);

    //save to local storage =- use hers or refactor to use mine?
    saveToLocalStorage(projects, projectId);
    return newProject;

}


export {
    defaultProject,
    projects,
    addProject,
};

