import { Formulario } from './formulario';
import { FormBuilder } from '@angular/forms';


describe('Formularios', () => {
    let componente: Formulario;
    beforeEach(() => componente = new Formulario( new FormBuilder() ) );

    it('Debe crear un formulario con dos campos, email y password', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });

    it('El email debe ser obligatorio', () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect( control.valid ).toBeFalse();
    });

    it('El email debe ser un correo válido', () => {
        const control = componente.form.get('email');
        control.setValue('correo@gmail.com');
        expect( control.valid ).toBeTrue();
    });
});
