import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReucer/TodoAdd';

describe('Pruebas en <TodoAdd/>,', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
    <TodoAdd
        handleAddTodo={ handleAddTodo }
    />);

    test('should debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('NO debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })

    test('debe de llamar la funcion handleAddTodo', () => {
        // Con un argumento

        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })
        console.log(wrapper.find('input').prop('value'));
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect(  handleAddTodo ).toHaveBeenCalledTimes(1);
        expect(  handleAddTodo ).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        });
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    
})
