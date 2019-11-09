// import React, {Component} from 'react'
//
// class TodoListHeader extends Component {
//
//     state = {
//         error: false
//         // title:''
//     }
//     onEnter = (e) => {
//         if (e.key === "Enter") {
//             this.onAddTaskClick();
//         }
//     }
//     onAddTaskClick = () => {
//         let newText = this.state.title;
//         this.setState({title: ''})
//         if (newText === "") {
//             this.setState({error: true})
//         } else {
//             this.setState({error: false})
//         }
//         this.props.addItem(newText)
//     }
//
//
//     setMistake = (e) => {
//         this.setState({
//             error: false,
//             title: e.currentTarget.value
//         })
//     }
//
//
//     render(props) {
//         let classBorderInput = this.state.error === true ? "error" : '';
//         return (
//             <div className="todoList-header">
//                 <h3 className="todoList-header__title">{this.props.title}</h3>
//                 <div className="todoList-newTaskForm">
//                     <input value={this.state.title}
//                         onKeyPress={this.onEnter} onChange={this.setMistake} className={classBorderInput}
//                             type="text" placeholder="New task name"/>
//
//                     <button onClick={this.onAddTaskClick}>Add</button>
//                 </div>
//             </div>
//         )
//     }
//
//
// }
//
// export default TodoListHeader