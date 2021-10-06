import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        console.log(user);

        expect( user ).toEqual( userTest );
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'Handel';
        
        const userTest = {
            uid: 'ABC567',
            username: nombre
        };

        console.log(userTest);

        const user = getUsuarioActivo(nombre);

        expect( user ).toEqual( userTest );
    })
    
})
