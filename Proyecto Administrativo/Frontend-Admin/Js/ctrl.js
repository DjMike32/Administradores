

/*const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}



const campo={
  correo:false,
  password: false,
  nombre:false,
  apellido:false,
  telefono:false,
  correo2:false,
  password2:false


}
const lbls=document.querySelectorAll('#formulario2 input');

const lbls2=document.querySelectorAll('#formulario3 input');

function validar(e){
switch(e.target.name) {
   
  case "correo":
   if(expresiones.correo.test(e.target.value)){
      document.getElementById('em').classList.remove('incorrecto');
      document.getElementById('em').classList.add('correcto');
    campo.correo['em']=true;
    }
    else{
      document.getElementById('em').classList.add('incorrecto');
      document.getElementById('em').classList.remove('correcto');
      campo.usuario['em']=false;
    }
  break;

   case "contra":
    if(expresiones.password.test(e.target.value)){
          document.getElementById('cont').classList.remove('incorrecto');
          document.getElementById('cont').classList.add('correcto');
          campo.password['cont']=true;
        }
    else{
          document.getElementById('cont').classList.add('incorrecto');
          document.getElementById('cont').classList.remove('correcto');
          campo.password['cont']=false;
        }
        
  break;


case "nombre":
    if(expresiones.nombre.test(e.target.value)){
          document.getElementById('nom').classList.remove('incorrecto');
          document.getElementById('nom').classList.add('correcto');
          campo.nombre['nom']=true;
        }
    else{
          document.getElementById('nom').classList.add('incorrecto');
          document.getElementById('nom').classList.remove('correcto');
          campo.nombre['nom']=false;
        }
        
  break;


case "apellido":
    if(expresiones.nombre.test(e.target.value)){
          document.getElementById('ape').classList.remove('incorrecto');
          document.getElementById('ape').classList.add('correcto');
          campo.apellido['ape']=true;
        }
    else{
          document.getElementById('ape').classList.add('incorrecto');
          document.getElementById('ape').classList.remove('correcto');
          campo.apellido['ape']=false;
        }
        
  break;


case "celular":
    if(expresiones.telefono.test(e.target.value)){
          document.getElementById('cel').classList.remove('incorrecto');
          document.getElementById('cel').classList.add('correcto');
          campo.telefono['cel']=true;
        }
    else{
          document.getElementById('cel').classList.add('incorrecto');
          document.getElementById('cel').classList.remove('correcto');
          campo.telefono['cel']=false;
        }
        
  break;


case "cor2":
    if(expresiones.correo.test(e.target.value)){
          document.getElementById('em2').classList.remove('incorrecto');
          document.getElementById('em2').classList.add('correcto');
          campo.correo2['em2']=true;
        }
    else{
          document.getElementById('em2').classList.add('incorrecto');
          document.getElementById('em2').classList.remove('correcto');
          campo.correo2['em2']=false;
        }
        
  break;


case "contra2":
    if(expresiones.password.test(e.target.value)){
          document.getElementById('cont2').classList.remove('incorrecto');
          document.getElementById('cont2').classList.add('correcto');
          campo.password2['cont2']=true;
        }
    else{
          document.getElementById('cont2').classList.add('incorrecto');
          document.getElementById('cont2').classList.remove('correcto');
          campo.password2['cont2']=false;
        }
        
  break;

}}

var form1=document.getElementById('formulario2');
form1.addEventListener('submit', function(e){

e.preventDefault();
if(campo.correo && campo.password)
    console.log('enviando formlario')

      document.getElementById('inicio-sesion').style.display="none";
      document.getElementById('registrarse').style.display="none";
      document.getElementById('inicio').style.display="block";
      document.getElementById('navH').style.display="block";
  })
 
  var form2=document.getElementById('formulario3');
  form2.addEventListener('submit', function(e){

e.preventDefault();
if(campo.nombre && campo.apellido && campo.telefono && campo.correo2 && campo.password2)
    console.log('enviando formlario')

      document.getElementById('inicio-sesion').style.display="none";
      document.getElementById('registrarse').style.display="none";
      document.getElementById('inicio').style.display="block";
      document.getElementById('navH').style.display="block";
  })

lbls.forEach((input)=>{
  input.addEventListener('keyup', validar)
  input.addEventListener('blur', validar)
})

lbls2.forEach((input)=>{
  input.addEventListener('keyup', validar)
  input.addEventListener('blur', validar)
})*/

function mostrarSiguiente(idPagina){
   
    if(idPagina=='inicio'){
      
        document.getElementById('PrimeraPagina').style.display="none";
        document.getElementById('cliente').style.display="none";
        document.getElementById('EAfiliadas').style.display="none";
        document.getElementById('Motoristas').style.display="none";
        document.getElementById('Admin').style.display="none";
        document.getElementById('inicio').style.display="block";

    }else if(idPagina=='cliente'){
     
      document.getElementById('inicio').style.display="none";
      document.getElementById('EAfiliadas').style.display="none";
      document.getElementById('Motoristas').style.display="none";
      document.getElementById('Admin').style.display="none";
      document.getElementById('cliente').style.display="block";
  

    }   
    else if(idPagina=='EAfiliadas'){
      document.getElementById('inicio').style.display="none";
      document.getElementById('cliente').style.display="none";
      document.getElementById('Motoristas').style.display="none";
      document.getElementById('Admin').style.display="none";
      document.getElementById('EAfiliadas').style.display="block";
    }
    else if(idPagina=='Motoristas'){
      document.getElementById('inicio').style.display="none";
      document.getElementById('cliente').style.display="none";
      document.getElementById('EAfiliadas').style.display="none";
      document.getElementById('Admin').style.display="none";
      document.getElementById('Motoristas').style.display="block";
    }
    else if(idPagina=='Admin'){
      document.getElementById('inicio').style.display="none";
      document.getElementById('cliente').style.display="none";
      document.getElementById('EAfiliadas').style.display="none";
      document.getElementById('Motoristas').style.display="none";
      document.getElementById('Admin').style.display="block";
    }

return false;
}

function volver(idPagina){
    if(idPagina=='primer-Pagina'){
        document.getElementById('registrarse').style.display="none";
        document.getElementById('inicio-sesion').style.display="none";
        document.getElementById('primer-Pagina').style.display="block";
    }

}


