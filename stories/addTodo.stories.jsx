import AddTodo from "./addTodo"

//export default for stories    
export default {
    title: "Component/addTodo",
    component: AddTodo,
    parameters: {
        layout: 'fullscreen'
    }

}

//dummy data for todos  



//Template for stories
const Template = (args) => <AddTodo {...args} />

export const AddTodoTest = Template.bind({});


AddTodoTest.args = {
}