import React, {Component} from 'react'


class TodoListTask extends Component {
    state = {
        editMode: false
    }



    onIsDoneChanged = (e) => {
        this.props.onTaskStatusChanged(this.props.task.id, e.currentTarget.checked)
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }
    render = (props) => {
        let classForAll = this.props.task.isDone ? "doneTask" : 'todoList-task';

        return (
            <div className={classForAll}>
                <input onChange={this.onIsDoneChanged}  type="checkbox"
                       checked={this.props.task.isDone}/>

                {this.state.editMode
                    ? <input onBlur={this.deactivateEditMode}
                             onChange={this.onTitleChanged}
                             autoFocus={true}  value={this.props.task.title}
                             type="text"/>
                    : <span onClick={this.activateEditMode}>
                        ID: {this.props.task.id}
                        - {this.props.task.title}
                        - Priority: {this.props.task.priority}</span>}
            </div>
        )
    }
}

export default TodoListTask
