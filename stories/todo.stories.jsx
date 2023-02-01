import Todo from "./todo";

export default {
  title: "Component/Todo",
  component: Todo,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  }
};


const Template = (args) => <Todo {...args} />

export const TodoTest = Template.bind({})

TodoTest.args = {
    name: "MyNewTest"
}