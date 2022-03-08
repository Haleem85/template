import React, { Component } from 'react';
function renderTaskLists(){
    const { tasks } = this.props;
return TASK_STATUSES.map(status => {
const statusTasks = tasks.filter(task => task.status === status);
return <TaskList key={status} status={status} tasks={statusTasks} />;
});
};
const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']; 
class TasksPage extends Component {

render() {
return (
<div className="tasks">
<div className="tasklists">
{this.renderTaskLists()}
</div>
</div>
);
}
}
export default TasksPage;