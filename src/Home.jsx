import './index.css';
import Opinion from './Opinion';
import { Carousel } from 'react-responsive-carousel';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from './Footer';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#626262',
          '&:hover': {
            backgroundColor: '#3e3e3e',
          },
        },
      },
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="grid gap-8 grid-rows-[auto_1fr_auto] min-w-0 font-mulish">
        {/* Encabezado */}
        <div className="w-screen h-[22vh] sm:h-[30vh] md:h-[35vh] flex flex-row relative px-2 items-center justify-center md:justify-evenly md:gap-8 md:p-4 bg-[rgb(49,133,157)] mask">
          <img src="src/assets/LogoTech.png" alt="" className="h-[5rem] md:h-[7rem] translate-y-[-1rem]" />
          <div className="items-center flex flex-row absolute gap-2 z-10 bottom-1 right-1 md:left-0">
            <img src="src/assets/icons8-youtube.svg" className="h-[30px] object-contain" alt="" />
            <span className="bg-red-600 text-xs p-1 text-white">
              <span className="h-[max-content] mr-2 bg-white text-black">41.6K</span>SUSCRIBETE
            </span>
          </div>
          <div className="relative flex-col justify-between">
            <img src="src/assets/Superior.svg" className="object-contain h-[80px] md:h-[160px] translate-x-[3.7rem] md:translate-x-[9.5rem]" alt="" />
            <div className="flex flex-row gap-6 md:gap-16 items-center justify-center">
              <h1 className="text-white font-bold text-lg md:text-4xl">MATEMÁTICAS</h1>
              <h1 className="text-white font-bold text-md md:text-2xl">IDIOMAS</h1>
            </div>
            <img src="src/assets/Inferior.svg" className="object-contain h-[80px] md:h-[160px]" alt="" />
          </div>
          <img src="src/assets/Laptop.png" className="object-contain h-[250px] hidden lg:block translate-x-[42%]" alt="" />
        </div>

        {/* Sección de descripción */}
        <section className="text-justify flex flex-col gap-8 items-center justify-center p-8 bg-gray-100 m-auto rounded-md sm:w-[60%] shadow-[0_0_5px] shadow-black">
          <p className="text-md/relaxed text-black m-auto">
            Somos un equipo que combina de forma dinámica saber, experiencia y visión del maestro, con la visión de necesidades del aprendiz, desarrollando una didáctica efectiva para el real aprendizaje.
          </p>
        </section>

        {/* Carrusel de opiniones */}
        <Carousel
          className="w-screen"
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
        >
          <Opinion nombre="Juan" mensaje="Me gustan las clases de inglés." />
          <Opinion nombre="Ana" mensaje="Excelente metodología de enseñanza." />
          <Opinion nombre="Carlos" mensaje="Las clases de matemáticas son muy claras." />
          <Opinion nombre="Luisa" mensaje="Recomiendo este equipo de profesores." />
        </Carousel>

        {/* Botón para dejar opinión */}
        <div className="justify-center m-auto">
          <Button variant="contained" className="w-[30vh] Buttoon" component={Link} to="/opiniones">
            Dejar opinión
          </Button>
        </div>
      </div>
      <br />

      <div className='w-screen bg-gray-200 h-0.5 min-h-0 min-w-0'></div>
      <br />

      {/* Acordeón de "¿Qué ofrecemos?" */}
      <Accordion className='flex flex-col items-center font-mulish justify-center m-auto gap-6'>
        <h1 className='text-center text-2xl font-bold'>¿Qué ofrecemos?</h1>
        <h3 className='text-xl font-semibold'>Matemáticas</h3>

        {/* Clases Individuales de Matemáticas */}
        <AccordionItem
          header='Clases Individuales'
          className="w-[80%] bg-white p-4 rounded-lg shadow-md border border-gray-200"
        >
          <ul className='flex flex-col gap-2 mt-4'>
            <li><span className='font-bold'>Enfoque personalizado:</span> Planes de estudio adaptados a los objetivos y nivel del alumno.</li>
            <li><span className='font-bold'>Horarios flexibles:</span> Clases programadas según la disponibilidad del estudiante.</li>
            <li><span className='font-bold'>Atención exclusiva:</span> Resolución de dudas en tiempo real y seguimiento constante del progreso.</li>
            <li><span className='font-bold'>Material especializado:</span> Recursos y ejercicios personalizados para reforzar áreas de oportunidad.</li>
          </ul>
        </AccordionItem>

        {/* Clases Grupales de Matemáticas */}
        <AccordionItem
          header='Clases Grupales'
          className="w-[80%] bg-white p-4 rounded-lg shadow-md border border-gray-200"
        >
          <ul className='flex flex-col gap-2 mt-4'>
            <li><span className='font-bold'>Grupos reducidos:</span> Para garantizar atención personalizada y participación activa.</li>
            <li><span className='font-bold'>Dinámicas interactivas:</span> Actividades en equipo que promueven la resolución de problemas de manera colectiva.</li>
            <li><span className='font-bold'>Enfoque práctico:</span> Ejercicios y casos reales que refuerzan los conceptos teóricos.</li>
            <li><span className='font-bold'>Sesiones guiadas:</span> Profesores expertos que facilitan el aprendizaje y aclaran dudas en grupo.</li>
          </ul>
        </AccordionItem>

        {/* Desarrollo de Material para Empresas */}
        <AccordionItem
          header='Desarrollo de Material para Instituciones'
          className="w-[80%] bg-white p-4 rounded-lg shadow-md border border-gray-200"
        >
          <br />
          <p className="text-justify">
            Ofrecemos servicios de creación de contenido educativo en matemáticas para empresas, adaptado a sus necesidades específicas. Características principales:
          </p>
        </AccordionItem>

        <h3 className='text-xl font-semibold'>Idiomas</h3>

        {/* Clases Individuales de Idiomas */}
        <AccordionItem
          header='Clases Individuales'
          className="w-[80%] bg-white p-4 rounded-lg shadow-md border border-gray-200"
        >
          <ul className='flex flex-col gap-2 mt-4'>
            <li><span className='font-bold'>Enfoque personalizado:</span> Planes de estudio adaptados al nivel y objetivos del alumno.</li>
            <li><span className='font-bold'>Horarios flexibles:</span> Clases programadas según la disponibilidad del estudiante.</li>
            <li><span className='font-bold'>Atención exclusiva:</span> Corrección inmediata de errores y seguimiento del progreso.</li>
            <li><span className='font-bold'>Material especializado:</span> Recursos adaptados a las necesidades lingüísticas del alumno.</li>
          </ul>
        </AccordionItem>

        {/* Clases Grupales de Idiomas */}
        <AccordionItem
          header='Clases Grupales'
          className="w-[80%] bg-white p-4 rounded-lg shadow-md border border-gray-200"
        >
          <br />
          <ul className='flex flex-col gap-2 mt-4'>
            <li><span className='font-bold'>Grupos reducidos:</span> Para garantizar participación activa y atención personalizada.</li>
            <li><span className='font-bold'>Dinámicas interactivas:</span> Actividades en equipo que fomentan la comunicación y el uso práctico del idioma.</li>
            <li><span className='font-bold'>Enfoque comunicativo:</span> Énfasis en la conversación, comprensión auditiva y expresión oral.</li>
            <li><span className='font-bold'>Profesores expertos:</span> Guías que facilitan el aprendizaje y corrigen errores en tiempo real.</li>
          </ul>
        </AccordionItem>
      </Accordion>
      <br />
      <div className='w-screen bg-gray-200 h-0.5 min-h-0 min-w-0'></div>
      <br />

      <h1 className='text-center text-2xl font-bold'>Recursos de aprendizaje</h1>
      <br />
      <section className="text-justify flex flex-col gap-8 items-center justify-center p-8 bg-gray-100 m-auto rounded-md font-mulish">
        <p className="text-md/relaxed text-black m-auto">
          Nuestra plataforma ofrece recursos educativos gratuitos para un aprendizaje efectivo y flexible:
          <br /><br />
          <ul className='flex flex-col gap-1.5'>
            <li><span className='font-bold'>Videos Explicativos:</span> Lecciones dinámicas creadas por expertos para una comprensión clara.</li>
            <li><span className='font-bold'>Guías en PDF:</span> Resúmenes descargables con ejemplos para estudiar sin conexión.</li>
            <li><span className='font-bold'>Pruebas de Conocimiento:</span> Evaluaciones interactivas con retroalimentación inmediata.</li>
            <li><span className='font-bold'>Ejercicios Prácticos:</span> Aplicaciones reales para reforzar habilidades.</li>
          </ul>
        </p>
        <div className="justify-center m-auto">
          <Button variant="contained" className="w-[30vh] Buttoon" component={Link} to="/recursos">
            Ver Recursos
          </Button>
        </div>
      </section>
      <br />
      <div className='w-screen bg-gray-200 h-0.5 min-h-0 min-w-0'></div>
      <br />
      <section className='flex flex-col text-center gap-4'>
        <div className='flex flex-col gap-2 font-mulish'>
          <img src="src/assets/verificado.png" alt="" className='object-contain h-[90px]' />
          <p><span className='font-bold'>Calidad y Experiencia:</span><br /> Materiales diseñados por expertos para garantizar un aprendizaje preciso y efectivo, con videos, guías en PDF y pruebas interactivas.</p>
        </div>

        <div className='flex flex-col gap-2 font-mulish'>
          <img src="src/assets/reloj.svg" alt="" className='object-contain h-[90px]' />
          <p><span className='font-bold'>Accesibilidad y Flexibilidad:</span><br /> Recursos gratuitos y disponibles en cualquier dispositivo, permitiéndote aprender a tu ritmo y desde cualquier lugar.</p>
        </div>

        <div className='flex flex-col gap-2 font-mulish'>
          <img src="src/assets/boleta.png" alt="" className='object-contain h-[90px]' />
          <p><span className='font-bold'>Enfoque Práctico y Resultados:</span><br /> Ejercicios y pruebas interactivas para aplicar conocimientos, con seguimiento de progreso para mejorar continuamente.</p>
        </div>
      </section>
      <br />
      <div className='w-screen bg-gray-200 h-0.5 min-h-0 min-w-0'></div>
      <br />
      <section className='flex-col flex gap-2 justify-center m-auto font-mulish text-center w-[95%]'>
        <h1 className='text-center text-2xl font-bold'>¿Necesitas tutorias?</h1>
        <p>Nuestro equipo de tutores altamente capacitados está listo para ayudarte a alcanzar tus metas. Ya sea que necesites refuerzo en matemáticas, ciencias, idiomas o cualquier otra área, estamos aquí para guiarte en cada paso del camino.</p>
        <div className="justify-center m-auto">
          <Button variant="contained" className="w-[30vh] Buttoon">
            <Link to='/tutorias'>Solicitar información</Link>
          </Button>
        </div>
      </section>
<br />
<Footer></Footer>
    </ThemeProvider>
  );
};

export default Home;