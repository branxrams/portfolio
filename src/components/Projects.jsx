import React from "react";

import IconoAhorro from "../assets/logo/icono_ahorro.svg";
import IconoOcio from "../assets/logo/icono_ocio.svg";
import IconoSalud from "../assets/logo/icono_salud.svg";
import IconoSuscripciones from "../assets/logo/icono_suscripciones.svg";

const diccionarioIconos = {
  IconoAhorro,
  IconoOcio,
  IconoSalud,
  IconoSuscripciones,
};

const Projects = ({ project }) => {
  const { title, description, imgUrl, url } = project;

  return (
    <>
      <article className="group relative flex flex-row p-3 mr-5 mb-10 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

      </div>
        <div className="w-1/6 m-2">
          <img 
            className="" 
            src={diccionarioIconos[imgUrl]} 
            alt={title} 
            />
        </div>

        <div className="w-5/6 ml-4 z-10">
          <h3 className="text-gray-300 mb-3 font-bold">{title}</h3>
          <p className="text-justify text-gray-400 font-medium">{description}</p>
        </div>
      </article>
    </>
  );
};

export default Projects;
