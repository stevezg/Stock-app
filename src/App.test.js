import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './components/Form.js'
import {expect} from "chai"
import { mount, shallow } from 'enzyme'


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

//test that the application retrieves data from the api correctly
// test that teh applicaton renders an input and button

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('<App />', () => {
  it('renders an input', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().App).find("input");
  });
});

describe('<App />', () => {
  it('renders empty state upon initially starting up', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.state().App).props();
  });
});


