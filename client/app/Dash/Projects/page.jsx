import React from 'react'
import SideNav from '../SideNav'

const Projects = () => {
  return (
    <main dir="ltr" className={``}>
      <div className="flex-col md:flex bg-amber-500 items-start justify-stert pt-3">
        <SideNav />
        <div className="flex min-h-[95vh]">projects</div>
      </div>
    </main>
  )
}

export default Projects