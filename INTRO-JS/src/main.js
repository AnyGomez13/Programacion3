//funcion
function HolaCurso(nombre = 'cursoProgramacion', age = 3){
    const saludar = `Hola bienvenidos al mundo de llorar ${nombre} ${age}` 
    return saludar;
}

console.log(HolaCurso);

//funcion de flecha
const miFuncion = (nombre)=>`Hola ${nombre}`;
//defino la constante y luego le paso parametros de la funcioon

//objetos

const factura  ={
    id: 10,
    nombre: 'Comprar la materia de programacion 3',
    date: new Date(),
    client: {
        id: 1,
        name: 'Alejandro',
        lastname: 'Pelaez',
        age: 20,
    },
    //crear objeto de arreglos
    items :[
        {
            producto : 'Pasar la materia',
            precio: 200000,
            cantidad: 1,
        },
        {
            producto : 'perder la materia',
            precio: 100000,
            cantidad: 2,
        },
    ],
    //Metodo

    total: function (){
        let total =0;
        this.items.forEach(items => {
            total=total + items.precio * items.cantidad;
        });
        return total;
    },
    //funciones dentro de objetos
    saludar: () => {
        return `Hola ${factura.client.name}`
    }

}


//clonar constantes
const factura2 = factura;

const resultado = factura === factura2;

console.log(`El total de la materia es ${factura.total()}`);
console.log(factura)

const saludar = factura.saludar();
console.log(saludar);

//arreglo objetos

//OPERADOR TERNARIO
const promedio = 4.5;
let estado = "";

//se fija la condicion con el operador

estado = (promedio >=2.95) ? "Aprobado" : "Rechazado";

console.log(`estado`);

//Any Melisa Gomez Flórez -5L

const numero1 = 25;
const numero2 = 30;
let mayorMenor ="";

mayorMenor = (numero1 > numero2) ? `${numero1} es mayor que ${numero2}` : (numero1=== numero2) ? `${numero1} es igual a ${numero2}`: `${numero2} es mayor que ${numero1}`;

console.log(mayorMenor);

//ARREGLOS

const productos = ['mesa', 'silla', 'teclado','mouse'];

productos.push('pantalla','televisor');

console.log(productos);
//imprimir por FOREACH
productos.forEach(el => console.log(el));

for (const prod of productos){
    console.log(prod);
}


//arreglos y operadore spread


const frutas = ['pera', 'manzana', 'sandia'];
const mercados = [...frutas,...productos];
console.log(mercados);


//desestructuracion de objetos

const usuario = {
    nombre: 'Andres',
    corre:'andres@gmail.com',
    edad: 20,
    ranking: 9
};
console.log(usuario.nombre);
const {nombre, ranking}= usuario;
console.log(ranking);


//{jason}placeholder, nos da api d e forma falsa

//async sincronizar, await: debe ir siempre de una funcion async, es una promesa. 
//response.json convertir codigo json.

const httpClient = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    //mostrar en una lista ul-li - document es el body como en html
    const ul = document.createElement('ul');
    //iteraciones
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        //agregar en cada iteracion la lista al ul
        ul.append(li);
        console.log(user.name);
    });
    document.getElementById('root').append(ul);
}
httpClient();

//API DOM - DOCUMENT OBJECT MODEL
//modelo de objetos me sirve


//REACT

