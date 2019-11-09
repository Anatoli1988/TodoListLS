import React from 'react';
import './App.css';
import TodoListHeader from "./components/TodoListHeader";
import TodoListTasks from "./components/TodoListTasks";
import TodoListFooter from "./components/TodoListFooter";
import AddNewItemForm from "./components/AddNewItemForm";
import TodoListTitle from "./components/TodoListTitle";

class Todolist extends React.Component {


    state = {
        tasks: [ ],
        filterValue: "All"
    }
    //1
    saveState = () => {
        // в строку парсит
        let stateAsString = JSON.stringify(this.state)
        localStorage.setItem('our-state' + this.props.id, stateAsString)
    }
    //2
    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: 'All',
            nextTaskId: 0
        }
        let stateAsString = localStorage.getItem('our-state' + this.props.id);
        if (stateAsString != null) {
            //в объект
            state = JSON.parse(stateAsString)
        }
        this.setState(state)
    }
    //3
    componentDidMount() {
        this.restoreState()
    }


    onFilterChanged = (poherChto) => {
        this.setState({
            filterValue: poherChto
        })
    }
    addItem = (newText) => {

        let newTask = {
            id: this.state.nextTaskId,
            title: newText,
            isDone: false,
            priority: 'high'
        }
        let newTasks = [...this.state.tasks, newTask]
        this.state.nextTaskId++;
        this.setState({
                tasks: newTasks
            },()=>{this.saveState()});

    }

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(el => {
            if (el.id != taskId) {
                return el
            } else {
                return {...el, ...obj}
            }
        });
        this.setState({
            tasks: newTasks
        },()=>{this.saveState()})
    }

    onTaskStatusChanged = (taskId, isDone) => {
        this.changeTask(taskId, {isDone})
    }
    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title})
    }
    render = () => {

        return (
            <div >
                <div className="todoList">
                    <div className='todoList-header'>
                        <TodoListTitle title = {this.props.title}/>
                        <AddNewItemForm addItem={this.addItem}/>
                    </div>
                    {/*<TodoListHeader title={this.props.title}  />*/}

                    <TodoListTasks changeTitle={this.changeTitle} onTaskStatusChanged={this.onTaskStatusChanged}
                                   tasks={this.state.tasks.filter(ev => {
                                       switch (this.state.filterValue) {
                                           case 'All':
                                               return true
                                           case 'Active':
                                               return ev.isDone === false
                                           case 'Completed':
                                               return ev.isDone === true
                                       }

                                   })}/>
                    <TodoListFooter onFilterChanged={this.onFilterChanged} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default Todolist;

