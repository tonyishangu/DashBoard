import React from 'react'
import Table from '../components/ui/Table'

const Users = () => {
  const users = [
    {name: 'Tony', email: 'tony@gmail.com', role: 'Admin'},
    {name: 'Brian', email: 'brian@gmail.com', role: 'Editor'}
  ]
  return (
    <div>
      <h1 className='text-2xl font-bold mb-6'>
        Users
      </h1>
      <Table data={users} />

    </div>
  )
}

export default Users