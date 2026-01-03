//domController.js

import { storageModule } from "./localStorageModule.js";
import * as projectModule from "./projects.js";
import { Project } from "./projects.js";


let activeProject = projectModule.projects[0];



function DomController() {

    

    const addProjectBtn = document.getElementById("addProjectBtn");
    console.log(addProjectBtn);
    const addProjectInput = document.getElementById("new-project-input");
    const projectNameInput = document.getElementById("new-project-input");
    const projInputArea = document.querySelector(".projects-list-area");





    addProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("add project button clicked");

        let projectName = projectNameInput.ariaValueMax;
        if (projectName !== "") {
            //const newProject = projectModule.addProject(projectName);
            const newProject = new Project('Default! Project');
            console.log(newProject.name);

            let activeProject = newProject;
            //reset project name
            projectNameInput.value = "";

        }
        //will be a renderProject function in this module... and then that projects tasks in the main content window
        addProjectListItem(activeProject.name);
    });

    //goes in renderProjectList() eventually
    //for each loop thru projectList array
    function addProjectListItem(name) {
        console.log("in addProjectListItem func");
        let proj1 = document.createElement("div");
        proj1.classList.add("proj-list-class");
        proj1.style.border = '4px solid red';
        proj1.style.backgroundColor = "white";
        proj1.style.width = '100%';
        proj1.style.height = '30px';
        proj1.innerText = name
        projInputArea.appendChild(proj1);

    };


}

export { DomController };


    



export function createProjectElement (el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute("class", className);
    return element;
}

export function createTaskElement (el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute("class", className);
    return element;
};

export function createDOMElement (el, content, className) {

}
