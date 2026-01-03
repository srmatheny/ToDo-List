// src/inbox.js
import { greeting } from "./greeting.js";
console.log(greeting);
import { storageModule } from "./localStorageModule.js";

import { select, selectAll, createElement, setText, appendChild, addClass } from './elements.js';
import { createProjectElement } from './domControl.js';
import { Task, Project } from "./elements.js";

import { DomController } from "./domControl.js";

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
const container = document.querySelector('.container');


export default function loadInbox()  {

    alert("In the Inbox Page Tab Thing now");

    const savedList = storageModule.getItem('tasks');
    console.log("Saved List=");
    console.log(savedList);


   

    let myList = [];

    const taskOne = new Task("Task 1", "Desc 1", "Pri 1", new Date(2025, 5, 25), false, "checklit 1", "Notes 1");
    const taskTwo = new Task("Task 2", "Desc 2", "Pri 2", new Date(2025, 7, 4), false, "checklit 2", "Notes 2");
    const taskThree = new Task("Task 3", "Desc 3", "Pri 3", new Date(2025, 10, 11), false, "checklit 3", "Notes 3");

    myList.push(taskOne);
    myList.push(taskTwo);
    myList.push(taskThree);

    addTaskToList("Task 4", "Desc 4", "Pri 2", new Date(1994, 7, 4), false, "checklist 4", "Notes 4");

    //storageModule.setItem('tasks', myList);

    
   
    

    DomController();



    

    

};