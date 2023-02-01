import React from 'react';
import PropTypes from 'prop-types';
import { Button, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'

export default function Todo({ name, id, onDelete }) {

    return (
        <ListItem disablePadding>
            <ListItemText primary={name} />
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={e => {
                e.preventDefault();
                onDelete(id)
            }}>Remove</Button>
        </ListItem>
    )
}

Todo.propTypes = {
    name: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string
};

Todo.defaultProps = {
    name: null,
    id: -1
};