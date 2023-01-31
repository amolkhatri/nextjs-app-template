import { gql, useMutation, useQuery } from "@apollo/client";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import List from '@mui/material/List';
import { useRef } from "react";
import Todo from "./todo";

const QUERY = gql`
  query ToDos {
    todos {
      id
      name
    }
  }
`;

const ADD_TODO = gql`
  mutation ADD_TODO($name: String) {
     addTodo(name: $name) {
        id
        name
     }
  }
`;

const DELETE_TODO = gql`
  mutation DELETE_TODO($id: String){
    deleteTodo(id: $id)
  }
`

export default function TodoList() {
  const { data, loading, error } = useQuery(QUERY);
  const [addTodo, {}] = useMutation(ADD_TODO, {
    refetchQueries: [
      { query: QUERY }
    ]
  });

  const [deleteTodo, {}] = useMutation(DELETE_TODO, {
    refetchQueries:[
      {
        query: QUERY
      }
    ]
  })

  const textRef = useRef();

  if (loading) {
    return <h2>loading</h2>
  }

  if (error) {
    return <h2>error</h2>
  }


  function add(name) {
    addTodo({
      variables: { name }
    })
  };


  function deleteTodoItem(id){
    deleteTodo({
      variables: {id}
    })
  }


  return (
    <Container maxWidth="sm">
      <TextField id="outlined-password-input" inputRef={textRef} label="Todo" />
      <Button variant="contained" onClick={e => { e.preventDefault(); add(textRef.current.value); }}>Add Todo</Button>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          data.todos.map((todo) => {
            return <Todo id={todo.id} name={todo.name} deleteTodo={deleteTodoItem}></Todo>
          })
        }
      </List>
    </Container>

  )
}