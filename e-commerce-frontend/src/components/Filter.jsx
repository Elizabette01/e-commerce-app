import React from 'react'

const Filter = ({value}) => {
  return (
    <div>
      <p className="flex gap-2">
        <input type="checkbox" className='w-3' value={value} /> {value}
      </p>

    </div>
  )
}

export default Filter
