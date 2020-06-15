import React from 'react';
import './searchField.css';

export  function SearchField({placeholder, handleChange}) {
    return (
        <input 
        className="search"
         type="search"
        placeholder= {placeholder}
        onChange={handleChange}
        />
    )
}
