import React from 'react';

const Filter = ({onChangeFilter}) => (

    <select onChange={(e)=> {onChangeFilter(e.target.value)}}>
      <option value="ALL"> All </option>
      <option value="TODO"> Todo </option>
      <option value="DONE"> Done </option>
    </select>

);

export default Filter;
