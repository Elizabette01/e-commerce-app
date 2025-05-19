import React from 'react'

const Filter = ({value, fnx}) => {
  return (
    <div>
      <p className="flex gap-2">
        <input type="checkbox" className='w-3' value={value} onClick={fnx} /> {value}
      </p>

    </div>
  )
}

export default Filter
