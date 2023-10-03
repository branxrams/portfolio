import React from 'react'
import Projects from './Projects'
import About from './About'
import data from '../data/projectData'

const Content = () => {
  const dataProject = data();
  return (
    <main id='content' className='pt-24 lg:w-1/2 lg:py-24 text-white'>
    <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
      <About/>
    </section>
      <section id='projects' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
        <h2 className='text-gray-300 text-center text-3xl font-bold mb-10'>Proyectos</h2>
          {dataProject.map(project => (
            <a href={project.url}>
              <Projects
                key = {project.id}
                project = {project}
              />
            </a>
          ))}
      </section>
    </main>
  )
}

export default Content