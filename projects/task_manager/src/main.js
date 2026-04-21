import './style.css';
import { projects } from './mocks.js';
import { caretRight } from "./icono.js";


document.getElementById('app').innerHTML = `
    <main class="container">
        <h1>Proyectos</h1>
        <ul id="projects" class="project-list"></ul>
    </main>
`;


function el (tag, className, text, event) {
    const el = document.createElement(tag);

    if (className) {
        const clases = Array.isArray(className) ? className : [className];
        el.classList.add(...clases);
    }

    if (text) el.textContent = text;
    if (event) {
        el.addEventListener('click', event);
    }
    return el;
}


function createInput (tag, type, className, task) {
    const input = document.createElement(tag);
    if (type && task.completed !== null) {
        input.type = type;
        input.checked = task.completed;
    }
    input.className = className;
    input.addEventListener('click', (e) => {
        task.completed = e.target.checked;
        renderProjects(project_lists, projects);
    });
    return input;
}


function createTasks (task) {
    const div = el(
        'div',
        ['task-item', task.completed ? 'completed' : ''].filter(Boolean)
    )

    div.append(
        createInput('input', 'checkbox', 'task-check', task),
        el('h4', null, task.name)
    );

    return div;
}


function createBody (project) {
    const fragment = document.createDocumentFragment();
    const tasksContainer = el(
        'div',
    );

    openProjects[project.id]
        ? tasksContainer.className = 'tasks-container open'
        : tasksContainer.className = 'tasks-container';

    project.tasks.forEach(t => {
        fragment.appendChild(createTasks(t));
    });

    tasksContainer.append(fragment);
    return tasksContainer;
}


function createHeader (project) {
    const callback = (e) => {
        openProjects[project.id] = !openProjects[project.id];
        renderProjects(project_lists, projects);
    }
    const header = el('header', 'card-header', null, callback);
    const icon = el('i');

    icon.innerHTML = caretRight();
    openProjects[project.id]
        ? icon.className = 'icon open'
        : icon.className = 'icon'

    const info = el('div');
    const title = el('h3', null, project.name);
    const meta = el('span', null, project.date || 'sin fecha');

    info.append(title, meta);
    header.append(info, icon);
    return header;
}


function createFooter (project) {
    return el(
        'footer',
        'card-footer',
        `${project.completed || 0} of ${project.totalTasks} tasks completed`);
}


function createCard (project) {
    const li = el('li', 'card');
    li.append(createHeader(project), createBody(project), createFooter(project));
    return li;
}


function renderProjects (list_elements, projects) {
    list_elements.innerHTML = '';
    const fragment = document.createDocumentFragment();

    projects.forEach(project => {
        fragment.appendChild(createCard(project));
    });

    list_elements.appendChild(fragment);
}


const project_lists = document.getElementById('projects');
let openProjects = Object.fromEntries(
    projects.map(p => [p.id, false])
);

renderProjects(project_lists, projects);