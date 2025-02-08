import React from 'react';

function Achievements({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="achievements">
      <h2>Achievements</h2>
      <p>You’ve completed {completedTasks.length} goals!</p>
      {completedTasks.length > 0 && <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>{task.title} ✅</li>
        ))}
      </ul>}
    </div>
  );
}

export default Achievements;
