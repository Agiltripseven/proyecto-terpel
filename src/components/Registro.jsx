import { useState } from "react";
import '../assets/style/viveTerpel.css'
//Validaciones de campos de registro
const validarCedula=(cedula)=>{
  const cedulaRegex = /^\d{8,10}$/; 
      return cedulaRegex.test(cedula); 
     
}
const validarCorreo = (correo) => {
  const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return correoRegex.test(correo)
}
const validarContraseña = (contraseña ) => {
  const contraseñaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  return contraseñaRegex.test(contraseña);
  
}

//Validaciones de campos de inicio de sesion 
const validarCedulaInicio=(cedulaRegistrada)=>{
  const cedulaRegex = /^\d{8,10}$/; 
  return cedulaRegex.test(cedulaRegistrada); 
}
const validarContraseñaInicio=(contraseñaRegistrada)=>{
  const contraseñaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  return contraseñaRegex.test(contraseñaRegistrada);
}
function Registro(){
  
    const [tipoDeDocumento, setTipoDeDocumento] = useState(" "); 
    const [cedula, setCedula] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");

    const [cedulaInicio, setCedulaInicio] = useState("");
    const [contraseñaInicio, setContraseñaInicio] = useState("");
    const [errorInicio, setErrorInicio]=useState("")
    const [mostrarContenido, setMostrarContenido]=useState(false);

    const [clickRegistro, setClickRegistro]=useState(true); 
    const [clickInicio, setClickInicio]=useState(false); 
    const [siValida, setSiValida]=useState(false) 

     //Cambios con estados

  const cambioTDocumento = (e) => {
    setTipoDeDocumento(e.target.value)
  }
  const cambioCedula = (e) => {
    setCedula(e.target.value)
  }
  const cambioContraseña = (e) => {
    setContraseña(e.target.value);
  }
  const cambioNombre = (e) => {
    setNombre(e.target.value);
  }
  const cambioApellido = (e) => {
    setApellido(e.target.value);
  }
  const cambioCorreo = (e) => {
    setCorreo(e.target.value);
  }
  const cambioCelular = (e) => {
    setCelular(e.target.value);
  }
  const cambioCedulaInicio=(e)=>{
    setCedulaInicio(e.target.value);
  }
  const cambioContraseñaInicio=(e)=>{
    setContraseñaInicio(e.target.value)
  }
  //Validar con expresiones los campos de registro
  const ValidacionDeCampos = (e) => {
    e.preventDefault();
    if (cedula == "" || contraseña == "" || nombre == "" || apellido == "" || celular == "" || correo == "") {
      setError("Todos los campos son obligatorios"); 
      return
    } else {
      if (validarCedula(cedula)) {
        if (validarContraseña(contraseña)) {
          if (validarCorreo(correo)) {
           if(celular.length==10){
              setCedula(cedula); 
              setContraseña(contraseña); 
              setSiValida(true)
              setClickRegistro(false)
              setClickInicio(true)
           }else{
            setError("Ingrese un numero de telefono valido"); 
           }
          } else {
            setError("El correo debe tener un @ seguido de al menos un carácter alfanumérico y un punto seguido de al menos dos caracteres alfabéticos al final");
          } 
        } else {
          setError("la contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo")
        }
      } else {
        setError("La CC debe tener entre 8 y 10 digitos y no llevar ningun caracter especial ");
      }
    }
  }
  
  const mostrarFormInicioEnlace=()=>{
    setClickRegistro(false);
    setClickInicio(true);
  }

  //Validar con elas expresiones los campos de inicio
  const ValidacionDeCamposInicio = (event) => {
    event.preventDefault();
    if (cedulaInicio == "" || contraseñaInicio == "") {
      setErrorInicio("Todos los campos son obligatorios");
      return;
    } else
      if (validarCedulaInicio(cedulaInicio)) {
        if (validarContraseñaInicio(contraseñaInicio)) {
           setCedulaInicio(cedulaInicio); 
           setContraseñaInicio(contraseñaInicio);
           if( cedula==cedulaInicio  ){
            if(contraseña==contraseñaInicio){
              setMostrarContenido(true); 
              setErrorInicio("Sesion iniciada");
            }else{
              setErrorInicio("La contraseña es incorrecta")
            }
          }else{
            setErrorInicio("El documento no ha sido registrado o es incorrecto");
          }

        } else {
          setErrorInicio("la contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo")
        } 
      } else {
        setErrorInicio("La CC debe tener entre 8 y 10 digitos y no llevar ningun caracter especial ")
      }
  }

   
return(
    <> 
  {clickRegistro==true ? 
    (<form onSubmit={ValidacionDeCampos} value={clickRegistro} className="registrarseFormulario">
        <h2>Registrarse</h2> 
        <label htmlFor="select"  >Tipo de documento</label> 
            <select name="" id="select"  
            value={tipoDeDocumento}
            onChange={cambioTDocumento}>
              <option >Cedula de ciudadania</option>
              <option>Cedula de extranjeria</option> 
            </select>
            <label htmlFor="cedula">Documento</label>
            <input type="text" id="cedula"  
            value={cedula}
            onChange={cambioCedula} />

            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre"  
            value={nombre}
            onChange={cambioNombre}/>
      
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido"  
            value={apellido}
            onChange={cambioApellido}/>
      
            <label htmlFor="celular">Telefono</label>
            <input type="text" id="celular"  
            value={celular}
            onChange={cambioCelular} />
      
            <label htmlFor="correo">Correo</label>
            <input type="text" id="correo" 
            value={correo} 
            onChange={cambioCorreo}/>
      
            <label htmlFor="contraseña">Contraseña</label>
            <input type="password" id="contraseña"  
            value={contraseña}
            onChange={cambioContraseña} />
      
            <button type="submit" >Registrarse</button>
            {error && <p>{error}</p>}  
            <p>Ya tienes una cuenta? <button id="botonEnlace"
            onClick={mostrarFormInicioEnlace}
            >Iniciar sesion</button></p>
          
    </form> ):null}
{clickInicio==true ?
   ( 
   
   <form onSubmit={ValidacionDeCamposInicio} className="formInicioSesion"  > 
      <h2>Inicio de sesion</h2> 
      <label htmlFor="TipocedulaInicio">Tipo de cedula</label>
      <select name="" id="TipocedulaInicio">
      <option >Cedula de ciudadania</option>
      <option>Cedula de extranjeria</option> 
      </select> 

      <label htmlFor="cedulaInicio">Documento</label>
      <input type="text"  
      value={cedulaInicio}
      onChange={cambioCedulaInicio}/>

      <label htmlFor="contraseñaInicio">Contraseña</label>
      <input type="password" name="" id="contraseñaInicio"
      value={contraseñaInicio}
      onChange={cambioContraseñaInicio}/>

      <button type="submit" >Iniciar sesion</button>
      {errorInicio && <p>{errorInicio} </p>}
      
      
    </form> ):
     null}
   

    </>
);
}

  
export default Registro; 