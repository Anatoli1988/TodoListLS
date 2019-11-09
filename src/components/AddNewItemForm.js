import React, {Component} from 'react'

class AddNewItemForm extends Component {

    state = {
        error: false
        // title:''
    }
    onEnter = (e) => {
        if (e.key === "Enter") {
            this.onAddItemClick();
        }
    }
    onAddItemClick = () => {
        let newText = this.state.title;
        this.setState({title: ''})
        if (newText === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})
        }
        this.props.addItem(newText)
        // this.props.addTodoList(title)
    }


    setMistake = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }


    render(props) {
        let classBorderInput = this.state.error === true ? "error" : '';
        return (
            <div className="todoList-header">
                <div className="todoList-newTaskForm">
                    <input value={this.state.title}
                           onKeyPress={this.onEnter} onChange={this.setMistake} className={classBorderInput}
                           type="text" placeholder="New item name"/>

                    <button onClick={this.onAddItemClick}>Add</button>
                </div>
            </div>
        )
    }


}

export default AddNewItemForm