import React from 'react'
import Card from '../components/ui/Card'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const Dashboard = () => {
  const data = [
    {name: "Jan", users: 40},
    {name: "Feb", users: 90},
    {name: "Mar", users: 120},
    {name: "Apr", users: 170},
  ]
  return (
    <div>
    <h1 className='text-2xl font-bold mb-6'>Dashboard</h1>
    <div className="grid grid-cols-4 gap-6 mb-10">
      <Card title='Users' value='1200' />
      <Card title='Revenue' value='Kes 345K' />
      <Card title='Orders' value='445' />
      <Card title='Growth' value='22%' />
    </div>
    <div className="bg-white p-6 rounded shadow">
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data}>
          <XAxis dataKey='name' />
          <YAxis/>
          <Tooltip />
          <Line type='monotone' dataKey='users' stroke='#3b82f6' />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default Dashboard