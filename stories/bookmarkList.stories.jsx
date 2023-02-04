import BookmarkList, {FETCH_QUERY} from "./bookmarkList";

export default {
  title: "Component/BookmarkList",
  component: BookmarkList,
  parameters: {
    layout: 'fullscreen',
  }
};


const Template = () => <BookmarkList />

export const BookmarkListTest = Template.bind({})

BookmarkListTest.parameters = {
    apolloClient:{
        mocks:[
            {
                request: {
                  query: FETCH_QUERY,
                },
                result: {
                  data: {
                     bookmarks: [
                        {
                            title: "Bookmark 1"
                        },
                        {
                            title: "Bookmark 3"
                        }
                     ]
                  }
                }
            }
        ]
    }
}
p