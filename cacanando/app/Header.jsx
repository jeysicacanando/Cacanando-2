import React from 'react'
import { data } from './data'

console.log(data);

const Header = () => {
  return <div>
    {data.map((data, key)=> (
        <li key={key}>{data.name}</li>
    ))}
    </div>
  
};

export default Header