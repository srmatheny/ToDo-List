import "./modal-styles.css";
import { select, selectAll, createElement, setText, appendChild, addClass } from './elements.js';
import { createProjectElement } from './domControl.js';
import { storageModule } from "./localStorageModule.js";
import { Task } from "./elements.js";
import { Project } from "./projects.js";



const addProject = document.querySelector(".add-project");
const modal = document.querySelector("#modal");
const span = document.querySelector(".close");

export default function loadIndex() {

    console.log("In the load Index Page Tab Thing now");

    window.addEventListener("click", (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        };  
    });

    span.addEventListener("click",  () => {
        modal.style.display = "none";
    });

    addProject.addEventListener("click", () => {
        modal.style.display = "block";
        document.querySelector(".form-title").textContent = "Add Project";
        document.querySelector(".form-add-button").textContent = "Add";
    });


// Get the main container
    const contentDiv = select(".main-content");
    const container = select('.container');
    console.log(container);

    let projList = [];
    const defProj = new Project('Default Project', 0, ["Item1", "Item2"]);
    projList.push(defProj);
    console.log(projList);

    if (container) {

        //Create a new h1 element
        const newH1 = createElement('h1');
        // 2. Set its text content
        setText(newH1, 'Default Project / Task List Area...');
        // 3. Add a CSS class
        addClass(newH1, 'index-mainHdr-text');
        // 4. Append it to the container
        appendChild(container, newH1);

        //create a div for project display
        let newDiv = createElement('div');
        addClass(newDiv, 'index-project-area');
        appendChild(container, newDiv) 
    
        let new2 = createElement('h3');
        setText(new2, projList[0].name);
        addClass(new2, 'project-title-text');
        appendChild(newDiv, new2);
        new2 = createElement('h4');
        setText(new2, "Id: " + projList[0].id);
        appendChild(newDiv, new2);
        new2 = createElement('h4');
        setText(new2, "Task List / ToDo: " + projList[0].todoList);
        appendChild(newDiv, new2);



    };


    function addProjectToLibrary(title, id) {
        projList.push(new Project(title, id));
        //saveAndRenderProjects();
        console.log(projList);
        renderProjects();
    };

    const addProjectForm = document.querySelector(".add-project-form")
    addProjectForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        let newProject = {};
        for (let [name, value] of data) {
            if (name === "project-tasks") {
                newProject["project-tasks"] = true;
            } else {
                newProject[name] = value || "";
            };
        };

        if (!newProject["project-tasks"]) {
            newProject["project-tasks"] = false;
        };

        if(document.querySelector(".form-title").textContent === "Edit Project") {
            let id = e.target.id;
            let editProject = projList.filter((project) => project.id == id)[0];
            editProject.title = newProject["project-title"];
            editProject.id = newProject["project-id"];
            editProject.tasks = newProject["project-tasks"];
            renderProjects();

        } else {
            addProjectToLibrary(
            newProject["project-title"], 
            newProject["project-id"], 
            newProject["project-tasks"]
            );

        };
        
        addProjectForm.reset();
        //modal.display.style = "none";
        //addProjectForm.display.style = "none";

    });

    console.log(projList);

    function renderProjects () {
        container.textContent = "";
        projList.map((project, index) => {
            createProjectItem(project, index);
        });
    };

    function createProjectItem (project, index) {
        const projectItem = document.createElement('div');
        projectItem.setAttribute("id", index);
        projectItem.setAttribute("key", index);
        projectItem.setAttribute("class", "card task test-card");
        projectItem.appendChild(
            createProjectElement("h1", `Project Name: ${project.title}`, "project-title")
        );
        projectItem.appendChild(
            createProjectElement("h1", `ID: ${project.id}`, "project-id")
        );
        projectItem.appendChild(
            createProjectElement("h1", `Tasks: ${project.tasks}`, "project-tasks")
        );

        projectItem.appendChild(createProjectElement("button", "X", "delete"));

        projectItem.querySelector(".delete").addEventListener("click", () => {
            //deleteProject(index);
        });

        container.insertAdjacentElement("afterbegin", projectItem);

    };

    


    

    

    



};


