import Image from 'next/image'
import React from 'react'

const Project = ({project}) => {
  return (
    <div className='w-[350px] border rounded-lg flex flex-col items-center justify-center '>
      <div className="img w-full h-[250px] rounded-lg">
      <img src={project.image} />
      </div>
      <p>{project.name}</p>
      <p>{project.description}</p>
      <p>{project.category}</p>
    </div>
  )
}

export default Project