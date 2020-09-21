import { from, throwError, EMPTY } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('ngOnInit: Debe cargar los médicos', () => {
        spyOn(servicio, 'getMedicos').and.callFake( () => {
            return from(['medico1', 'medico2', 'medico3']);
        });
        componente.ngOnInit();
        expect( componente.medicos.length ).toBeGreaterThan(0);
    });
    
    it('Debe de llamar al servidor para agrear un médico', () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake( medico => {
            return EMPTY;
        });
        console.log('BIENTOS CAINAL');
        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();
    });

    it('Debe agregar un nuevo médico al arreglo de médicos', () => {
        const medico = { id: 1, nombre: 'Luisin' };
        spyOn( servicio, 'agregarMedico').and.returnValue( from([medico]) );
        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {
        const miError = 'No se pudo agregar el médico';
        spyOn(servicio, 'agregarMedico').and.returnValue( throwError( miError ) );
        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);
    });

    it('Debe de llamar al servidor para borrar un mèdico', () => {
        spyOn(window, 'confirm' ).and.returnValue(true);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue( EMPTY );
        componente.borrarMedico('1');

        expect( espia ).toHaveBeenCalledWith('1');
    });

    it('NO Debe de llamar al servidor para borrar un mèdico', () => {
        spyOn(window, 'confirm' ).and.returnValue(false);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue( EMPTY );
        componente.borrarMedico('1');

        expect( espia ).not.toHaveBeenCalledWith('1');
    });
});
