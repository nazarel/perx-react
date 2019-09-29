import renderer from 'react-test-renderer';
import Input from '../components/Input';
import React from 'react';
import { mount } from 'enzyme';
import enzymeConfig from '../../enzymeConfig';
import { Provider } from "react-redux";
import store from "../store";

describe('<Input/>', function() {

  it('Should render correctly', function(){

    const component = renderer.create(<Provider store={store}><Input /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('Should have correct label and input type', function(){

    const component = mount(<Provider store={store}><Input label={'Number'} type={'number'}/></Provider>);
    expect(component.find('span').at(0).text()).toEqual('Number');
    expect(component.find('input.form-control[type="number"]')).toHaveLength(1);
  });

  it('Text input should be correct', function() {

    const component = mount(<Provider store={store}><Input label={'Test'} type={'text'}/></Provider>);
    const input = component.find('input.form-control');
    input.simulate('change', {target: {value: 'someth ing'}});
    expect(input.instance().value).toEqual('something');

  })

//  Add more tests related to error display
})