import React from 'react'

const PolicyCard = ({image, text1, text2}) => {
  return (
    <div>
      <img src={image} alt="" className="w-12 m-auto mb-5" />
      <h3 className="font-semibold capitalize">{text1}</h3>
      <p className="text-gray-400">{text2}</p>
      
    </div>
  )
}

export default PolicyCard
