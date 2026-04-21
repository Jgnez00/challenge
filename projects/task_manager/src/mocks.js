export const projects = [
    {
        id: 1,
        name: 'Name for project',
        dueDate: "",
        tasks: [
            { id: 1, name: 'Task 1', priority: 'hight', completed: true },
            { id: 2, name: 'Task 2', priority: 'low', completed: false },
            { id: 3, name: 'Task 3', priority: 'medium', completed: false },
        ],
        get completed() {
            return this.tasks.filter(t => t.completed).length
        },
        get totalTasks () {
            return this.tasks.length
        }
    },
    {
        id: 2,
        name: 'Name for project',
        dueDate: "",
        tasks: [
            { id: 4, name: 'Task 4', priority: 'hight', completed: false },
            { id: 5, name: 'Task 5', priority: 'low', completed: false },
            { id: 6, name: 'Task 6', priority: 'medium', completed: false },
        ],
        get completed() {
            return this.tasks.filter(t => t.completed).length
        },
        get totalTasks () {
            return this.tasks.length
        }
    },
    {
        id: 3,
        name: 'Name for project',
        dueDate: "",
        tasks: [
            { id: 7, name: 'Task 7', priority: 'hight', completed: false },
            { id: 8, name: 'Task 8', priority: 'low', completed: false },
            { id: 9, name: 'Task 9', priority: 'medium', completed: false },
        ],
        get completed() {
            return this.tasks.filter(t => t.completed).length
        },
        get totalTasks() {
            return this.tasks.length
        }
    }
]