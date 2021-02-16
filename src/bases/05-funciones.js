// Funciones JS
/*
const saludar = function saludar(nombre) {
  return `Hola ${ nombre }`;
}
*/

const saludar2 = (nombre) => {
  return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;

//console.log(saludar('Josué'));

console.log(saludar2('Edson'));
console.log(saludar3('David'));
console.log(saludar4());

const getUser = () => ({
    uid:'ABCV123',
    username: 'El_Papi1502'
});

const user = getUser();
console.log( user );

const getUsuarioActivo = ( nombre ) => ({
  uid:'ABC567',
  username: nombre
});

const usuarioActivo = getUsuarioActivo('Josué');
console.log( usuarioActivo );
