// script.js

document.getElementById('start-btn').addEventListener('click', function() {
    alert('Project Management Started!');
});

document.getElementById('add-subtask-btn').addEventListener('click', function() {
    const subtaskText = prompt('Enter subtask:');
    if (subtaskText) {
        const subtaskItem = document.createElement('li');
        subtaskItem.textContent = subtaskText;
        document.getElementById('subtasks-list').appendChild(subtaskItem);
    }
});

// Add your JavaScript code here to handle tasks, updates, and productivity chart
// script.js

document.getElementById('start-btn').addEventListener('click', function() {
    alert('Project Management Started!');
});

document.getElementById('add-subtask-btn').addEventListener('click', function() {
    const subtaskText = prompt('Enter subtask:');
    if (subtaskText) {
        const subtaskItem = document.createElement('li');
        subtaskItem.textContent = subtaskText;
        document.getElementById('subtasks-list').appendChild(subtaskItem);
    }
});

// Add your JavaScript code here to handle tasks, updates, and productivity chart
