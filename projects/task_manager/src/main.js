import './style.css';
import { projects } from './mocks.js';


document.getElementById('app').innerHTML = `
    <main class="container">
        <h1>Proyectos</h1>
        <ul id="projects" class="project-list"></ul>
    </main>
`;

const list_projectsE = document.getElementById('projects');


(function lists () {
    projects.forEach(project => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const card_header = document.createElement('div');
        const card_footer = document.createElement('div');
        const span = document.createElement('span');
        const spanIcon = document.createElement('span');
        const h3 = document.createElement('h3');

        h3.textContent = project.name;
        span.textContent = 'icono y fecha';
        spanIcon.textContent = 'icono';
        card_footer.textContent = 'check 0 de total completadas';
        card_footer.classList.add('card-footer');

        div.appendChild(h3);
        div.appendChild(span);

        card_header.appendChild(div);
        card_header.appendChild(spanIcon);
        card_header.classList.add('card-header');


        li.appendChild(card_header);
        li.appendChild(card_footer);
        li.classList.add('card');


        list_projectsE.appendChild(li);
        list_projectsE.classList.add('project-card');
    });
})()
