import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Search({search, setSearch}) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={(event) => {
        setSearch(event.target.value)
      }} />
    </>
  );
}

export default Search;
