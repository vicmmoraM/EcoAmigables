// Metas predeterminadas
const defaultGoals = [
    { id: 1, text: 'Separar residuos 3 veces a la semana', completed: false },
    { id: 2, text: 'Revisar el mapa 1 vez por semana', completed: false },
    { id: 3, text: 'Clasificar residuos orgánicos correctamente', completed: false }
];

// Cargar metas desde localStorage o usar las predeterminadas
function loadGoals() {
    const saved = localStorage.getItem('ecoamigables_goals');
    if (saved) {
        return JSON.parse(saved);
    }
    return defaultGoals;
}

// Guardar metas en localStorage
function saveGoals(goals) {
    localStorage.setItem('ecoamigables_goals', JSON.stringify(goals));
}

// Obtener metas actuales
let goals = loadGoals();

// Renderizar metas
function renderGoals() {
    const goalsList = document.getElementById('goalsList');
    
    if (goals.length === 0) {
        goalsList.innerHTML = `
            <div class="empty-goals">
                <p style="text-align: center; color: #999; font-size: 1.2em; padding: 40px;">
                    No tienes metas aún. ¡Agrega tu primera meta! 🎯
                </p>
            </div>
        `;
        updateProgress();
        return;
    }
    
    goalsList.innerHTML = goals.map(goal => `
        <div class="goal-item ${goal.completed ? 'completed' : ''}">
            <div class="goal-content">
                <div class="goal-icon">
                    ${goal.completed ? '✅' : '🎯'}
                </div>
                <p class="goal-text ${goal.completed ? 'completed-text' : ''}">${goal.text}</p>
            </div>
            <div class="goal-actions">
                <button 
                    onclick="toggleGoal(${goal.id})" 
                    class="goal-button ${goal.completed ? 'uncomplete-button' : 'complete-button'}"
                >
                    ${goal.completed ? 'Desmarcar' : 'Completar'}
                </button>
                <button 
                    onclick="deleteGoal(${goal.id})" 
                    class="delete-button"
                >
                    🗑️
                </button>
            </div>
        </div>
    `).join('');
    
    updateProgress();
}

// Actualizar barra de progreso
function updateProgress() {
    const total = goals.length;
    const completed = goals.filter(g => g.completed).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    document.getElementById('progressPercentage').textContent = percentage + '%';
    document.getElementById('progressText').textContent = `${completed} de ${total} metas completadas`;
    document.getElementById('progressBar').style.width = percentage + '%';
}

// Agregar nueva meta
function addGoal() {
    const input = document.getElementById('newGoalInput');
    const text = input.value.trim();
    
    if (text === '') {
        alert('Por favor escribe una meta');
        return;
    }
    
    const newGoal = {
        id: Date.now(),
        text: text,
        completed: false
    };
    
    goals.push(newGoal);
    saveGoals(goals);
    renderGoals();
    
    input.value = '';
    
    // Animación de éxito
    showNotification('✅ Meta agregada con éxito');
}

// Completar/Desmarcar meta
function toggleGoal(id) {
    const goal = goals.find(g => g.id === id);
    if (goal) {
        goal.completed = !goal.completed;
        saveGoals(goals);
        renderGoals();
        
        if (goal.completed) {
            showNotification('🎉 ¡Meta completada!');
        }
    }
}

// Eliminar meta
function deleteGoal(id) {
    if (confirm('¿Estás seguro de eliminar esta meta?')) {
        goals = goals.filter(g => g.id !== id);
        saveGoals(goals);
        renderGoals();
        showNotification('🗑️ Meta eliminada');
    }
}

// Mostrar notificación
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Permitir agregar meta con Enter
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('newGoalInput');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addGoal();
            }
        });
    }
    
    renderGoals();
});