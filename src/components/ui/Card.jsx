import React from 'react'

const Card = ({title, value}) => {
  return (
    <div className='bg-white dark:bg-gray-800 shadow rounded p-6'>
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>

    </div>

  )
}

export default Card