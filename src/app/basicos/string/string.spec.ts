import { mensaje } from './string';

// describe('Pruebas de strings');
// it('Debe de regresar un string');

describe( 'Pruebas de strings', () =>  {
    
    // Comprobar que una funcion devuelva un string
    it( 'Debe de regresar uns string', () => {
        const resp = mensaje('Luisin');
        expect( typeof resp ).toBe('string');
    });

    // Comprobar que una funcion devuelva un algo
    it( 'Debe de retornar un saludo con el nombre enviado', () => {
        const nombre = 'Juan';
        const resp = mensaje(nombre);
        expect( resp ).toContain(nombre);
    });
});
