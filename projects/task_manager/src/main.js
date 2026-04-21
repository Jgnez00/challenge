import './style.css';
import { projects } from './mocks.js';


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


function createBody (project) {
    const tasksContainer = el(
        'div',
    );

    openProjects[project.id]
        ? tasksContainer.className = 'tasks-container open'
        : tasksContainer.className = 'tasks-container';

    project.tasks.forEach(task => {
        const taskDiv = el(
            'div',
            ['task-item', task.completed && 'completed'].filter(Boolean),
            'prueba'
        );

        tasksContainer.append(taskDiv);
    });

    return tasksContainer;
}


function createHeader (project) {
    const callback = (e) => {
        openProjects[project.id] = !openProjects[project.id];
        renderProjects(project_lists, projects);
    }
    const header = el('header', 'card-header', null, callback);
    const icon = el('span', null, 'icon');

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
    console.log(openProjects)
}


const project_lists = document.getElementById('projects');
let openProjects = Object.fromEntries(
    projects.map(p => [p.id, false])
);

renderProjects(project_lists, projects);