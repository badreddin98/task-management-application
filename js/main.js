// My Task Management App JavaScript

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize my tooltips
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(tooltip => {
        new bootstrap.Tooltip(tooltip);
    });

    // Add floating animation to my cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('floating');
    });

    // My form validation
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                showMessage('Please fill in all required fields! 😊');
            }
            form.classList.add('was-validated');
        });
    });
});

// My task management functions
function addTask(title, description, dueDate) {
    // This is where I'll add task creation logic later
    console.log('Adding new task:', { title, description, dueDate });
    showMessage('Task added successfully! 🎉');
}

function completeTask(taskId) {
    // This is where I'll add task completion logic later
    console.log('Completing task:', taskId);
    showMessage('Great job completing the task! 🌟');
}

function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task? 🤔')) {
        // This is where I'll add deletion logic later
        console.log('Deleting task:', taskId);
        showMessage('Task deleted! 🗑️');
    }
}

// My task filter function
function filterTasks(status) {
    const tasks = document.querySelectorAll('.task-item');
    tasks.forEach(task => {
        if (status === 'all' || task.dataset.status === status) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
    showMessage(`Showing ${status} tasks! 👀`);
}

// My search function
function searchTasks(query) {
    const tasks = document.querySelectorAll('.task-item');
    const searchQuery = query.toLowerCase();
    let foundCount = 0;
    
    tasks.forEach(task => {
        const taskText = task.textContent.toLowerCase();
        if (taskText.includes(searchQuery)) {
            task.style.display = 'block';
            foundCount++;
        } else {
            task.style.display = 'none';
        }
    });
    
    showMessage(`Found ${foundCount} matching tasks! 🔍`);
}

// My fun message display function
function showMessage(message) {
    const messageDiv = document.getElementById('message-div') || createMessageDiv();
    messageDiv.textContent = message;
    messageDiv.classList.add('show-message');
    
    setTimeout(() => {
        messageDiv.classList.remove('show-message');
    }, 3000);
}

// Helper function to create my message div
function createMessageDiv() {
    const div = document.createElement('div');
    div.id = 'message-div';
    div.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #198754;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    `;
    document.body.appendChild(div);
    return div;
}

// My dark/light mode toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);
    showMessage(isDark ? 'Dark mode activated! 🌙' : 'Light mode activated! ☀️');
}

// Check my theme preference
if (localStorage.getItem('darkTheme') === 'true') {
    document.body.classList.add('dark-theme');
}
