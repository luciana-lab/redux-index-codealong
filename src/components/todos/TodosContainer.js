// This component will be getting todos from the store
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'; // import Todo component

class TodosContainer extends Component {
    // map through the list of todos that we're getting from state and render the Todo component for each of them
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    render() {
        return (
            <ol>
                {this.renderTodos()}
            </ol>
        )
    }
}

// Get the list of todos from Redux state
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer);