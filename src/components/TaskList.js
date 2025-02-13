import React from 'react';

function TaskList({ tasks, deleteTask, completeTask }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'rgb(214, 60, 18)';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <div>
      <h2>Tasks to Complete</h2>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={task.id} className="task-item">
            <span style={{ color: getPriorityColor(task.priority) }}>
              {index + 1}. {task.title} ({task.priority})
            </span>
            <div className="task-buttons">
              {!task.completed && (
                <button className="complete-button" onClick={() => completeTask(task.id)}>Complete</button>
              )}
              <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
