import { todoReducer } from '../../../components/08-useReucer/todoReducer'
import { demoTodos } from '../../fixtures/demoTodos';



describe('pruebas en <todoReducer/>', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    })
    
    test('debe de agregar un todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const action = 'add';

        const state = todoReducer(demoTodos, { type: action, payLoad: newTodo });

        expect(state.length).toBe(3);
        expect(state).toEqual([ ...demoTodos, newTodo ]);

    })

    test('debe de borrar un todo', () => {
        // action.payLoad = ID del TODO
        const action = 'delete';
        const id = 2;
        

        const state = todoReducer(demoTodos, { type: action, payLoad: id });

        expect(state.length).toBe(1);
        expect(state).toEqual([ demoTodos[0] ]);
    })

    test('debe de hacer el TOGGLE del todo', () => {
        // action.payLoad = ID del TODO
        const action = 'toggle';
        const id = 1;

        const state = todoReducer(demoTodos, { type: action, payLoad: id });

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    })
    
})
