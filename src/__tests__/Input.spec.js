import renderer from 'react-test-renderer';
import Input from '../components/Input';
import React from 'react';
import { mount, shallow } from 'enzyme';
import enzymeConfig from '../../enzymeConfig';
import * as mock_dummyData from './dummy/data';
jest.mock('react-redux', () => ({
  useDispatch: ()=> { },
  useSelector: () => ({
    OrganizationReducer: {
      isError: true,
      error: mock_dummyData.error
    },
    RepoReducer: {
      isError: true,
      error: mock_dummyData.error
    }
  })
}));

describe('<Input/>', function() {

  it('Should render correctly', function(){
    const component = renderer.create(<Input />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('Should have correct label and input type', function(){

    const component = shallow(<Input label={'Number'} type={'number'}/>);
    expect(component.find('span').at(0).text()).toEqual('Number');
    expect(component.find('input.form-control[type="number"]')).toHaveLength(1);
  });

  it('Text input should be correct', function() {

    const component = mount(<Input label={'Test'} type={'text'}/>);
    const input = component.find('input.form-control');
    input.simulate('change', {target: {value: 'someth ing'}});
    expect(input.instance().value).toEqual('something');

  })

  it('Error messages should be correct', function() {
    const component = shallow(<Input/>);

    component.find('button').simulate('click');
    const errorMessage = component.find('span.text-danger');
    expect(errorMessage.text()).toEqual('*You need to enter a username to search')
  })

//TODO:  Add more tests related to error display & data fetching test using nock and async-wait-until
})