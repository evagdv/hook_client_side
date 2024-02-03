/**
 * Documentación con JSDoc
 * @module API
 * @author Eva Gómez de Villar Banderas <egomezdevillar77@iescastelar.com>
 */

/**
 * Clase que representa a una persona.
 * @class
 */
class Persona {
    /**
     * Construye una nueva instancia de Persona.
     * @constructor
     * @param {string} nombre - El nombre de la persona.
     * @param {number} edad - La edad de la persona.
     */
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    /**
     * Obtiene el nombre completo de la persona.
     * @method
     * @returns {string} El nombre de la persona.
     */
    obtenerNombreCompleto() {
        return this.nombre;
    }

    /**
     * Saluda a la persona.
     * @method
     * @returns {string} Saludo personalizado.
     */
    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// Crear una instancia de Persona
const persona1 = new Persona("María", 30);

// Llamar a los métodos y mostrar el resultado en la consola
console.log(persona1.obtenerNombreCompleto());
console.log(persona1.saludar());
