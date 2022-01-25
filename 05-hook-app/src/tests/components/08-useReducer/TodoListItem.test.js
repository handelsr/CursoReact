import { shallow } from 'enzyme';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReucer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en <TodoListItem/>', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(
        <TodoListItem 
            todo = { demoTodos[0] }
            index = {0}
            handleToggle = { handleToggle }
            handleDelete = { handleDelete }
        />
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar la funcion handleDelete', () => {

        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );

    })

    test('debe de llamar la funcion handleToggle', () => {

        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
        
    })

    test('debe de mostrar el texto correctamente', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( `1. ${demoTodos[0].desc}` );
        
    })

    test('debe de tener la clase complete si el TODO.done = true', () => {
        
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo = { demoTodos[0] }
            />
        );
            expect( wrapper.find('p').hasClass('complete') ).toBe(true);
    })
    
    
    
})
