import TodoList from "./todoList"

//export default for stories    
export default {
    title: "Component/TodoList",
    component: TodoList,
    parameters: {
        layout: 'fullscreen'
    }

}

//dummy data for todos  



//Template for stories
const Template = (args) => <TodoList {...args} />

export const TodoListTest = Template.bind({});


TodoListTest.args = {
    todos: [ {id: "1", name: "Todo 1", completed: false }]
}