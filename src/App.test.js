import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './components/Form.js'
import sum from './Sum.js'

import {shallow} from 'enzyme'
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


//test that the application retrieves data from the api correctly


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Form with an input', () => {
  const form = shallow(<Form />);
  expect(form.exists('input'));
});

test('renders Form with a button', () => {
  const form = shallow(<Form />);
  expect(form.exists('button'));
});



