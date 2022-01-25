import CounterApp from '../CounterApp';
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('debe mostrar <CounterApp /> correctamente', () => {
        

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar el valor enviado por props', () => {
        
        const valor = 100;
        const wrapper = shallow( 
            <CounterApp 
                value= { valor }
            /> 
        );

        const valorPorDefecto = wrapper.find('h2').text()

        expect( valorPorDefecto ).toBe( valor.toString() );
    })

    test('debe de incrementar con el boton +1', () => {
        
        const btn = wrapper.find('button').at(2);

        btn.simulate('click');

        const valorPorDefecto = wrapper.find('h2').text()

        expect( valorPorDefecto ).toBe( '11' );
    })

    test('debe de decrementar con el boton -1', () => {
        const btn = wrapper.find('button').at(0);

        btn.simulate('click');

        const valorPorDefecto = wrapper.find('h2').text()
        expect( valorPorDefecto ).toBe( '9' );
    })

    test('debe de resetear con el boton reset', () => {
        const valor = 100;
        const wrapper = shallow( 
            <CounterApp 
                value= { valor }
            /> 
        );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const valorPorDefecto = wrapper.find('h2').text()
        expect( valorPorDefecto ).toBe( valor.toString() );
    })
    
    
})
