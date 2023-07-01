import React from 'react'
import './Toolbar.css'

function Toolbar(props) {
  const { selected, filters, onSelectFilter } = props;
  return (
    <  >
      {filters.map((el) => <button onClick={onSelectFilter} key={el} className={el === selected ? 'btn black' : 'btn'}>{el}</button>)}
    </>
  )
}

export default Toolbar
