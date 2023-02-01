import BookmarkList from "./bookmarkList";

export default {
  title: "Component/BookmarkList",
  component: BookmarkList,
  parameters: {
    layout: 'fullscreen',
  }
};


const Template = (args) => <BookmarkList {...args} />

export const BookmarkListTest = Template.bind({})

BookmarkListTest.args = { bookmarks: [{ title: "Bookmark1" }, { title: "Bookmark2" } ] };