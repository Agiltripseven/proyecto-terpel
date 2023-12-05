import '../assets/style/viveTerpel.css'
import Registro from './Registro';
import { Link, Element } from 'react-scroll';
function InterfazViveTerpel (){
return(
<>
<header className='headerViveTerpel'>
      <img src="src\assets\img\logoViveTerpel.png" alt="LogoVIveTerpel" className='logoViveTerpel' />
    <div>
      
    <Link   activeClass="active" 
            className="botones"
            to="Registrarse" 
            spy={true} 
            smooth={true} 
            offset={-120} 
            duration={500} >Iniciar Sesión
    </Link>
      <Link   activeClass="active" 
                className="botones"
                        to="Registrarse" 
                        spy={true} 
                        smooth={true} 
                        offset={-120} 
                        duration={500} >Registrarse
                </Link>
      </div>
    </header> 
     
     <section className='principalRegistro'>
     <main className='mainViveTerpel'>
      <button className='conocenos'>Conocenos</button>
      <h1>¿Qué es ViveTerpel?</h1>
      <p>Descubre nuestro nuevo programa de beneficios en el que acomulas puntos facil y rapido y los vives de verdad, disfrutrando como quieres.</p>
      <button className='edsParticipantesBoton'>Conoce EDS participantes</button> 
     </main>
     </section>
     <article className='articleViveTerpel'>
     <div>
      <section>
        <img src="src\assets\img\registrate.jpg" alt="" />
        <h3>Registrate y gana puntos</h3>
        <p>Por ser parte de VIve Terpel recibe puntos de bienvenida por tu primera compra.</p>
      </section> 
      <section>
      <img src="src\assets\img\puntosCompra.jpg" alt="" />
        <h3>Puntos por tus compras</h3>
        <p>Recuerda dar tu cedula al comprar en una EDS participante o cualquier tienda Altoque para acumular puntos.</p>
      </section>
      </div>
      <div>
      <section>
      <img src="src\assets\img\estacionesCercanas.jpg" alt="" />
        <h3>Estaciones más cercanas</h3>
        <p>Te mostramos nuestra red de Estaciones de Servicio para que verifiques los puntos más cerca a ti</p>
      </section>
      <section>
      <img src="src\assets\img\Beneficios.jpg" alt="" />
        <h3>Beneficios exclusivos para ti</h3>
        <p>Por ser parte de ViveTerpel disfrutas de promociones únicas, descuentos increíbles y beneficios exclusivos.</p>
      </section>
      </div>
     </article>
    <Element name='Registrarse'>
     <Registro/>
     </Element>

</>
); 
}
export default InterfazViveTerpel