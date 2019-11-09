import React from 'react';
import './App.css';
import Todolist from "./Todolist";
import AddNewItemForm from "./components/AddNewItemForm";
import * as axios from "axios";


class App extends React.Component {

    nextTodoListId = 0;
    state = {
        todolists: [
            // {id: 1, title: ' learn'},
            // {id: 2, title: 'Weeks '},
            // {id: 3, title: 'Year '}
        ]
    }
    saveState = () => {
        // в строку парсит
        let stateAsString = JSON.stringify(this.state)
        localStorage.setItem('our-state' + this.props.id, stateAsString)
    }

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
    // restoreState = () => {
    //     // объявляем наш стейт стартовый
    //     let state = this.state;
    //
    //     axios.get("https://social-network.samuraijs.com/api/1.0/todo-lists", {withCredentials: true})
    //         .then(res => {
    //             this.setState({todolists: res.data})
    //         });
    // }

    //3
    componentDidMount() {
        this.restoreState()
    }

    addTodoList = (title) => {
        let newTodoList = {
            id: this.nextTodoListId,
            title: title
        }

        this.setState({todolists: [...this.state.todolists, newTodoList]},
            ()=>{this.saveState()}
        );

        this.nextTodoListId++;


    }




    render = () => {

        const todo = this.state.todolists
            .map(e => <Todolist id={e.id} title={e.title}/>)

        return (
            <>
                <AddNewItemForm addItem={this.addTodoList}/>
                <div className="App">
                    {todo}
                </div>
            </>
        );
    }
}



export default App;

