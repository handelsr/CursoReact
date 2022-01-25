import React from 'react';
import { shallow } from "enzyme"
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"

describe('Pruebas en <RealExampleRef/>', () => {
    const wrapper = shallow(<RealExampleRef />);

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })
    
    test('debe de mostrar el componente <MultipleCustomHooks/>', () => {
        // const { result } = renderHook ( () => RealExampleRef() );
        // const [ , setShow ] = result.current;

        // act(() => {
        //     setShow(true);
        // })

        // const [ , , show ] = result.current;

        // expect( show ).toBe(true);
        
        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
    
})
