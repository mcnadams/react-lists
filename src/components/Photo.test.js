import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('Photo test', () => {
  it('make an img', () => {
    const wrapper = shallow(<Photo photoUrl='./path' />);
    expect(wrapper).toMatchSnapshot();
  });
});
