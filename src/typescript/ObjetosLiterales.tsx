interface Persona{
  nombreCompleto: string;
  edad: number;
  direccion : Direccion 
                                    //definir el objecto principal 
}

interface Direccion {  //poner reglas de validacion a sus objectos 
  pais : string;
  casaNo: number;                //definir sus interfaces 
  

}
const ObjetosLiterales = () => {

    const persona : Persona = {
        nombreCompleto : 'Fernando',
        edad : 35,
        direccion : {
            pais : 'Canada',
            casaNo : 615
        }

    }

    
  return (
    <div>
      <h3>Objetos literales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </div>
  )
}

export default ObjetosLiterales;
