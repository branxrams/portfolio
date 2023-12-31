import React from 'react'
import IconGit from '../assets/github-logo-240.png'
import Iconlnkl from '../assets/linkedin-square-logo-240.png'

const Header = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
        <h1 className='font-black text-4xl text-white mb-3 text-center lg:text-left'>Bryan Ramos Osuna</h1>
        <p className='block text-gray-100 font-bold text-xl text-center lg:text-left'>Desarrollador Web FullStack</p>
        <p className='block text-gray-400 font-bold mt-3 lg:pr-40 text-center lg:text-left'>Construyo productos accesibles, inclusivos y con experiencia digital para la web.</p>
        
        <nav className='hidden text-white mt-16 lg:block'>
        <ul className='grid gap-3 w-max pt-10'>
            <li>
                <a 
                    className="group flex items-center py-3"
                    href="#about">
                        <span className="mr-4 h-0.5 w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span
                            className='font-bold uppercase tracking-widest text-gray-300 group-hover:text-slate-200 group-focus-visible:text-slate-200'
                        >
                            Sobre mí
                        </span>
                </a>
            </li>
            <li>
                <a 
                    className='group flex items-center py-3'
                    href="#projects">
                    <span class="nav-indicator mr-4 h-0.5 w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span 
                        className='font-bold uppercase tracking-widest text-gray-300 group-hover:text-slate-200 group-focus-visible:text-slate-200'
                    >
                        Proyectos 
                    </span>
                
                </a>
            </li>
        </ul>
            
        </nav>
        <section className='w-full flex flex-row gap-4 mt-20 justify-center lg:justify-start'>
            <a 
                className='text-white flex items-center justify-center gap-2 rounded-full border border-slate-100 px-6 py-2 transition-colors hover:bg-slate-500 hover:text-gray-400'
                href="https://github.com/branxrams"
            >
                <img
                    className='w-12'
                    src={IconGit} 
                    alt="BranxRams GitHub" />
                    <span>Github</span> 

            </a>
            <a 
                className='text-white flex items-center justify-center gap-2 rounded-full border border-slate-100 px-6 py-2 transition-colors hover:bg-slate-500 hover:text-gray-400'
                href="https://www.linkedin.com/in/branxu/"
            >
                <img 
                    className='w-12'
                    src={Iconlnkl} 
                    alt="Branxrams Linkedin" />
                    <span>LinkedIn</span>
            </a>
        </section>
    </header>
  )
}

export default Header