import React, { useState } from 'react'
import SearchBox from '../Pages/SearchBox'
import SearchResult from './SearchResult'

const Search = () => {
    const [myResult, setMyResult] = useState([])
  return (
    <>
        <SearchBox setMyResult={setMyResult} />
        <SearchResult myResult={myResult} />
    </>
  )
}

export default Search