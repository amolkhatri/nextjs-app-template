import React from 'react';
import Bookmark from './bookmark';


export default function BookmarkList({ bookmarks = [], onDelete }) {

    return (
        bookmarks.map(bookmark => {
            return <Bookmark {...bookmark} onDelete={onDelete}></Bookmark>
        })
    )
}
