import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

it('renders :D', () => {
    const app = shallow(<App />);
    expect(app.find('.react-text').text()).toEqual('Hello React!');
});