import React from 'react'
import '../assets/style/InicioSesion.css'
import Registro from './Registro';


function InicioSesion() {

  return (
    <>
    <header>
       <img src="src\assets\img\logoViveTerpel.png" alt="logoViveTerpel" />
       <div>
        <a href="">¿Como funciona?</a>
        <a href="">Centro de ayuda</a>
       <button>Hola!<img src='src\assets\img\flecha-hacia-abajo-para-navegar.png'></img></button>
       </div>
     </header>

     <div className='contenidoCompleto'>
     <aside>
        <div className='asideContenido'>
            <h2>Bienvenido!</h2>
            <section className='monedas'>
            <p>Hoy sumas: </p>
            <div>
            <img src="src\assets\img\signo-de-dolar.png" alt="moneda" />
            <p><span>0</span>Puntos</p>
            </div> 
            </section>
        </div>
        <section className='menu'>
            <div>
            <img src="src\assets\img\hogar.png" alt="" />
            <p>Inicio</p>
            </div>
            <div>
            <img src="src\assets\img\dinero.png" alt="" />
            <p>Mis consumos</p>
            </div>
            <div>
            <img src="src\assets\img\bonos.png" alt="" />
            <p>Mis bonos</p>
            </div>
            <div>
            <img src="src\assets\img\referir.png" alt="" />
            <p>Mis referidos</p>
            </div>
            <div>
            <img src="src\assets\img\objetivo.png" alt="" />
            <p>Retos</p>
            </div>
            <div>
            <img src="src\assets\img\categoria.png" alt="" />
            <p>Catalogo</p>
            </div>
            <div>
            <img src="src\assets\img\apreton-de-manos.png" alt="" />
            <p>Aliados</p>
            </div>
            <div>
            <img src="src\assets\img\usuario.png" alt="" />
            <p>Mis datos</p>
            </div>
            <div>
            <img src="src\assets\img\cruzado.png" alt="" />
            <p>Cerrar Sesion</p>
            </div>
        </section>
     </aside>
 <section>
     <article>
        <section className='acomulacion'>
           <h3>Ultima acomulacion</h3>
           <div>
            <img src="src\assets\img\acomularPuntos.png" alt="" />
            
            <p><span>Aun no has ganado puntos</span> Por cada compra en nuestras estaciones ganas puntos</p>
           </div>
        </section>
        <section className='redencion'>
           <h2>Ultima redencion</h2>
           <div>
           <img src="src\assets\img\redimirPuntos.png" alt="" />
           <p> <span>Aun no registramos redencion</span> Te invitamos a canjear tus puntos en nuestro catalogo</p>
           </div>
        </section>
     </article>

     <main>
        <h3>Vive tus puntos disfrutando de estos beneficios</h3>
       <div className='parteUnoMain'>
        <section>
            <img src="src\assets\img\tarjeta-mil.jfif" alt="" />
            <p>Bono combustible terpel por $1.000</p>
            <div className='puntosSeccion'>
                <img src="src\assets\img\dolar.png" alt="" />
                <p><span>300</span> puntos</p>
            </div>
            <button>Me interesa</button> 
        </section>

        
        <section>
            <img src="src\assets\img\tarjeta-2mil.jfif" alt="" />
            <p>Bono combustible terpel por $2.000</p>
            <div className='puntosSeccion'>
                <img src="src\assets\img\dolar.png" alt="" />
                <p><span>600</span> puntos</p>
            </div>
            <button>Me interesa</button> 
        </section>


        <section>
            <img src="src\assets\img\tarjeta-3mil.jfif" alt="" />
            <p>Bono combustible terpel por $3.000</p>
            <div className='puntosSeccion'>
                <img src="src\assets\img\dolar.png" alt="" />
                <p><span>900</span> puntos</p>
            </div>
            <button>Me interesa</button> 
        </section>

        <section>
            <img src="src\assets\img\tarjeta-5mil.jfif" alt="" />
            <p>Bono combustible terpel por $5.000</p>
            <div className='puntosSeccion'>
                <img src="src\assets\img\dolar.png" alt="" />
                <p><span>1500</span> puntos</p>
            </div>
            <button>Me interesa</button> 
        </section>
        </div>
        <div className='parteUnoMain'>
        <section>
            <img src="src\assets\img\tarjeta-10mil.jfif" alt="" />
            <p>Bono combustible terpel por $10.000</p>
            <div className='puntosSeccion'>
                <img src="src\assets\img\dolar.png" alt="" />
                <p><span>3000</span> puntos</p>
            </div>
            <button>Me interesa</button> 
        </section>

        <section>
            <img src="src\assets\img\tarjeta-20mil.jfif" alt="" />
            <p>Bono combustible terpel por $20.000</p>
            <div className='puntosSeccion'>
                <img src="src\assets\img\dolar.png" alt="" />
                <p><span>6000</span> puntos</p>
            </div>
            <button>Me interesa</button> 
        </section>

        <section>
            <img src="src\assets\img\tarjeta-50mil.jfif" alt="" />
            <p>Bono combustible terpel por $50.000</p>
            <div className='puntosSeccion'>
                <img src="src\assets\img\dolar.png" alt="" />
                <p><span>15000</span> puntos</p>
            </div>
            <button>Me interesa</button> 
        </section>

        <section>
            <img src="src\assets\img\tarjeta-100mil.jfif" alt="" />
            <p>Bono combustible terpel por $100.000</p>
            <div className='puntosSeccion'>
                <img src="src\assets\img\dolar.png" alt="" className='dolar'/>
                <p><span>30000</span> puntos</p> 
            </div>
            <button>Me interesa</button> 
        </section>
        </div>
     </main>
     </section>

     </div>
    </>
  );
}

export default InicioSesion;