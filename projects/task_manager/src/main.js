import './style.css';
import { projects } from './mocks.js';


document.getElementById('app').innerHTML = `
    <main class="container">
        <h1>Proyectos</h1>
        <ul id="projects" class="project-list"></ul>
    </main>
`;




function el (tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    if (text) el.textContent = text;
    return el;
}


function createHeader (project) {
    const header = el('header', 'card-header');
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
        `${project.completed || 0} of ${project.tasks.length} tasks completed`);
}


function createCard (project) {
    const li = el('li', 'card');
    li.append(createHeader(project), createFooter(project));
    return li;
}


function renderProjects (list_elements, projects) {
    const fragment = document.createDocumentFragment();

    projects.forEach(project => {
        fragment.appendChild(createCard(project));
    });

    list_elements.appendChild(fragment);
}

const project_lists = document.getElementById('projects');
renderProjects(project_lists, projects);