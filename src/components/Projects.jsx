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
      <article className="flex flex-row p-3 mr-5">
        <div className="w-1/6 m-2">
          <img 
            className="" 
            src={diccionarioIconos[imgUrl]} 
            alt={title} 
            />
        </div>

        <div className="w-5/6 ml-4">
          <a href={url}>
            <h3 className="mb-3 font-bold">{title}</h3>
          </a>
          <p>{description}</p>
        </div>
      </article>
    </>
  );
};

export default Projects;
