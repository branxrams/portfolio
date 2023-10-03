import React from 'react'
import IconGit from '../assets/github-logo-240.png'
import Iconlnkl from '../assets/linkedin-square-logo-240.png'

const Header = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
        <h1 className='font-black text-4xl text-white mb-3'>Bryan Ramos Osuna</h1>
        <p className='block text-gray-100 font-bold text-xl'>Desarrollador Web FullStack</p>
        <p className='block text-gray-400 font-bold mt-3 pr-40'>Construyo productos accesibles, inclusivos y con experiencia digital para la web.</p>
        
        <nav className='hidden text-white mt-16 mb md:block'>
        <ul className='grid gap-3 w-max pt-10'>
            <li>
                <a href="#about">Sobre mi</a>
            </li>
            <li>
                <a href="#projects">Proyectos</a>
            </li>
        </ul>
            
        </nav>
        <section className='w-full flex flex-row gap-4 mt-20'>
            <a href="https://github.com/branxrams">
                <img
                    className='w-10'
                    src={IconGit} 
                    alt="BranxRams linkedl" />
            </a>
            <a href="https://www.linkedin.com/in/branxu/">
                <img 
                    className='w-10'
                    src={Iconlnkl} 
                    alt="Branxrams Github" />
            </a>
        </section>
    </header>
  )
}

export default Header