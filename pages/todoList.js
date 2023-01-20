import { useQuery, gql, useMutation } from "@apollo/client";
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
`

export default function TodoList(){

    const { data, loading, error } = useQuery(QUERY);
    const [addTodo, {mData, mLoading , mError}] = useMutation(ADD_TODO, {
      refetchQueries: [
        {query: QUERY}
      ]
    });
    let input;

    if(loading){
        return <h2>loading</h2>
    }

    if(error){
        return <h2>error</h2>
    }


    function add(name){
      addTodo({
        variables: {name}
      })
    }

    return (
        <div>
            {
                data.todos.map((todo) => {
                   return <Todo name={todo.name}></Todo>
                }) 
            }
            <div>
              <input type="text" ref={(node) => input = node}></input>
              <button onClick={e => {
                e.preventDefault();
                add(input.value);
              }}>Add Todo</button>
            </div>
        </div>
        
    )
}