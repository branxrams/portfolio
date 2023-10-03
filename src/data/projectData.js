export function data() {
  return  [
        {
            id: 1,
            title: "Citas Veterinaria",
            description: "Programa para control de citas de pacientes para veterinaria, cuenta con formulario que actualiza informacion en tiempo real.",
            imgUrl: "IconoSalud",
            url: 'https://fancy-lokum-b34f92.netlify.app/'
        },
        {
            id: 2,
            title: "Cotizador Criptomonedas",
            description: "Programa para cotizar criptomonedas en tiempo real, consumiendo una API de cryptos se puede hacer conversiones a divisas de criptos en tiempo real.",
            imgUrl: "IconoSuscripciones",
            url: 'https://jolly-phoenix-605d7e.netlify.app/'
        },
        {
            id: 3,
            title: "Control Gastos",
            description: "Programa para controlar los gastos de acuerdo a un monto base establecido, permite filrar, editar y eliminar gastos en tiempo real.",
            imgUrl: "IconoAhorro",
            url: 'https://regal-fudge-9da73b.netlify.app/'
        },
        {
            id: 4,
            title: "Control Clientes",
            description: "Programa para llevar un control de cliente mediante una lista editable en tiempo real, modificacion de API con peticiones para la creacion de un CRUD.",
            imgUrl: "IconoOcio",
            url: 'https://spontaneous-peony-1e5576.netlify.app/'
        }
    ]

}

export function particleConfig () {
    return {
        background: {
          color: {
            value: "#232741",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }
}
