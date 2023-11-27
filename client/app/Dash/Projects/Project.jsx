import Image from 'next/image'
import React from 'react'

const Project = ({project}) => {
  return (
    <div dir='rtl' className='img-con w-[300px] md:w-[400px] border rounded-lg flex flex-col items-center justify-center hover:transform-hover'>
  <div className="img w-full h-[250px] rounded-lg">
    <img src={project.image} />
  </div>
  <p className='text-xl font-bold'>{project.name}</p>
  <p className='text-center p-2 min-h-[150px]'>{`${project.description.slice(0, 250)}....`}</p>
</div>
  )
}

export default Project