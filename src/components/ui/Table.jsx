import React from 'react'

const Table = ({data}) => {
  return (
    <table className='w-full bg-white shadow rounded'>
      <thead className='bg-gray-100'>
        <tr>
          <th className='p-3'>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index} className='border-t'>
            <td clasName='p-3'>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table