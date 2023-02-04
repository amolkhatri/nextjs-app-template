import React from 'react';
import Bookmark from './bookmark';
import { gql, useQuery } from "@apollo/client"

export const FETCH_QUERY = gql`
  query Bookmarks {
    bookmarks {
      title
      id
    }
  }
`;

export default function BookmarkList() {

    const { data, loading, error } = useQuery(FETCH_QUERY)

    if(loading){
        return <div>Loading</div>
    }

    if(error){
        return <div>error</div>
    }

    function onDelete(){

    }

    return (
        data.bookmarks.map(bookmark => {
            return <Bookmark {...bookmark} onDelete={onDelete}></Bookmark>
        })
    )
}
