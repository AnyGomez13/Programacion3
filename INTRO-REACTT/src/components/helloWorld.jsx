// crear la funcion
// se debe exportar para llarmarlo en el padre
//herencia, vamos a heredar algo de la clase padre
export const HolaMundo = ({user,id,title = 'Hola mundo cruel'}) => {
    console.log(title);
    return(
        <div>
            <div>Hola Mundo cruel</div>
            <h1>Hola van a sufrir en programación {user.name} {user.lastname} con el id {id}</h1>
        </div>
    )
}