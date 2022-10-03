import {useEffect, useReducer} from 'react'

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre : string,

}
const inicialState : AuthState = {
    validando: true,
    token: null,
    username:'',
    nombre : '',
}

type LoginPayload = {
  username: string,
    nombre: string,
  
}

type AuthAction = 
| { type : 'logout'}
| { type : 'login', payload : LoginPayload };

const authReducer = (state : AuthState, action: AuthAction) : AuthState => {
  switch (action.type) {
    case 'logout':
      return {
       validando: false,
       token: null,
       nombre:'',
       username: '',
      }

      case 'login': 

      const { nombre, username } = action.payload;
      
      return {
       validando: false,
       token: 'ABC123',
       nombre,
       username
      //  nombre : nombre,
      //  username: username,
      }
  
    default:
      return state;
  }
}



 const Login = () => {
   

  const [{ validando , token, nombre }, dispatch] = useReducer( authReducer, inicialState);

  useEffect(() => {
    setTimeout(() =>{
      dispatch( { type: 'logout'});
     }, 1500);
  }, []);

const login = ()   => { 
  dispatch({ 
      type: 'login', 
      payload: { nombre : ' Jonathan', 
                 username: 'pvc'
                 } 
         });
}

const logout  = () => {
  dispatch({
      type: 'logout'})
}

  if(validando) {
    return(
      <>
        <h3> Login</h3>
        <div className='alert alert-info'>
            Validando...
        </div>
      </>
    )}


  return (
    <>
      <h3> Login</h3>
      {/* <div className='alert alert-info'>
          validando...
      </div> */}


       {/* <div className='alert alert-danger'>
          No autenticado
       </div> */}

       {/* <div className='alert alert-success'>
           Autenticado
       </div> */}

      {
          (token) 
          ? <div className='alert alert-success'> Autenticado como :{nombre} </div>
          : <div className='alert alert-danger'> No autenticado </div>
      }

      {
        (token) ? (

          <button 
              className='btn btn-danger'
              onClick={logout}
              >
                 Logout
              </button>
        ) : (

          <button 
              className='btn btn-primary' 
              onClick={ login}
              > 
                Login
              </button>
      
        )
         
      }
    
    
    </>
  )
}

export default Login;



