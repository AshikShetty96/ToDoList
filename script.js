let projects = [];

document.getElementById('add-project-btn').addEventListener('click', function() {
    const projectName = prompt('Enter project name:');
    if (projectName) {
        const project = {
            name: projectName,
            status: 'In Progress',
            subtasks: []
        };
        projects.push(project);
        renderProjects();
        updateCounts();
    }
});

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredProjects = projects.filter(project => 
        project.name.toLowerCase().includes(query) ||
        project.subtasks.some(subtask => subtask.toLowerCase().includes(query))
    );
    renderProjects(filteredProjects);
});

function renderProjects(filteredProjects = projects) {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
    filteredProjects.forEach((project, index) => {
        const projectItem = document.createElement('li');
        projectItem.innerHTML = `
            ${project.name} - ${project.status}
            <div>
                <button onclick="completeProject(${index})">Complete</button>
                <button onclick="addSubtask(${index})">Add Subtask</button>
            </div>
        `;
        projectsList.appendChild(projectItem);
    });
}

function completeProject(index) {
    projects[index].status = 'Completed';
    renderProjects();
    updateCounts();
}

function addSubtask(index) {
    const subtaskName = prompt('Enter subtask name:');
    if (subtaskName) {
        projects[index].subtasks.push(subtaskName);
        renderProjects();
    }
}

function updateCounts() {
    const inProgressCount = projects.filter(project => project.status === 'In Progress').length;
    const completedCount = projects.filter(project => project.status === 'Completed').length;
    document.getElementById('in-progress-count').innerText = inProgressCount;
    document.getElementById('completed-count').innerText = completedCount;
}

// Initial render
renderProjects();
updateCounts();
