import { Button, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'

export default function Todo(prop){

    return (
        <ListItem disablePadding>
            <ListItemText primary={prop.name} />
            <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={e => {
                e.preventDefault();
                prop.deleteTodo(prop.id);
            }}>Remove</Button>
         </ListItem>
    )
}