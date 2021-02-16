const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  dirección: {
    ciudad: 'New York',
    zip: 86318780,
    lat: 15.5898,
    lng: 34.5214557
  }
};

//console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log(persona2);