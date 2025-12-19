import { Button } from 'antd'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className='max-w-[1200px] m-auto p-4'>
        <nav className='flex items-center justify-center gap-[10px]'>
            <Link to='/home'>
              <Button>Home</Button>
            </Link>
            <Link to='/category'>
              <Button>Category</Button>
            </Link>
            <Link to='/todos'>
              <Button>Todos</Button>
            </Link>
        </nav>
      </header>
      <main className='max-w-[1200px] m-auto p-4'>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout