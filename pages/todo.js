
import TodoList from "../stories/todoList"
import { gql, useQuery, useMutation } from "@apollo/client"
import AddTodoComponent from "../stories/addTodo";

export const FETCH_QUERY = gql`
    query Todos{
        todos{
            id,
            name,
            completed
        }
    }
`;

export const ADD_TODO_QUREY = gql`
    mutation ADD_TODO($name: String) {
        addTodo(name: $name) {
            id
            name
        }
    }`;

export const DELETE_TODO_QUREY = gql`
    mutation DELETE_TODO($id: String){
        deleteTodo(id: $id)
    }
`;

export const UPDATE_STATUS_QUERY = gql`
    mutation UPDATE_STATUS($id: String, $completed: Boolean){
        updateStatus(id: $id, completed: $completed)
    }   
`;

//nextjs page for todos list and add todo using graphql
export default function Todos() {

    const { data, loading, error } = useQuery(FETCH_QUERY);

    const [addTodo, {}] = useMutation(ADD_TODO_QUREY, {
        refetchQueries: [
            { query: FETCH_QUERY }
        ]
    });

    const [deleteTodo, {}] = useMutation(DELETE_TODO_QUREY, {
        refetchQueries: [
            {   query: FETCH_QUERY }
        ]
    });

    const [updateStatus, {}] = useMutation(UPDATE_STATUS_QUERY, {
        refetchQueries: [ 
            {   query: FETCH_QUERY }
        ]
    });
        

    if (loading) return <h2>loading</h2>
    
    if (error) return <h2>error</h2>

    function onAddTodo(name) {
        console.log("clicked to add todo with name: ", name);
        addTodo({
            variables: { name }
        });
    }

    function onDeleteTodo(id) {
        console.log("clicked to delete todo with id: ", id);
        deleteTodo({
            variables: { id }
        });
    };

    function onStatusChange(id, completed){
        console.log("clicked to mark todo as done with id: ", id);
        console.log("completed: ", completed);
        updateStatus({
            variables: { id, completed }
        });
    }


    return (
        <div>
            <AddTodoComponent onAddTodo={onAddTodo}> </AddTodoComponent>
            <TodoList todos={data.todos} onDeleteTodo={onDeleteTodo} onStatusChange={onStatusChange} />
        </div>
    )
}   