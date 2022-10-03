import { useEffect, useState, useRef } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


const Usuarios = () => {

  const [usuarios, setUsuarios] = useState <Usuario[]>([]);

 const paginaRef = useRef(0)

    useEffect(() => {
      //llamado al API
      cargarUsuarios();

      // reqResApi.get<ReqResListado>('/users')
      // .then(resp => {
      //     // console.log(resp.data.data);
      //     setUsuarios(resp.data.data)
      // }).catch( console.log) ;
    
      
    }, []);

  const cargarUsuarios = async() => {

    const resp = await reqResApi.get<ReqResListado>('/users',{
      params: {
        page: paginaRef.current  // la referencia al valor que contiene
      }
    })

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
      paginaRef.current ++;
    }

      else{
        alert("no hay mas registros");
      }
  
    }
  
    const renderItem = (usuario : Usuario) => {
      const {first_name, last_name , email ,  avatar} = usuario;
      return (
  
      <tr key={usuario.id.toString()}>
        <td>
          <img src={avatar} alt={first_name}  style = {{ width:35, borderRadius:100}}/>
        </td>
       
        <th>{first_name} {last_name}</th>
        <th>{email}</th>
   </tr>
   ) }
    
  return (
    <>  
    <h3>Usuarios</h3>
    <table className="table">
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>email</th>
             </tr>
        </thead>
    <tbody>

     {usuarios.map(usuario => renderItem(usuario))}
    </tbody>
    </table>
    <button
        className='btn btn-primary'
        onClick={cargarUsuarios}
      >
      siguiente
    </button>
    </>
  )
}

export default Usuarios;