import React, {Component} from 'react'
import TodoListTask from "./TodoListTask";

class TodoListTasks extends Component {
    render =()=> {

        let taskElements = this.props.tasks.map(task =>
            <TodoListTask task={task} changeTitle={this.props.changeTitle}
                          onTaskStatusChanged={this.props.onTaskStatusChanged}
                         />)
        //let taskElements = this.props.tasks.map(el=><TodoListTask {...el}/>)

        return (
            <div className="todoList-tasks">
                {taskElements}
            </div>
        )
    }
}

export default TodoListTasks