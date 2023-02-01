import Bookmark from "./bookmark";

export default {
  title: "Component/Bookmark",
  component: Bookmark,
  parameters: {
    layout: 'fullscreen',
  }
};


const Template = (args) => <Bookmark {...args} />

export const BookmarkTest = Template.bind({})

BookmarkTest.args = {
    title: "Bookmar 1"
}