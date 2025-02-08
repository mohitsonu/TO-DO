import React from 'react';

function TaskList({ tasks, deleteTask, completeTask }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <span style={{ color: getPriorityColor(task.priority) }}>
            {task.title}
          </span>
          {!task.completed && (
            <button className="complete-button" onClick={() => completeTask(task.id)}>Complete</button>
          )}
          <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
