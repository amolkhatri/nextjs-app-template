import React from 'react';

import PropTypes from 'prop-types';
import { Button, ListItem, ListItemText, List, Checkbox } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

//write a todolist component using material ui

export default function TodoList({todos, onDeleteTodo, onStatusChange}) {
    return (
        <div>
            <h1>ToDo List</h1>
            <List>
                {todos.map((todo) => {
                    let completed = todo.completed;
                    return (
                    <ListItem key={todo.id} disablePadding>
                        <Checkbox checked={todo.completed} onChange={ e => {
                            e.preventDefault();
                            completed = !completed;
                            onStatusChange(todo.id, completed);
                        }}></Checkbox>
                        <ListItemText primary={todo.name} />
                        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={e => {
                            e.preventDefault();
                            onDeleteTodo(todo.id);
                        }}>Remove</Button>
                    </ListItem>
                )}
                )}
            </List>
        </div>
    )
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onDeleteTodo: PropTypes.func.isRequired
};

TodoList.defaultProps = {
    todos: []
};