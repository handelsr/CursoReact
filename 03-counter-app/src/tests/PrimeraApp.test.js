import PrimeraAPP from '../PrimeraApp';
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'


describe('Pruebas en <PrimeraApp />', () => {
    // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, Soy Goku';
    //     const { getByText } = render(<PrimeraAPP saludo={saludo}/>)
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // })

    test('debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow( <PrimeraAPP saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( 
            <PrimeraAPP 
                saludo={ saludo }
                subtitulo={ subtitulo } 
            /> 
        );

        const textoParrafo = wrapper.find('p').text()

        expect( textoParrafo ).toBe( subtitulo );
    })
    
    
    
})
