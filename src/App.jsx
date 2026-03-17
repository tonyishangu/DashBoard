import React from 'react'
import Sidebar from './components/layout/Sidebar'
import Navbar from './components/layout/Navbar'
import AppRoutes from './routes/AppRoutes'


function App() {
  
  return (
    <div className='flex h-screen bg-gray-100 dark:bg-gray-900'>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-y-auto">
          <AppRoutes />
        </main>
      </div>
    </div>
  )
}

export default App
