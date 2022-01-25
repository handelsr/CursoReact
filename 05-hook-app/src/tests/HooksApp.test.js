import { HookApp } from '../HooksApp';
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <HookApp/>', () => {
    test('debe de ser igual al snapshot', () => {
        const wrapper = shallow(<HookApp/>)

        expect(wrapper).toMatchSnapshot();
    })
})
