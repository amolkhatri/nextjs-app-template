import React from 'react';
import PropTypes from 'prop-types';
import { Button, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'

export default function Bookmark({ title, id, onDelete }) {

    return (
        <ListItem disablePadding>
            <ListItemText primary={title} />
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={e => {
                e.preventDefault();
                onDelete(id)
            }}>Remove</Button>
        </ListItem>
    )
}

Bookmark.propTypes = {
    title: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string
};

Bookmark.defaultProps = {
    name: null,
    id: -1
};