import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';
import Photos from './Photos';

describe('Photos test', () => {
  it('make a list of photos', () => {
    const wrapper = shallow(<Photos photos={['./path', './path2']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
