
import React from 'react';
import PropTypes from 'prop-types';
//write a react component using material ui to add a todo

export default function AddTodo({ onAddTodo }) {
    const [name, setName] = React.useState("");
    return (
        <div>
            <h1>Add Todo</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={e => {
                e.preventDefault();
                onAddTodo(name);
            }}>Add</button>
        </div>
    )

}
AddTodo.propTypes = {
    onAddTodo: PropTypes.func.isRequired
};

AddTodo.defaultProps = {
    onAddTodo: () => { }
}