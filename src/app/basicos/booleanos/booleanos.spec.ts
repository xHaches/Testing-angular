import { usuarioLogueado } from './booleanos';



describe('Pruebas de booleanos', () => {
    it( 'debe de retornar true', () => {
        const resp = usuarioLogueado();
        expect( resp ).toBeTrue();
        expect( resp ).not.toBeFalse();
    });
});