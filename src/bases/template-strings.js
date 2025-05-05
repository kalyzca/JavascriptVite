//Template strings
let primerNombre ="Kaly";
let otrosNombres ="Zulema";
let apellido_paterno ="Cristóbal";
let apellido_materno ="Alcántara";
const nombre = primerNombre+" "+apellido_paterno;

console.log(nombre);

let nombre_completo = `
    ${primerNombre} ${otrosNombres}
    ${apellido_paterno} ${apellido_materno}
`;

console.log(`Nombre completo: ${nombre_completo} y tiene ${40 + 1} años `, "de edad.");

function saludo(nombre) {
    return `Bienvenida ${nombre}`;
}

console.log(`${saludo(nombre)}`);
